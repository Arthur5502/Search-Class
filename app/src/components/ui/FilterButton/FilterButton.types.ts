// components/ui/FilterButton/FilterButton.types.ts
import { ReactElement } from 'react'

export interface FilterButtonProps {
    children: React.ReactNode
    icon: ReactElement
    isActive?: boolean
    variant?: 'default' | 'variant2'
    onClick?: () => void
    minWidth?: string
}
