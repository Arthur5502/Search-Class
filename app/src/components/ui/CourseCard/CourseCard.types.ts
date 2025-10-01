// components/ui/CourseCard/CourseCard.types.ts
import type { Programa } from '../../../types/domain'

export interface CourseCardProps {
    programa: Programa
    width?: string
    height?: string
    priority?: boolean
    onClick?: () => void
    // 🆕 NOVAS PROPS - Todas opcionais para não quebrar código existente
    variant?: 'carousel' | 'compact' | 'standard' | 'featured'
    showCategory?: boolean
    showLocation?: boolean
    layout?: 'overlay' | 'external' // overlay = texto sobre imagem, external = texto embaixo
}

export interface CardDimensions {
    width: string
    height: string
}
