'use client';
import { FC } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Icon,
    Image,
} from '@chakra-ui/react';

interface HeroSectionProps {
    programa: {
        id: string | number;
        titulo: string;
        instituicao: { nome: string };
        professor?: string;
    };
}

export const HeroSection: FC<HeroSectionProps> = ({ programa }) => (
    <Box
        position="relative"
        h="509px"
        overflow="hidden"
        w="full"
        bg="black"
    >
        {/* Background Image com Overlay */}
        <Image
            src={`https://picsum.photos/350/500?random=${programa.id}`}
            alt="Background do curso"
            w="full"
            h="full"
            objectFit="cover"
            position="absolute"
            top="0"
            left="0"
            filter="brightness(0.3)"
        />

        {/* Overlay Gradient */}
        <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgGradient="linear(to-r, blackAlpha.800, blackAlpha.600)"
        />

        {/* Content Container - Posicionado na parte inferior */}
        <Container maxW="8xl" h="full" position="relative" zIndex={2} pl={12}>
            <HStack h="full" justify="space-between" align="flex-end" pb={8}>
                {/* Lado Esquerdo - Conteúdo Principal */}
                <VStack align="start" maxW="600px" gap={3}>
                    <Heading
                        as="h1"
                        size="2xl"
                        color="white"
                        fontWeight="700"
                        lineHeight="1.2"
                        fontSize={{ base: "3xl", md: "4xl" }}
                        fontFamily="Poppins, sans-serif"
                    >
                        {programa.titulo}
                    </Heading>

                    <VStack align="start" gap={1} color="gray.200">
                        <Text
                            fontSize="lg"
                            fontWeight="400"
                            fontFamily="Poppins, sans-serif"
                        >
                            Fornecido por {programa.instituicao.nome}
                        </Text>
                        <Text
                            fontSize="lg"
                            fontWeight="400"
                            fontFamily="Poppins, sans-serif"
                        >
                            Professor: {programa.professor || 'Guilherme Wolf'}
                        </Text>
                    </VStack>
                </VStack>

                {/* Lado Direito - Botão Compartilhar */}
                <VStack pb={4}>
                    <Button
                        variant="outline"
                        colorScheme="whiteAlpha"
                        borderColor="whiteAlpha.400"
                        color="white"
                        bg="whiteAlpha.200"
                        backdropFilter="blur(8px)"
                        _hover={{
                            bg: 'whiteAlpha.300',
                            borderColor: 'whiteAlpha.600',
                        }}
                        h="48px"
                        w="186px"
                        px="15px"
                        py="11px"
                        borderRadius="8px"
                        fontSize="md"
                        fontFamily="Poppins, sans-serif"
                    >
                        {/* Ícone personalizado de compartilhar */}
                        <Image
                            src="/mdi-light_share.svg"
                            alt="Compartilhar"
                            boxSize="24px"
                            mr={2}
                            filter="brightness(0) invert(1)" // Torna o ícone branco
                        />
                        Compartilhar
                    </Button>
                </VStack>
            </HStack>
        </Container>
    </Box>
);
