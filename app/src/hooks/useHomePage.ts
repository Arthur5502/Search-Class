// hooks/useHomePage.ts
import { useState, useEffect } from 'react'
import {
    getProgramasDestaque,
    getProgramasPopulares,
    getProgramasPorCategoria
} from '@/lib/programas.service'
import type { Programa } from '@/types/domain'

interface UseHomePageReturn {
    programasDestaque: Programa[]
    programasPopulares: Programa[]
    cursosAutomacao: Programa[]
    eventosLocais: Programa[]
    isLoading: boolean
    error: string | null
}

export const useHomePage = (): UseHomePageReturn => {
    const [programasDestaque, setProgramasDestaque] = useState<Programa[]>([])
    const [programasPopulares, setProgramasPopulares] = useState<Programa[]>([])
    const [cursosAutomacao, setCursosAutomacao] = useState<Programa[]>([])
    const [eventosLocais, setEventosLocais] = useState<Programa[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const carregarDados = async () => {
            try {
                setIsLoading(true)
                setError(null)

                const [destaque, populares, automacao, locais] = await Promise.all([
                    getProgramasDestaque(),
                    getProgramasPopulares(),
                    getProgramasPorCategoria('backend'),
                    getProgramasPorCategoria('dados')
                ])

                setProgramasDestaque(destaque)
                setProgramasPopulares(populares)
                setCursosAutomacao(automacao)
                setEventosLocais(locais)
            } catch (err) {
                console.error('Erro ao carregar programas:', err)
                setError(err instanceof Error ? err.message : 'Erro desconhecido')
            } finally {
                setIsLoading(false)
            }
        }

        carregarDados()
    }, [])

    return {
        programasDestaque,
        programasPopulares,
        cursosAutomacao,
        eventosLocais,
        isLoading,
        error
    }
}