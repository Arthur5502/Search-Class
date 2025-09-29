'use client';
import { FC, useState, useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Text,
    Button,
    VStack,
    HStack,
    Badge,
    Image,
    Icon
} from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import { useParams } from 'next/navigation';
import { Header } from '../../../components/layout/Header';
import { getProgramaById } from '../../../lib/programas.service';
import type { Programa } from '../../../types/domain';

const usePrograma = (id: string) => {
    const [programa, setPrograma] = useState<Programa | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const carregarPrograma = async () => {
            if (!id) return;
            
            setLoading(true);
            const data = await getProgramaById(id);
            setPrograma(data);
            setLoading(false);
        };

        carregarPrograma();
    }, [id]);

    return { programa, loading };
};

const HeroSection: FC<{ programa: Programa }> = ({ programa }) => (
    <Box position="relative" h="500px" overflow="hidden" w="full">
        <Image
            src={programa.id === 'p1' ? '/img-mat-comp.jpg' : programa.instituicao.logoUrl}
            alt="Background"
            w="full"
            h="full"
            objectFit="cover"
            filter="brightness(0.4)"
        />

        <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="blackAlpha.600">
            <Container maxW="7xl" h="full" py="8">
                <VStack h="full" justify="center" align="start" color="white" maxW="4xl">
                    <Heading size="2xl">{programa.titulo}</Heading>
                    <Text fontSize="lg" mt="2">{programa.instituicao.nome}</Text>
                </VStack>
            </Container>
        </Box>
    </Box>
);

const ProgramaDetalhePage: FC = () => {
    const params = useParams();
    const programaId = params?.id as string;
    const { programa, loading } = usePrograma(programaId);

    if (loading) {
        return (
            <Box bg="gray.50" minH="100vh">
                <Header />
                <Container maxW="7xl" py="8">
                    <Text>Carregando...</Text>
                </Container>
            </Box>
        );
    }

    if (!programa) {
        return (
            <Box bg="gray.50" minH="100vh">
                <Header />
                <Container maxW="7xl" py="8">
                    <Text>Programa não encontrado</Text>
                </Container>
            </Box>
        );
    }

    return (
        <Box bg="gray.50" minH="100vh">
            <Header />
            <HeroSection programa={programa} />

            <Box 
                w="1728px" 
                h="1256px" 
                mx="auto"
                pt="10px" 
                pr="109px" 
                pb="10px" 
                pl="109px"
            >
                <HStack align="start" gap="159px">
        {/* Área da esquerda - TEXTO DIRETO */}
        <VStack align="stretch" gap="6" flex="1" maxW="2xl">
            {/* Descrição do evento - SEM CARD */}
            <VStack align="start" gap="4">
                <Heading size="2xl" color="gray.900" fontSize="2xl">Descrição do evento</Heading>
                <Heading size="lg" fontWeight="bold" color="gray.900" fontSize="xl">
                    Marketing Digital – Do conteúdo às vendas com Paula Tebett
                </Heading>
                <Text color="gray.700" lineHeight="1.6" fontSize="md">
                    A Associação Comercial e Industrial de Campo Grande recebe dia 09/10/2025 às 19h,
                    Paula Tebett – jornalista de formação e com MBA em Marketing pela FGV. Paula construiu
                    uma trajetória que vai muito além da redação. Hoje, é palestrante, professora de MBA,
                    treinadora de equipes, criadora de conteúdo e mestre de cerimônias. Sua atuação é
                    marcada por uma combinação única de conhecimento técnico, visão de mercado e um
                    bom humor que contagia.
                </Text>
                <Text color="gray.700" lineHeight="1.6" fontSize="md">
                    Nesta dia vamos aprender como conteúdos autênticos colaboram para uma rede social
                    utilizando linguagem simples e leve. Paula irá ensinar como tornar sua marca competitiva.
                </Text>
                <VStack align="start" gap="1" pt="2">
                    <Text fontWeight="bold" color="gray.900" fontSize="md">Dia 09/10/2025 às 19h</Text>
                    <Text color="gray.600" fontSize="md">Local: ACICG</Text>
                    <Text color="gray.600" fontSize="md">Realização: ACICG / SEBRAE / ESCOLA DE NEGÓCIOS</Text>
                </VStack>
            </VStack>

            {/* Política do Evento - SEM CARD */}
            <VStack align="start" gap="4">
                <Heading size="xl" color="gray.900" fontSize="2xl">Política do Evento</Heading>
                <Box>
                    <Text fontWeight="bold" mb="2" color="gray.900" fontSize="md">Cancelamento de pedidos pagos</Text>
                    <Text fontSize="md" color="gray.700" lineHeight="1.6" mb="2">
                        Cancelamentos de pedidos serão aceitos até 7 dias após a compra, desde que a
                        solicitação seja enviada até 48 horas antes do início do evento.
                    </Text>
                    <Text fontSize="md" color="blue.500" cursor="pointer" textDecoration="underline">
                        Saiba mais sobre o cancelamento
                    </Text>
                </Box>
                <Box>
                    <Text fontWeight="bold" mb="2" color="gray.900" fontSize="md">Edição de participantes</Text>
                    <Text fontSize="md" color="gray.700" lineHeight="1.6" mb="2">
                        Você poderá editar o participante de um ingresso apenas uma vez. Essa opção ficará
                        disponível até 24 horas antes do início do evento.
                    </Text>
                    <Text fontSize="md" color="blue.500" cursor="pointer" textDecoration="underline">
                        Saiba como editar participantes
                    </Text>
                </Box>
            </VStack>

            {/* Botão */}
            <Button
                size="lg"
                w="full"
                bg="rgba(226, 242, 254, 1)"
                color="blue.600"
                border="1px"
                borderColor="blue.600"
                _hover={{ bg: 'blue.100' }}
            >
                <Icon as={FiExternalLink} mr="2" />
                Acessar Website do evento
            </Button>
        </VStack>

        {/* Área da direita - SÓ A IMAGEM */}
        <Box flexShrink="0">
            <Image
                src="/university-image.jpg"
                alt="Campus"
                w="350px"
                h="400px"
                objectFit="cover"
                borderRadius="20px"
            />
            <Text fontSize="md" color="blue.500" textAlign="center" mt="2">
                Oferecido por: Cesar School
            </Text>
        </Box>
                </HStack>
            </Box>
        </Box>
    );
};

export default ProgramaDetalhePage;