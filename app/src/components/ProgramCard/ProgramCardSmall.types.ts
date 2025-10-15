import type { Programa } from '../../types/domain'

export interface ProgramCardSmallProps {
    programa: Programa
    index?: number
    variant?: 'default' | 'variant2'
    className?: string
    showFavorite?: boolean
    enableNavigation?: boolean
}
