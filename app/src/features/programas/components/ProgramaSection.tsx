'use client';
import { FC, useState, useRef } from 'react';
import {
    Box,
    Container,
    Heading,
    Grid,
    Image,
    Text,
    HStack,
    VStack,
    Button,
    IconButton,
    Badge
} from '@chakra-ui/react';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import type { Programa } from '../../../types/domain';
import Link from 'next/link';

interface ProgramaSectionProps {
    title: string;
    programas: Programa[];
    showViewAll?: boolean;
    viewAllHref?: string;
    showScrollButton?: boolean;
}

export const ProgramaSection: FC<ProgramaSectionProps> = ({
    title,
    programas,
    showViewAll = true,
    viewAllHref = "/programas",
    showScrollButton = true
}) => {
    const [showAll, setShowAll] = useState(false);
    const gridRef = useRef<HTMLDivElement>(null);

    // Simplified approach to avoid SSR issues
    const displayPrograms = showAll ? programas : programas.slice(0, 4);

    const scrollToNext = () => {
        if (gridRef.current) {
            const cardWidth = gridRef.current.scrollWidth / programas.length;
            gridRef.current.scrollBy({
                left: cardWidth * 4,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Container maxW="8xl" py={12}>
            {/* Header Section */}
            <HStack justify="space-between" align="flex-end" mb={8}>
                <VStack align="start" gap={2}>
                    <Heading
                        size="xl"
                        color="gray.800"
                        fontWeight="700"
                        lineHeight="shorter"
                    >
                        {title}
                    </Heading>
                    <Text color="gray.600" fontSize="md">
                        {programas.length} programas disponíveis
                    </Text>
                </VStack>

                {showViewAll && (
                    <Link href={viewAllHref}>
                        <Button
                            variant="ghost"
                            color="blue.500"
                            fontSize="sm"
                            fontWeight="600"
                            _hover={{ bg: 'blue.50', color: 'blue.600' }}
                            transition="all 0.2s"
                        >
                            Ver tudo
                            <FiArrowRight style={{ marginLeft: '8px' }} />
                        </Button>
                    </Link>
                )}
            </HStack>

            {/* Grid Container com Scroll Horizontal */}
            <Box position="relative">
                <Box
                    ref={gridRef}
                    overflowX="auto"
                    pb={4}
                    css={{
                        scrollbarWidth: 'thin',
                        scrollbarColor: '#CBD5E0 transparent',
                        '&::-webkit-scrollbar': {
                            height: '6px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#F7FAFC',
                            borderRadius: '3px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#CBD5E0',
                            borderRadius: '3px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: '#A0AEC0',
                        },
                    }}
                >
                    <Grid
                        templateColumns={{
                            base: `repeat(${programas.length}, 280px)`,
                            lg: "repeat(4, 1fr)"
                        }}
                        gap={6}
                        minW={{ base: 'max-content', lg: 'unset' }}
                    >
                        {displayPrograms.map((programa, index) => (
                            <Link key={programa.id} href={`/programas/${programa.id}`}>
                                <Box
                                    w={{ base: "280px", lg: "100%" }}
                                    cursor="pointer"
                                    borderRadius="16px"
                                    overflow="hidden"
                                    bg="white"
                                    shadow="md"
                                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                    _hover={{
                                        shadow: 'xl',
                                        transform: 'translateY(-8px) scale(1.02)',
                                        '& .card-image': {
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                    role="group"
                                >
                                    {/* Container da Imagem */}
                                    <Box position="relative" overflow="hidden" h="180px">
                                        <Image
                                            className="card-image"
                                            src={`https://picsum.photos/280/180?random=${programa.id}`}
                                            alt={programa.titulo}
                                            w="100%"
                                            h="100%"
                                            objectFit="cover"
                                            loading={index < 4 ? "eager" : "lazy"}
                                            transition="transform 0.4s ease"
                                            onError={(e) => {
                                                e.currentTarget.src = `https://via.placeholder.com/280x180/4299E1/FFFFFF?text=${encodeURIComponent(programa.area)}`;
                                            }}
                                        />

                                        {/* Overlay sutil */}
                                        <Box
                                            position="absolute"
                                            inset={0}
                                            bg="blackAlpha.100"
                                            opacity={0}
                                            transition="opacity 0.3s ease"
                                            _groupHover={{ opacity: 1 }}
                                        />

                                        {/* Badge de modalidade */}
                                        <Badge
                                            position="absolute"
                                            top={3}
                                            right={3}
                                            colorScheme={
                                                programa.modalidade === 'online' ? 'green' :
                                                    programa.modalidade === 'presencial' ? 'blue' : 'purple'
                                            }
                                            variant="solid"
                                            fontSize="xs"
                                            px={2}
                                            py={1}
                                            borderRadius="md"
                                            textTransform="capitalize"
                                        >
                                            {programa.modalidade}
                                        </Badge>
                                    </Box>

                                    {/* Conteúdo do Card */}
                                    <Box p={5}>
                                        <VStack align="start" gap={3}>
                                            {/* Categoria */}
                                            <Text
                                                fontSize="xs"
                                                color="blue.600"
                                                textTransform="uppercase"
                                                fontWeight="700"
                                                letterSpacing="wider"
                                                lineHeight="1"
                                            >
                                                CURSO DE {programa.area.toUpperCase()}
                                            </Text>

                                            {/* Título */}
                                            <Heading
                                                size="sm"
                                                color="gray.800"
                                                fontWeight="600"
                                                lineHeight="shorter"
                                                minH="2.5rem"
                                                style={{
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                {programa.titulo}
                                            </Heading>

                                            {/* Meta informações */}
                                            <VStack align="start" gap={1} w="100%">
                                                <Text
                                                    fontSize="sm"
                                                    color="gray.600"
                                                    fontWeight="500"
                                                >
                                                    {programa.instituicao.nome}
                                                </Text>

                                                <HStack
                                                    fontSize="xs"
                                                    color="gray.500"
                                                >
                                                    <Text>{programa.cronograma?.duracao || '4 meses'}</Text>
                                                    <Text>•</Text>
                                                    <Text>
                                                        {programa.investimento === 0
                                                            ? 'Gratuito'
                                                            : `R$ ${programa.investimento?.toLocaleString('pt-BR') || '---'}`}
                                                    </Text>
                                                </HStack>
                                            </VStack>
                                        </VStack>
                                    </Box>
                                </Box>
                            </Link>
                        ))}
                    </Grid>
                </Box>

                {/* Botão de scroll lateral (apenas mobile) */}
                {showScrollButton && programas.length > 4 && (
                    <IconButton
                        position="absolute"
                        right={-4}
                        top="50%"
                        transform="translateY(-50%)"
                        aria-label="Ver próximos programas"
                        variant="solid"
                        bg="white"
                        color="gray.600"
                        size="lg"
                        borderRadius="full"
                        shadow="lg"
                        display={{ base: 'flex', lg: 'none' }}
                        onClick={scrollToNext}
                        _hover={{ bg: 'gray.50', transform: 'translateY(-50%) scale(1.1)' }}
                        transition="all 0.2s"
                    >
                        <FiChevronRight size={20} />
                    </IconButton>
                )}
            </Box>

            {/* Botão "Ver mais" para mobile */}
            {!showAll && programas.length > 4 && (
                <Box textAlign="center" mt={8} display={{ base: 'block', lg: 'none' }}>
                    <Button
                        variant="outline"
                        colorScheme="blue"
                        onClick={() => setShowAll(true)}
                    >
                        Ver mais {programas.length - 4} programas
                        <FiArrowRight style={{ marginLeft: '8px' }} />
                    </Button>
                </Box>
            )}
        </Container>
    );
};
