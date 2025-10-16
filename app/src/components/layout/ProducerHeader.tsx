'use client';
import { FC, useState } from 'react';
import {
    Box,
    Container,
    HStack,
    Text,
    Button,
    Image,
    IconButton,
    VStack,
} from '@chakra-ui/react';
import { FiStar, FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { useAppStore } from '../../store/useAppStore';

export const ProducerHeader: FC = () => {
    const { user } = useAppStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Box
                as="header"
                bg="white"
                h="86px"
                borderBottom="1px"
                borderColor="gray.200"
                position="relative"
                zIndex={1000}
                display="flex"
                alignItems="center"
            >
                <Box
                    w="100%"
                    maxW="1728px"
                    mx="auto"
                    px="44px"
                    py="10px"
                >
                    <HStack justify="space-between" align="center" h="100%">
                        <HStack
                            gap="10px"
                            h="55.2px"
                            display={{ base: 'none', md: 'flex' }}
                        >
                            <Link href="/seus-cursos">
                                <HStack gap={2} cursor="pointer">
                                    <Image
                                        src="/Logo.svg"
                                        alt="Logo"
                                        w="43px"
                                        h="43px"
                                        objectFit="contain"
                                    />
                                    <Box>
                                        <Text
                                            fontSize="xl"
                                            color="gray.800"
                                            lineHeight="1"
                                            textTransform="uppercase"
                                            _firstLetter={{
                                                color: "blue.600",
                                                textTransform: "uppercase"
                                            }}
                                            css={{
                                                '&::first-letter': {
                                                    color: 'var(--chakra-colors-blue-600)',
                                                    textTransform: 'uppercase'
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
                                            _firstLetter={{
                                                color: "blue.600",
                                                textTransform: "uppercase"
                                            }}
                                            css={{
                                                '&::first-letter': {
                                                    color: 'var(--chakra-colors-blue-600)',
                                                    textTransform: 'uppercase'
                                                }
                                            }}
                                        >
                                            class
                                        </Text>
                                    </Box>
                                </HStack>
                            </Link>

                            <Box
                                h="42px"
                                w="4px"
                                bg="#265486"
                                borderRadius={7}
                            />

                            <Text
                                fontSize="20px"
                                color="#265486"
                                fontWeight="700"
                            >
                                Área do Produtor
                            </Text>
                        </HStack>

                        <HStack
                            gap="57px"
                            h="36px"
                            display={{ base: 'none', lg: 'flex' }}
                        >
                            <Link href="/seus-cursos">
                                <Button
                                    variant="ghost"
                                    size="md"
                                    fontSize="md"
                                    color="#666B74"
                                    fontWeight="700"
                                    h="36px"
                                    px={4}
                                    _hover={{ bg: "gray.50" }}
                                >
                                    <HStack gap={1}>
                                        <Image src="/star-icon.svg" alt="Star" boxSize="25px" />
                                        <Text>Seus cursos</Text>
                                    </HStack>
                                </Button>
                            </Link>

                            <Link href="/cadastrar-curso">
                                <Button
                                    bg="#298BF8"
                                    color="white"
                                    size="md"
                                    fontSize="sm"
                                    fontWeight="bold"
                                    borderRadius={6}
                                    h="40px"
                                    px={3}
                                    gap={2}
                                    _hover={{ bg: "#265486" }}
                                >
                                    <Image src="/ei_plus.svg" alt="plus" />
                                    Cadastrar novo curso
                                </Button>
                            </Link>

                            {user ? (
                                <Box
                                    w="48px"
                                    h="48px"
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
                                    _hover={{
                                        bg: "blue.600",
                                        transform: "scale(1.05)"
                                    }}
                                >
                                    {user.nome.charAt(0).toUpperCase()}
                                </Box>
                            ) : (
                                <Image
                                    src="/profile-icon.svg"
                                    alt="Profile"
                                    w="48px"
                                    h="48px"
                                    cursor="pointer"
                                    transition="all 0.2s"
                                    _hover={{ opacity: 0.8 }}
                                />
                            )}
                        </HStack>

                        <HStack gap={2} display={{ base: 'flex', lg: 'none' }} w="100%" justify="space-between">
                            <Link href="/seus-cursos">
                                <Image
                                    src="/Logo.svg"
                                    alt="Logo"
                                    w="40px"
                                    h="40px"
                                    objectFit="contain"
                                />
                            </Link>

                            <HStack gap={2}>
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
                                    >
                                        {user.nome.charAt(0).toUpperCase()}
                                    </Box>
                                ) : (
                                    <Image
                                        src="/profile-icon.svg"
                                        alt="Profile"
                                        w="36px"
                                        h="36px"
                                    />
                                )}

                                <IconButton
                                    aria-label="Menu"
                                    variant="ghost"
                                    size="md"
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    _hover={{ bg: "gray.100" }}
                                >
                                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                                </IconButton>
                            </HStack>
                        </HStack>
                    </HStack>
                </Box>
            </Box>

            {isMenuOpen && (
                <Box
                    position="fixed"
                    top="86px"
                    left={0}
                    right={0}
                    bg="white"
                    borderBottom="1px"
                    borderColor="gray.200"
                    zIndex={999}
                    display={{ base: 'block', lg: 'none' }}
                >
                    <VStack align="stretch" gap={0} py={2}>
                        <Link href="/seus-cursos" style={{ width: '100%' }}>
                            <Button
                                variant="ghost"
                                w="100%"
                                h="56px"
                                justifyContent="flex-start"
                                fontSize="md"
                                fontWeight="medium"
                                px={6}
                                borderRadius={0}
                                _hover={{ bg: "gray.50" }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <HStack gap={3}>
                                    <Image src="/star-icon.svg" alt="Star" boxSize="20px" />
                                    <Text>Seus cursos</Text>
                                </HStack>
                            </Button>
                        </Link>

                        <Box h="1px" bg="gray.100" mx={6} />

                        <Link href="/cadastrar-curso" style={{ width: '100%' }}>
                            <Button
                                variant="ghost"
                                w="100%"
                                h="56px"
                                justifyContent="flex-start"
                                fontSize="md"
                                fontWeight="medium"
                                px={6}
                                borderRadius={0}
                                _hover={{ bg: "gray.50" }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <HStack gap={3}>
                                    <Image src="/ei_plus.svg" alt="Plus" boxSize="20px" />
                                    <Text>Cadastrar novo curso</Text>
                                </HStack>
                            </Button>
                        </Link>
                    </VStack>
                </Box>
            )}
        </>
    );
};
