import { ReactElement } from 'react'

export interface NavButtonProps {
    children: React.ReactNode
    href: string
    icon?: ReactElement
    variant?: 'ghost' | 'solid'
    size?: 'sm' | 'md' | 'lg'
}
