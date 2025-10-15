import type { Programa } from '../../types/domain'

export interface ProgramaSectionProps {
    title: string
    programas: Programa[]
    showViewAll?: boolean
    viewAllHref?: string
    showScrollButton?: boolean
    isLoading?: boolean
    className?: string
    layout?: 'carousel' | 'grid'
    cardSize?: 'small' | 'medium'
    columns?: {
        base: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
    }
}
