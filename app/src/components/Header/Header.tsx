'use client'

import { Box, HStack, Icon } from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'
import { Logo } from '../ui/Logo'
import { NavButton } from '../ui/NavButton'
import { UserAvatar } from '../ui/UserAvatar'
import { useAppStore } from '../../store/useAppStore'
import type { HeaderProps } from './Header.types'

export const Header = ({ className, variant = 'default', showBorder = true }: HeaderProps) => {
    const { user } = useAppStore()

    const handleUserClick = () => {
        console.log('User clicked')
    }

    return (
        <Box
            as="header"
            bg="gray.50"
            py={4}
            borderBottom={showBorder ? "1px" : "none"}
            borderColor="gray.100"
            shadow={showBorder ? "sm" : "none"}
            className={className}
            w="100%"
            minW="100vw"
        >
            <Box px={{ base: 4, sm: 6, md: 8 }} w="100%">
                <HStack justify="space-between" align="center" w="100%">
                    <Box>
                        <Logo
                            size={variant === 'minimal' ? 'sm' : 'md'}
                            showText={variant !== 'minimal'}
                        />
                    </Box>

                    <HStack
                        gap={{ base: 4, md: 8, lg: 16 }}
                        display={{ base: 'none', sm: 'flex' }}
                    >
                        <NavButton
                            href="/favoritos"
                            icon={<Icon as={FiHeart} boxSize={4} />}
                        >
                            Favoritos
                        </NavButton>

                        <NavButton href="/instituicoes">
                            Instituições
                        </NavButton>

                        <UserAvatar
                            user={user}
                            onClick={handleUserClick}
                        />
                    </HStack>

                    <HStack
                        gap={4}
                        display={{ base: 'flex', sm: 'none' }}
                    >
                        <UserAvatar
                            user={user}
                            size="sm"
                            onClick={handleUserClick}
                        />
                    </HStack>
                </HStack>
            </Box>
        </Box>
    )
}
