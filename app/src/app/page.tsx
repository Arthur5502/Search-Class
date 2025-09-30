'use client';
import { FC, useState, useEffect } from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { Header } from '../components/layout/Header';
import { SearchInput } from '../components/ui/SearchInput';
import { FilterTabs } from '@/components/FilterTabs'
import { ProgramaCarousel } from '../features/programas/components/ProgramaCarousel';
import { ProgramaSection } from '../features/programas/components/ProgramaSection';
import { getProgramasDestaque, getProgramasPopulares, getProgramasPorCategoria } from '../lib/programas.service';
import type { Programa } from '../types/domain';

const HomePage: FC = () => {
  const [programasDestaque, setProgramasDestaque] = useState<Programa[]>([]);
  const [programasPopulares, setProgramasPopulares] = useState<Programa[]>([]);
  const [cursosAutomacao, setCursosAutomacao] = useState<Programa[]>([]);
  const [eventosLocais, setEventosLocais] = useState<Programa[]>([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [destaque, populares, automacao, locais] = await Promise.all([
          getProgramasDestaque(),
          getProgramasPopulares(),
          getProgramasPorCategoria('backend'),
          getProgramasPorCategoria('dados')
        ]);

        setProgramasDestaque(destaque);
        setProgramasPopulares(populares);
        setCursosAutomacao(automacao);
        setEventosLocais(locais);
      } catch (error) {
        console.error('Erro ao carregar programas:', error);
      }
    };

    carregarDados();
  }, []);

  return (
    <Box bg="gray.50" minH="100vh">
      <Header />

      {/* Seção de busca e filtros - SEM CONTAINER */}
      <Box bg="gray.50" py={6}>
        <VStack gap={4} align="center" w="100%">
          <SearchInput placeholder="Procure por cursos" />
          <FilterTabs />
        </VStack>
      </Box>

      {/* Carousel principal */}
      <Box bg="gray.50">
        {programasDestaque.length > 0 && (
          <ProgramaCarousel programas={programasDestaque} />
        )}
      </Box>

      {/* Seções de programas */}
      <Box bg="gray.50">
        <ProgramaSection
          title="Eventos mais acessados das últimas 24hrs"
          programas={programasPopulares}
          viewAllHref="/programas?filter=populares"
        />

        <ProgramaSection
          title="Cursos semelhantes a suas últimas escolhas"
          programas={cursosAutomacao}
          viewAllHref="/programas?area=backend"
        />

        <ProgramaSection
          title="Eventos hoje na sua cidade"
          programas={eventosLocais}
          viewAllHref="/programas?local=sp"
        />
      </Box>
    </Box>
  );
};

export default HomePage;
