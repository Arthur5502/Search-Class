import type { User } from '../../../types/user'

export interface UserAvatarProps {
    user?: User | null
    size?: 'sm' | 'md' | 'lg'
    fallbackSrc?: string
    onClick?: () => void
}
