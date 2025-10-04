import { ReactElement } from 'react'

export interface CarouselButtonProps {
    icon: ReactElement
    direction: 'prev' | 'next'
    onClick?: () => void
    disabled?: boolean
    'aria-label': string
}