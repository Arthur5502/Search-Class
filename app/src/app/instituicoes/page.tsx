'use client';
import { FC, useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Header } from '../../components/layout/Header';
import { InstituicaoSection } from '../../features/programas/components/InstituicaoSection';
import { getTodasInstituicoes } from '../../lib/programas.service';
import type { Instituicao } from '../../types/domain';
import { InstituicaoGrid } from '../../features/programas/components/InstituicoesGrid';

const InstituicoesPage: FC = () => {
  
  const [todasInstituicoes, setTodasInstituicoes] = useState<Instituicao[]>([]);

  useEffect(() => {
    const carregar = async () => {
      const todas = await getTodasInstituicoes();
      setTodasInstituicoes(todas);
    };

    carregar();
  }, []);

  return (
    <Box bg="gray.50" minH="100vh">
      <Header />

      <Box px={10} py={10}>
        <Text fontSize="3xl" fontWeight="bold" color="black" mb={6} px={40}>
          Instituições de Ensino
        </Text>

        
        <InstituicaoSection
          title="Instituições em recentes"
          instituicoes={todasInstituicoes}
          viewAllHref="/instituicoes" 
        />
      </Box>

      <Box px={10} py={0}>
        <InstituicaoGrid instituicoes={todasInstituicoes} />
      </Box>
    </Box>
  );
};

export default InstituicoesPage;