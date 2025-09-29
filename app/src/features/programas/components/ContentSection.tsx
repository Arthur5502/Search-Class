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
    IconButton,
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { FiExternalLink, FiChevronLeft } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { PolicySection } from './PolicySection';

interface ContentSectionProps {
    programa: any;
}

export const ContentSection: FC<ContentSectionProps> = ({ programa }) => {
    const router = useRouter();

    return (
        <Box bg="white" py={6}>
            <Container maxW="8xl" px={12}>
                {/* Botão Voltar */}
                <HStack mb={8}>
                    <IconButton
                        aria-label="Voltar"
                        variant="solid"
                        size="lg"
                        color="gray.600"
                        left={-5}
                        bg="white"
                        onClick={() => router.back()}
                        _hover={{
                            bg: 'gray.50',
                            transform: 'translateY(-1px)',
                            shadow: 'lg'
                        }}
                        _active={{
                            transform: 'translateY(0px)',
                            shadow: 'md'
                        }}
                        borderRadius="12px"
                        shadow="md"
                        border="1px solid"
                        borderColor="gray.100"
                        transition="all 0.2s ease"
                        w="48px"
                        h="48px"
                    >
                        <FiChevronLeft size={20} />
                    </IconButton>
                </HStack>

                {/* Layout de duas colunas */}
                <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
                    {/* Coluna Esquerda - Conteúdo Principal */}
                    <GridItem>
                        <VStack align="stretch" gap={6}>
                            {/* Descrição do Evento */}
                            <VStack align="start" gap={10}>
                                <Heading
                                    size="xl"
                                    color="gray.900"
                                    fontSize="42px"
                                    fontWeight="700"
                                >
                                    Descrição do evento
                                </Heading>
                                
                                <Heading
                                    size="lg"
                                    color="gray.900"
                                    fontSize="24px"
                                    fontWeight="700"
                                    lineHeight="1.4"
                                    mb={4}
                                >
                                    {programa.titulo}
                                </Heading>
                                
                                <VStack align="start" gap={4}>
                                    <Text color="gray.700" lineHeight="1.6" fontSize="18px">
                                        {programa.descricao}
                                    </Text>
                                    
                                    <Text color="gray.700" lineHeight="1.6" fontSize="16px">
                                        Neste dia vamos aprender como conteúdos autênticos colaboram para uma rede social
                                        utilizando linguagem simples e leve. Paula irá ensinar como tornar sua marca competitiva.
                                    </Text>
                                </VStack>

                                {/* Informações do Evento */}
                                <VStack align="start" gap={1} pt={2}>
                                    <Text fontWeight="700" color="gray.900" fontSize="16px">
                                        Dia 09/10/2025 às 19h
                                    </Text>
                                    <Text color="gray.600" fontSize="16px">
                                        Local: {programa.local} - {programa.cidade}, {programa.estado}
                                    </Text>
                                    <Text color="gray.600" fontSize="16px">
                                        Realização: {programa.instituicao.nome}
                                    </Text>
                                </VStack>
                            </VStack>

                            {/* Política do Evento */}
                            <PolicySection />

                            {/* Botão de Acesso */}
                            <Button
                                size="lg"
                                w="full"
                                h="54px"
                                bg="blue.50"
                                color="blue.600"
                                fontSize="16px"
                                fontWeight="600"
                                borderRadius="8px"
                                _hover={{
                                    bg: 'blue.100',
                                }}
                                transition="all 0.2s"
                            >
                                <Image
                                    src="/mdi-light_share.svg"
                                    alt="Acessar Website do evento"
                                    boxSize="28px"
                                    mr={2}
                                    filter="invert(39%) sepia(57%) saturate(1000%) hue-rotate(204deg) brightness(94%) contrast(86%)"
                                />
                                Acessar Website do evento
                            </Button>
                        </VStack>
                    </GridItem>

                    {/* Coluna Direita - Imagem */}
                    <GridItem>
                        <VStack gap={4} mt={32} mr={-20} align="center">
                            <Image
                                src={`https://picsum.photos/350/500?random=${programa.id}`}
                                alt="Campus da instituição"
                                w="100%"
                                maxW="450px"
                                h="630px"
                                objectFit="cover"
                                borderRadius="16px"
                                shadow="sm"
                            />
                            <Text
                                fontSize="14px"
                                color="blue.500"
                                textAlign="center"
                                fontWeight="500"
                            >
                                Oferecido por: {programa.instituicao.nome}
                            </Text>
                        </VStack>
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    );
};