import type { Programa } from '../../types/domain'

export interface ProgramCardLargeProps {
    programa: Programa
    index?: number
    showBadge?: boolean
    badgeText?: string
    className?: string
}
