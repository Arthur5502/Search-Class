'use client';

import { useState, useEffect } from 'react';
import { Box, VStack, Text, Grid } from '@chakra-ui/react';
import { ProducerHeader } from '@/components/layout/ProducerHeader';
import { ProgramCardSmall } from '@/components/ProgramCard/ProgramCardSmall';
import { useCursosCadastrados } from '@/store/useAppStore';
import type { Programa } from '@/types/domain';

export default function SeusCursosPage() {
    const { cursosCadastrados } = useCursosCadastrados();
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return (
            <>
                <ProducerHeader />
                <Box
                    bg="#FFFFFF"
                    minH="100vh"
                    py={{ base: 6, md: 8, lg: 10 }}
                    px={{ base: 4, md: "180px" }}
                >
                    <VStack
                        align="stretch"
                        gap={{ base: 10, md: 12 }}
                        maxW="1400px"
                        mx="auto"
                    >
                        <Text
                            fontSize={{ base: "32px", md: "46.08px" }}
                            fontWeight="400"
                            color="#000000"
                            fontFamily="'Poppins', sans-serif"
                        >
                            Carregando...
                        </Text>
                    </VStack>
                </Box>
            </>
        );
    }

    return (
        <>
            <ProducerHeader />

            <Box
                bg="#FFFFFF"
                minH="100vh"
                py={{ base: 6, md: 8, lg: 10 }}
                px={{ base: 4, md: "140px" }}
            >
                <VStack
                    align="stretch"
                    gap={{ base: 6, md: 8 }}
                    maxW="1400px"
                    mx="auto"
                >
                    <Box>
                        <Text
                            fontSize={{ base: "32px", md: "46.08px" }}
                            fontWeight="400"
                            color="#000000"
                            lineHeight="100%"
                            letterSpacing="0%"
                            fontFamily="'Poppins', sans-serif"
                        >
                            Seus cursos
                        </Text>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent="flex-end"
                    >
                        <Text
                            fontSize={{ base: "24px", md: "32px" }}
                            fontWeight="400"
                            color="#000000"
                            lineHeight="100%"
                            letterSpacing="0%"
                            fontFamily="'Poppins', sans-serif"
                        >
                            {cursosCadastrados.length} cursos promovidos por você
                        </Text>
                    </Box>

                    {cursosCadastrados.length > 0 ? (
                        <Grid
                            templateColumns={{
                                base: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(3, 1fr)",
                                lg: "repeat(4, 1fr)"
                            }}
                            gap={{ base: 4, md: 6, lg: 8 }}
                            w="100%"
                        >
                            {cursosCadastrados.map((programa: Programa, index: number) => (
                                <ProgramCardSmall
                                    key={programa.id}
                                    programa={programa}
                                    index={index}
                                    showFavorite={false}
                                    enableNavigation={false}
                                />
                            ))}
                        </Grid>
                    ) : (
                        <Box
                            textAlign="center"
                            py={20}
                        >
                            <Text
                                fontSize="24px"
                                color="#666B74"
                                fontFamily="'Poppins', sans-serif"
                            >
                                Você ainda não cadastrou nenhum curso
                            </Text>
                        </Box>
                    )}
                </VStack>
            </Box>
        </>
    );
}
