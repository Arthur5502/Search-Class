'use client';
import { FC, useEffect, useState } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    HStack,
} from '@chakra-ui/react';
import { Header } from '../../components/layout/Header';
import { EmptyState } from '../../components/ui/EmptyState';
import { ProgramaSection } from '../../features/programas/components/ProgramaSection';
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

                        <ProgramaSection
                            programas={programasFavoritos}
                            layout="grid"
                            showHeader={false}
                            showViewAll={false}
                            showScrollButton={false}
                        />
                    </>
                ) : (
                    <EmptyState />
                )}
            </Container>
        </Box>
    );
};

export default FavoritosPage;

