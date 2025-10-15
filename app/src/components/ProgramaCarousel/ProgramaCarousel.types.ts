import type { Programa } from '../../types/domain'

export interface ProgramaCarouselProps {
    programas: Programa[]
    autoplay?: boolean
    autoplayDelay?: number
    className?: string
}
