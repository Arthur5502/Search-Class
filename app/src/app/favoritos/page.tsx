'use client';
import { FC, useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Text,
    HStack,
} from '@chakra-ui/react';
import { Header } from '@/components/Header';
import { EmptyState } from '../../components/ui/EmptyState';
import { ProgramaSection } from '../../components/ProgramaSection';
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
                <Header showBorder={false} />
                <Box py={12} px="20px">
                    <Text>Carregando...</Text>
                </Box>
            </Box>
        );
    }

    return (
        <Box bg="gray.50" minH="100vh">
            <Header showBorder={false} />

            {programasFavoritos.length > 0 ? (
                <Box py={6} px="20px">
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

                    <ProgramaSection
                        title="Favoritos"
                        programas={programasFavoritos}
                        showViewAll={false}
                        showScrollButton={false}
                    />
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

