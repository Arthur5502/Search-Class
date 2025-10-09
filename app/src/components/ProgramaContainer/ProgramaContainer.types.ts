import type { Programa } from '../../types/domain'

export interface ProgramaSectionData {
    id?: string
    title: string
    programas: Programa[]
    showViewAll?: boolean
    viewAllHref?: string
    cardSize?: 'small' | 'medium' | 'large'
    layout?: 'carousel' | 'grid'
    isLoading?: boolean
    showScrollButton?: boolean
    columns?: {
        base: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
    }
}

export interface ProgramaContainerProps {
    sections: ProgramaSectionData[]
    className?: string
    spacing?: number
}
