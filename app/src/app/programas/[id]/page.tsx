'use client';
import { FC, useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import { Header } from '../../../components/layout/Header';
import { ProgramaHero, ProgramaConteudo } from '../../../components/programas';
import { getProgramaById } from '../../../lib/programas.service';
import type { Programa } from '../../../types/domain';

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
        <Box bg="gray.50" minH="100vh" position="relative">
            <Header />
            <ProgramaHero programa={programa} />
            <ProgramaConteudo
                programaId={programa.id}
                titulo="Marketing Digital – Do conteúdo às vendas com Paula Tebett"
                descricao={[
                    'A Associação Comercial e Industrial de Campo Grande recebe dia 09/10/2025 às 19h, Paula Tebett – jornalista de formação e com MBA em Marketing pela FGV. Paula construiu uma trajetória que vai muito além da redação. Hoje, é palestrante, professora de MBA, treinadora de equipes, criadora de conteúdo e mestre de cerimônias. Sua atuação é marcada por uma combinação única de conhecimento técnico, visão de mercado e um bom humor que contagia.',
                    'Nesta dia vamos aprender como conteúdos autênticos colaboram para uma rede social utilizando linguagem simples e leve. Paula irá ensinar como tornar sua marca competitiva.'
                ]}
                data="Dia 09/10/2025 às 19h"
                local="Local: ACICG"
                realizacao="Realização: ACICG / SEBRAE / ESCOLA DE NEGÓCIOS"
                imagemUrl="/university-image.jpg"
                instituicao="Cesar School"
            />
        </Box>
    );
};

export default ProgramaDetalhePage;
