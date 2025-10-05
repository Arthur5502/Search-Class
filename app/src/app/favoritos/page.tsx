'use client';
import { FC, useEffect, useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Grid,
    Image,
    VStack,
    HStack,
} from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
import { Header } from '../../components/layout/Header';
import { useAppStore } from '../../store/useAppStore';
import { mockProgramas } from '../../mocks/programas';
import type { Programa } from '../../types/domain';
import Link from 'next/link';

const FavoritosPage: FC = () => {
    const [isHydrated, setIsHydrated] = useState(false);
    const [programasFavoritos, setProgramasFavoritos] = useState<Programa[]>([]);
    const favoritos = useAppStore((state) => state.favoritos);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    useEffect(() => {
        if (isHydrated) {
            const programas = mockProgramas.filter(p => favoritos.includes(p.id));
            setProgramasFavoritos(programas);
        }
    }, [favoritos, isHydrated]);

    if (!isHydrated) {
        return (
            <Box bg="gray.50" minH="100vh">
                <Header />
                <Container maxW="8xl" py={12}>
                    <Text>Carregando...</Text>
                </Container>
            </Box>
        );
    }

    return (
        <Box bg="gray.50" minH="100vh">
            <Header />

            <Container maxW="8xl" py={8} px={10}>
                {programasFavoritos.length > 0 ? (
                    <>
                        <HStack justify="space-between" align="center" mb={6}>
                            <Heading
                                fontSize="3xl"
                                color="gray.900"
                                fontWeight="600"
                            >
                                Favoritos
                            </Heading>
                            <Text fontSize="sm" color="gray.600" fontWeight="500">
                                {programasFavoritos.length} {programasFavoritos.length === 1 ? 'curso favorito' : 'cursos favoritos'}
                            </Text>
                        </HStack>

                        <Grid
                            templateColumns="repeat(4, 1fr)"
                            gap={5}
                            w="100%"
                        >
                            {programasFavoritos.map((programa) => (
                                <Link key={programa.id} href={`/programas/${programa.id}`}>
                                    <Box
                                        cursor="pointer"
                                        transition="all 0.3s ease"
                                        _hover={{
                                            transform: 'translateY(-2px)',
                                        }}
                                    >
                                        <Box
                                            position="relative"
                                            overflow="hidden"
                                            h="170px"
                                            borderRadius="12px"
                                            mb={2}
                                            shadow="sm"
                                            transition="all 0.3s ease"
                                            _hover={{
                                                shadow: 'md',
                                            }}
                                        >
                                            <Image
                                                src={`https://picsum.photos/280/200?random=${programa.id}`}
                                                alt={programa.titulo}
                                                w="100%"
                                                h="100%"
                                                objectFit="cover"
                                            />
                                        </Box>

                                        <Text
                                            fontSize="xs"
                                            color="gray.600"
                                            textTransform="uppercase"
                                            fontWeight="600"
                                            letterSpacing="wide"
                                            lineHeight="1.4"
                                        >
                                            CURSO DE {programa.area.toUpperCase()}
                                        </Text>
                                    </Box>
                                </Link>
                            ))}
                        </Grid>
                    </>
                ) : (
                    <VStack
                        gap={6}
                        py={20}
                        align="center"
                        justify="center"
                        minH="60vh"
                    >
                        <Box position="relative">
                            <FiHeart
                                size={80}
                                color="#D1D5DB"
                                strokeWidth={1.5}
                            />
                            <Box
                                position="absolute"
                                top="50%"
                                left="50%"
                                transform="translate(-50%, -50%) rotate(45deg)"
                                w="100px"
                                h="2px"
                                bg="gray.400"
                            />
                        </Box>

                        <VStack gap={2}>
                            <Text
                                fontSize="xl"
                                color="gray.700"
                                fontWeight="500"
                                textAlign="center"
                            >
                                Você ainda não tem nenhum curso favorito
                            </Text>
                            <Text
                                fontSize="sm"
                                color="gray.500"
                                textAlign="center"
                            >
                                Basta clicar em favorito em cada curso para ele aparecer aqui
                            </Text>
                        </VStack>
                    </VStack>
                )}
            </Container>
        </Box>
    );
};

export default FavoritosPage;

