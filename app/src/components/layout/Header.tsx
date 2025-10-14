'use client';
import { FC, useState } from 'react';
import {
    Box,
    HStack,
    Text,
    Button,
    Image,
    IconButton,
    Drawer,
    VStack,
} from '@chakra-ui/react';
import { FiHeart, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useAppStore } from '../../store/useAppStore';

export const Header: FC = () => {
    const { user } = useAppStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <Box
            as="header"
            bg="gray.50"
            py={4}
            borderBottom="1px"
            borderColor="gray.100"
            shadow="sm"
            w="100%"
            position="relative"
            zIndex={10}
        >
            <Box px={{ base: 4, sm: 6, md: 8, lg: 10 }} w="100%">
                <HStack justify="space-between" align="center" w="100%">
                    {/* Logo */}
                    <Link href="/">
                        <HStack gap={3} cursor="pointer">
                            <Image
                                src="/Logo.svg"
                                alt="Logo"
                                w={{ base: 10, md: 12 }}
                                h={{ base: 10, md: 12 }}
                                objectFit="contain"
                            />
                            <Box>
                                <Text
                                    fontSize={{ base: 'lg', md: 'xl' }}
                                    color="gray.800"
                                    lineHeight="1"
                                    fontWeight="600"
                                >
                                    <Text as="span" color="blue.600">S</Text>EARCH
                                </Text>
                                <Text
                                    fontSize={{ base: 'lg', md: 'xl' }}
                                    color="gray.500"
                                    fontWeight="600"
                                    letterSpacing="wide"
                                >
                                    <Text as="span" color="blue.600">C</Text>LASS
                                </Text>
                            </Box>
                        </HStack>
                    </Link>

                    {/* Desktop Navigation */}
                    <HStack 
                        gap={{ base: 4, md: 8, lg: 58 }} 
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Link href="/favoritos">
                            <Button
                                variant="ghost"
                                size="md"
                                fontSize="sm"
                                color="gray.600"
                                fontWeight="medium"
                                _hover={{ bg: "gray.50" }}
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
                                _hover={{ bg: "gray.50" }}
                            >
                                Instituições
                            </Button>
                        </Link>

                        {user ? (
                            <Box
                                w={10}
                                h={10}
                                bg="blue.500"
                                rounded="full"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                color="white"
                                fontSize="sm"
                                fontWeight="bold"
                                cursor="pointer"
                                _hover={{ bg: "blue.600" }}
                            >
                                {user.nome.charAt(0).toUpperCase()}
                            </Box>
                        ) : (
                            <Image
                                src="/profile-icon.png"
                                alt="Profile"
                                w={10}
                                h={10}
                                cursor="pointer"
                                _hover={{ opacity: 0.8 }}
                            />
                        )}
                    </HStack>

                    {/* Mobile Menu Button */}
                    <HStack 
                        gap={4}
                        display={{ base: 'flex', md: 'none' }}
                    >
                        {user ? (
                            <Box
                                w={8}
                                h={8}
                                bg="blue.500"
                                rounded="full"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                color="white"
                                fontSize="xs"
                                fontWeight="bold"
                                cursor="pointer"
                                _hover={{ bg: "blue.600" }}
                            >
                                {user.nome.charAt(0).toUpperCase()}
                            </Box>
                        ) : (
                            <Image
                                src="/profile-icon.png"
                                alt="Profile"
                                w={8}
                                h={8}
                                cursor="pointer"
                                _hover={{ opacity: 0.8 }}
                            />
                        )}
                        <IconButton
                            aria-label="Menu"
                            variant="ghost"
                            onClick={toggleMenu}
                            color="gray.800"
                            _hover={{ bg: "gray.100" }}
                        >
                            <FiMenu size={24} />
                        </IconButton>
                    </HStack>
                </HStack>
            </Box>

            {/* Mobile Drawer */}
            <Drawer.Root 
                open={isMenuOpen} 
                onOpenChange={(e) => setIsMenuOpen(e.open)}
                placement="end"
                size="sm"
                modal={true}
            >
                <Drawer.Backdrop bg="blackAlpha.600" />
                <Drawer.Content bg="white" position="fixed">
                    <Drawer.Header borderBottomWidth="1px" borderColor="gray.200" py={4}>
                        <HStack justify="space-between" w="100%" align="center">
                            <Text fontSize="2xl" fontWeight="700" color="gray.800">Menu</Text>
                            <Drawer.CloseTrigger asChild>
                                <IconButton
                                    aria-label="Fechar menu"
                                    variant="ghost"
                                    color="gray.500"
                                    size="md"
                                    _hover={{ bg: "gray.100", color: "gray.700" }}
                                >
                                    <FiX size={24} />
                                </IconButton>
                            </Drawer.CloseTrigger>
                        </HStack>
                    </Drawer.Header>
                    <Drawer.Body pt={4} px={4}>
                        <VStack align="stretch" gap={2}>
                            <Link href="/favoritos" onClick={toggleMenu}>
                                <Box
                                    w="100%"
                                    py={3}
                                    px={4}
                                    borderRadius="md"
                                    cursor="pointer"
                                    transition="all 0.2s"
                                    _hover={{ 
                                        bg: "blue.50"
                                    }}
                                >
                                    <HStack gap={3}>
                                        <FiHeart size={20} color="gray.600" />
                                        <Text 
                                            fontSize="md" 
                                            fontWeight="500" 
                                            color="gray.700"
                                        >
                                            Favoritos
                                        </Text>
                                    </HStack>
                                </Box>
                            </Link>

                            <Link href="/instituicoes" onClick={toggleMenu}>
                                <Box
                                    w="100%"
                                    py={3}
                                    px={4}
                                    borderRadius="md"
                                    cursor="pointer"
                                    transition="all 0.2s"
                                    _hover={{ 
                                        bg: "blue.50"
                                    }}
                                >
                                    <HStack gap={3}>
                                        <Text 
                                            fontSize="md" 
                                            fontWeight="500" 
                                            color="gray.700"
                                        >
                                            Instituições
                                        </Text>
                                    </HStack>
                                </Box>
                            </Link>
                        </VStack>
                    </Drawer.Body>
                </Drawer.Content>
            </Drawer.Root>
        </Box>
    );
};
