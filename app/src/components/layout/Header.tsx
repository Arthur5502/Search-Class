'use client';
import { FC, useState } from 'react';
import {
    Box,
    HStack,
    Text,
    Button,
    Image,
    IconButton,
    VStack,
} from '@chakra-ui/react';
import { FiHeart, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useAppStore } from '../../store/useAppStore';

export const Header: FC = () => {
    const { user } = useAppStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Box
                as="header"
                bg="gray.50"
                py={4}
                borderBottom="1px"
                borderColor="gray.100"
                position="sticky"
                top={0}
                zIndex={1000}
                w="100%"
            >
                <Box
                    mx="auto"
                    px={{ base: 4, md: 8, lg: 16 }}
                >
                    <HStack justify="space-between" align="center">

                        <Link href="/homepage">
                            <HStack gap={3} cursor="pointer">
                                <Image
                                    src="/Logo.svg"
                                    alt="Logo"
                                    w={{ base: 10, md: 12 }}
                                    h={{ base: 10, md: 12 }}
                                    objectFit="contain"
                                />
                                <Box display={{ base: 'none', sm: 'block' }}>
                                    <Text
                                        fontSize="xl"
                                        color="gray.800"
                                        lineHeight="1"
                                        textTransform="uppercase"
                                        css={{
                                            '&::first-letter': {
                                                color: 'var(--chakra-colors-blue-600)'
                                            }
                                        }}
                                    >
                                        search
                                    </Text>
                                    <Text
                                        fontSize="xl"
                                        color="gray.500"
                                        textTransform="uppercase"
                                        letterSpacing="wide"
                                        css={{
                                            '&::first-letter': {
                                                color: 'var(--chakra-colors-blue-600)'
                                            }
                                        }}
                                    >
                                        class
                                    </Text>
                                </Box>
                            </HStack>
                        </Link>

                        <HStack
                            gap={{ base: 4, lg: 12 }}
                            display={{ base: 'none', md: 'flex' }}
                        >
                            <Link href="/favoritos">
                                <Button
                                    variant="ghost"
                                    size="md"
                                    fontSize="sm"
                                    color="gray.600"
                                    fontWeight="medium"
                                    _hover={{ bg: "gray.100" }}
                                >
                                    <FiHeart size={16} style={{ marginRight: '8px' }} />
                                    Favoritos
                                </Button>
                            </Link>

                            <Link href="/instituicoes">
                                <Button
                                    variant="ghost"
                                    size="md"
                                    fontSize="sm"
                                    color="gray.600"
                                    fontWeight="medium"
                                    _hover={{ bg: "gray.100" }}
                                >
                                    Instituições
                                </Button>
                            </Link>

                            {user ? (
                                <Box
                                    w="36px"
                                    h="36px"
                                    bg="blue.500"
                                    rounded="full"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    color="white"
                                    fontSize="xs"
                                    fontWeight="bold"
                                    cursor="pointer"
                                >
                                    {user.nome.charAt(0).toUpperCase()}
                                </Box>
                            ) : (
                                <Image
                                    src="/profile-icon.svg"
                                    alt="User"
                                    w="40px"
                                    h="40px"
                                    cursor="pointer"
                                />
                            )}
                        </HStack>

                        {/* Mobile Hamburger */}
                        <IconButton
                            aria-label="Menu"
                            variant="ghost"
                            display={{ base: 'flex', md: 'none' }}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            _hover={{ bg: "gray.100" }}
                        >
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </IconButton>
                    </HStack>
                </Box>
            </Box>

            {isMenuOpen && (
                <Box
                    position="fixed"
                    top="76px"
                    left={0}
                    right={0}
                    bg="gray.50"
                    borderBottom="1px"
                    borderColor="gray.100"
                    zIndex={999}
                    display={{ base: 'block', md: 'none' }}
                >
                    <VStack align="stretch" gap={0} py={2}>
                        <Link href="/favoritos" style={{ width: '100%' }}>
                            <Button
                                variant="ghost"
                                w="100%"
                                h="56px"
                                justifyContent="flex-start"
                                px={6}
                                fontSize="md"
                                color="gray.600"
                                fontWeight="medium"
                                _hover={{ bg: "gray.100" }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <FiHeart size={20} style={{ marginRight: '12px' }} />
                                Favoritos
                            </Button>
                        </Link>

                        <Box h="1px" bg="gray.200" mx={4} />

                        <Link href="/instituicoes" style={{ width: '100%' }}>
                            <Button
                                variant="ghost"
                                w="100%"
                                h="56px"
                                justifyContent="flex-start"
                                px={6}
                                fontSize="md"
                                color="gray.600"
                                fontWeight="medium"
                                _hover={{ bg: "gray.100" }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Instituições
                            </Button>
                        </Link>

                        <Box h="1px" bg="gray.200" mx={4} />

                        <Box px={6} py={4}>
                            {user ? (
                                <HStack gap={3}>
                                    <Box
                                        w="40px"
                                        h="40px"
                                        bg="blue.500"
                                        rounded="full"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                        color="white"
                                        fontSize="sm"
                                        fontWeight="bold"
                                    >
                                        {user.nome.charAt(0).toUpperCase()}
                                    </Box>
                                    <Text color="gray.700" fontWeight="medium">
                                        {user.nome}
                                    </Text>
                                </HStack>
                            ) : (
                                <HStack gap={3}>
                                    <Image
                                        src="/profile-icon.svg"
                                        alt="User"
                                        w="40px"
                                        h="40px"
                                    />
                                    <Text color="gray.700" fontWeight="medium">
                                        Perfil
                                    </Text>
                                </HStack>
                            )}
                        </Box>
                    </VStack>
                </Box>
            )}
        </>
    );
};