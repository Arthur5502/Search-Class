import { Box, Image } from '@chakra-ui/react'
import type { UserAvatarProps } from './UserAvatar.types'

const AVATAR_SIZES = {
    sm: 8,
    md: 10,
    lg: 12
} as const

export const UserAvatar = ({
    user,
    size = 'md',
    fallbackSrc = '/profile-icon.png',
    onClick
}: UserAvatarProps) => {
    const avatarSize = AVATAR_SIZES[size]

    if (user) {
        return (
            <Box
                w={avatarSize}
                h={avatarSize}
                bg="blue.500"
                rounded="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="white"
                fontSize="sm"
                fontWeight="bold"
                cursor="pointer"
                transition="all 0.2s"
                onClick={onClick}
                _hover={{
                    bg: "blue.600",
                    transform: "scale(1.05)"
                }}
                _active={{
                    transform: "scale(0.98)"
                }}
            >
                {user.nome.charAt(0).toUpperCase()}
            </Box>
        )
    }

    return (
        <Image
            src={fallbackSrc}
            alt="Profile"
            w={avatarSize}
            h={avatarSize}
            cursor="pointer"
            borderRadius="full"
            transition="all 0.2s"
            onClick={onClick}
            _hover={{
                opacity: 0.8,
                transform: "scale(1.05)"
            }}
            _active={{
                transform: "scale(0.98)"
            }}
        />
    )
}
