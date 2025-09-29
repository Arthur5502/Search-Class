'use client';
import { FC, useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';

import { HeroSection } from '../../../features/programas/components/HeroSection';
import { ContentSection } from '../../../features/programas/components/ContentSection';
import { getProgramaById } from '@/lib/programas.service';
import type { Programa } from '@/types/domain';

/* Hook de dados */
const usePrograma = (id: string) => {
    const [programa, setPrograma] = useState<Programa | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;
        (async () => {
            setLoading(true);
            const data = await getProgramaById(id);
            setPrograma(data);
            setLoading(false);
        })();
    }, [id]);

    return { programa, loading };
};

const ProgramaDetalhePage: FC = () => {
    const { id } = useParams<{ id: string }>();
    const { programa, loading } = usePrograma(id);

    if (loading || !programa) {
        return (
            <Box bg="gray.50" minH="100vh">
                <Header />
                <Box p={8}>
                    <Text>
                        {loading ? 'Carregando…' : 'Programa não encontrado'}
                    </Text>
                </Box>
            </Box>
        );
    }

    /* PÁGINA COMPLETA */
    return (
        <Box bg="gray.50" minH="100vh">
            <Header />
            <HeroSection programa={programa} />
            <ContentSection programa={programa} />
        </Box>
    );
};

export default ProgramaDetalhePage;
