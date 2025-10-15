'use client'

import { Box, VStack } from '@chakra-ui/react'
import { Header } from '@/components/layout/Header'
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
        <Box bg="gray.50" minH="100vh" position="relative" overflow="hidden">
            <Header />

            <Box bg="gray.50" py={{ base: 4, md: 6 }} px={{ base: 2, sm: 3, md: 4 }}>
                <VStack gap={{ base: 2, md: 3 }} align="center" w="100%" maxW="800px" mx="auto">
                    <SearchInput
                        placeholder="Curso de Front-End"
                    />
                    <FilterTabs />
                </VStack>
            </Box>

            <Box py={{ base: 4, md: 6, lg: 8 }}>
                {programasDestaque.length > 0 && (
                    <ProgramaCarousel
                        programas={programasDestaque}
                        autoplay={true}
                        autoplayDelay={4000}
                    />
                )}
            </Box>

            <Box bg="gray.50" pb={{ base: 10, md: 15, lg: 20 }}>
                <ProgramaSection
                    title="Eventos mais acessados das últimas 24hrs"
                    programas={programasPopulares.slice(0, 20)}
                    viewAllHref="/programas?filter=populares"
                    showScrollButton={false}
                    cardType="small"
                />

                <ProgramaSection
                    title="Cursos semelhantes a suas últimas escolhas"
                    programas={cursosAutomacao.slice(0, 6)}
                    viewAllHref="/programas?area=backend"
                    showScrollButton={false}
                    showViewAll={false}
                    cardType="medium"
                />

                <ProgramaSection
                    title="Eventos hoje na sua cidade"
                    programas={eventosLocais.slice(0, 8)}
                    viewAllHref="/programas?local=sp"
                    showScrollButton={false}
                    cardType="small"
                />

                {cursosAutomacao.length > 6 && (
                    <ProgramaSection
                        title="Mais recomendações para você"
                        programas={cursosAutomacao.slice(6)}
                        viewAllHref="/programas?recomendados=true"
                        showScrollButton={true}
                        cardType="medium"
                    />
                )}

                {eventosLocais.length > 8 && (
                    <ProgramaSection
                        title="Outros eventos na sua região"
                        programas={eventosLocais.slice(8)}
                        viewAllHref="/programas?eventos=regiao"
                        showScrollButton={true}
                        cardType="small"
                    />
                )}
            </Box>
        </Box>
    )
}