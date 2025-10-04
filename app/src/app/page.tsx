'use client'

import { Box, VStack } from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { SearchInput } from '@/components/ui/SearchInput'
import { FilterTabs } from '@/components/FilterTabs'
import { ProgramaCarousel } from '@/components/ProgramaCarousel'
import { ProgramaSection } from '@/components/ProgramaSection'
import { useHomePage } from '@/hooks/useHomePage'

export default function HomePage() {
  const {
    programasDestaque,
    programasPopulares,
    cursosAutomacao,
    eventosLocais,
    isLoading,
    error
  } = useHomePage()

  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
  }

  if (error) {
    return (
      <Box bg="gray.50" minH="100vh">
        <Header />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          minH="400px"
          color="red.500"
          fontSize="lg"
        >
          Erro ao carregar dados: {error}
        </Box>
      </Box>
    )
  }

  return (
    <Box bg="gray.50" minH="100vh">
      <Header />

      <Box bg="gray.50" py={6} px={4}>
        <VStack gap={4} align="center" w="100%" maxW="800px" mx="auto">
          <SearchInput
            placeholder="Curso de Front-End"
          />
          <FilterTabs />
        </VStack>
      </Box>

      <Box bg="gray.50" py={8}>
        {programasDestaque.length > 0 && (
          <ProgramaCarousel
            programas={programasDestaque}
            autoplay={true}
            autoplayDelay={4000}
          />
        )}
      </Box>

      <Box bg="gray.50" pb={20}>

        <ProgramaSection
          title="Eventos mais acessados das últimas 24hrs"
          programas={programasPopulares.slice(0, 8)}
          viewAllHref="/programas?filter=populares"
          isLoading={isLoading}
          layout="carousel"
          cardVariant="compact"
          columns={{
            base: 2,
            sm: 2,
            md: 4,
            lg: 6,
            xl: 8
          }}
          showScrollButton={false}
        />

        <ProgramaSection
          title="Cursos semelhantes a suas últimas escolhas"
          programas={cursosAutomacao.slice(0, 3)}
          viewAllHref="/programas?area=backend"
          isLoading={isLoading}
          layout="grid"
          cardVariant="standard"
          columns={{
            base: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
          }}
          showScrollButton={false}
          showViewAll={false}
        />

        <ProgramaSection
          title="Eventos hoje na sua cidade"
          programas={eventosLocais.slice(0, 4)}
          viewAllHref="/programas?local=sp"
          isLoading={isLoading}
          layout="carousel"
          cardVariant="compact"
          columns={{
            base: 2,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 4
          }}
          showScrollButton={false}
        />

        {cursosAutomacao.length > 3 && (
          <ProgramaSection
            title="Mais recomendações para você"
            programas={cursosAutomacao.slice(3)}
            viewAllHref="/programas?recomendados=true"
            isLoading={isLoading}
            layout="carousel"
            cardVariant="standard"
            showScrollButton={true}
          />
        )}

        {eventosLocais.length > 4 && (
          <ProgramaSection
            title="Outros eventos na sua região"
            programas={eventosLocais.slice(4)}
            viewAllHref="/programas?eventos=regiao"
            isLoading={isLoading}
            layout="carousel"
            cardVariant="compact"
            showScrollButton={true}
          />
        )}
      </Box>
    </Box>
  )
}