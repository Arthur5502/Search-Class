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
            bg="gray.50"
            py={4}
            borderBottom="1px"
            borderColor="gray.100"
            shadow="sm"
        >
            <Container maxW="8xl">
                <HStack justify="space-between" align="center">
                    <Link href="/">
                        <HStack gap={3} cursor="pointer" ml={10}>
                            <Image
                                src="/Logo.svg"
                                alt="Logo"
                                w={12}
                                h={12}
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
                    </HStack>
                </HStack>
            </Container>
        </Box>
    );
};