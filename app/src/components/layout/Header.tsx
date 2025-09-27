'use client';
import { FC } from 'react';
import {
    Box,
    Container,
    HStack,
    Text,
    Button,
    Image,
} from '@chakra-ui/react';
import { FiHeart, FiUser } from 'react-icons/fi';
import Link from 'next/link';
import { useAppStore } from '../../store/useAppStore';

export const Header: FC = () => {
    const { user } = useAppStore();

    return (
        <Box
            as="header"
            bg="white"
            py={4}
            borderBottom="1px"
            borderColor="gray.100"
            shadow="sm"
        >
            <Container maxW="8xl">
                <HStack justify="space-between" align="center">
                    {/* Header esquerdo*/}
                    <Link href="/">
                        <HStack gap={3} cursor="pointer" ml={10}>
                            <Image
                                src="/logo.png"
                                alt="Logo"
                                w={12}
                                h={12}
                                objectFit="contain"
                            />
                            <Box>
                                <Text fontSize="xl" fontWeight="bold" color="gray.800">
                                    Search
                                </Text>
                                <Text fontSize="xs" color="gray.500" textTransform="uppercase" letterSpacing="wide">
                                    Class
                                </Text>
                            </Box>
                        </HStack>
                    </Link>

                    {/* Header Direito */}
                    <HStack gap={58} mr={-10}>
                        <Link href="/favoritos">
                            <Button
                                variant="ghost"
                                size="md"
                                fontSize="sm"
                                color="gray.600"
                                fontWeight="medium"
                                _hover={{ bg: "gray.50" }}
                            >
                                <FiHeart size={16} style={{ marginRight: '0px' }} />
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
                </HStack>
            </Container>
        </Box>
    );
};
