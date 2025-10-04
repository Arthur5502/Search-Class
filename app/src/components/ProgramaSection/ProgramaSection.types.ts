// components/ProgramaSection/ProgramaSection.types.ts
import type { Programa } from '../../types/domain'

export interface ProgramaSectionProps {
    title: string
    programas: Programa[]
    showViewAll?: boolean
    viewAllHref?: string
    showScrollButton?: boolean
    isLoading?: boolean
    className?: string
    // 🆕 NOVAS PROPS - Todas opcionais para não quebrar código existente
    layout?: 'carousel' | 'grid'
    cardVariant?: 'compact' | 'standard' | 'featured'
    columns?: {
        base: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
    }
}
