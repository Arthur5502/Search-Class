'use client';
import { FC, useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Text,
    HStack,
    SimpleGrid,
} from '@chakra-ui/react';
import { Header } from '@/components/layout/Header';
import { EmptyState } from '../../components/ui/EmptyState';
import { ProgramCardSmall } from '../../components/ProgramCard/ProgramCardSmall';
import { useAppStore } from '../../store/useAppStore';
import { mockProgramas } from '../../mocks/programas';
import type { Programa } from '../../types/domain';

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
                <Box py={12} px="20px">
                    <Text>Carregando...</Text>
                </Box>
            </Box>
        );
    }

    return (
        <Box bg="gray.50" minH="100vh">
            <Header />

            {programasFavoritos.length > 0 ? (
                <Box py={6} px={{ base: "20px", md: "40px", lg: "80px" }}>
                    <HStack justify="space-between" align="center" mb={8}>
                        <Heading
                            size="lg"
                            color="gray.900"
                            fontWeight="600"
                            fontSize={{ base: "xl", md: "2xl" }}
                        >
                            Favoritos
                        </Heading>
                        <Text fontSize="sm" color="gray.500" fontWeight="500">
                            {programasFavoritos.length} {programasFavoritos.length === 1 ? 'curso favorito' : 'cursos favoritos'}
                        </Text>
                    </HStack>

                    <SimpleGrid
                        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                        gap={{ base: 4, md: 6 }}
                        w="100%"
                    >
                        {programasFavoritos.map((programa, index) => (
                            <ProgramCardSmall
                                key={programa.id}
                                programa={programa}
                                index={index}
                            />
                        ))}
                    </SimpleGrid>
                </Box>
            ) : (
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minH="calc(100vh - 100px)"
                    w="100%"
                    mt="-40px"
                >
                    <EmptyState />
                </Box>
            )}
        </Box>
    );
};

export default FavoritosPage;

