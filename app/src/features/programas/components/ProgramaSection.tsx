'use client';
import { FC, useState, useRef, useEffect } from 'react';
import {
    Box,
    Container,
    Heading,
    Flex,
    Image,
    Text,
    HStack,
    VStack,
    Button,
    IconButton,
} from '@chakra-ui/react';
import { FiArrowRight, FiChevronRight, FiChevronLeft } from 'react-icons/fi';
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
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    const scrollToDirection = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 300; // largura aproximada de um card + gap

            scrollContainerRef.current.scrollBy({
                left: direction === 'right' ? scrollAmount : -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => updateScrollButtons();
        const handleResize = () => updateScrollButtons();

        if (scrollContainerRef.current) {
            scrollContainerRef.current.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', handleResize);
            updateScrollButtons();
        }

        return () => {
            if (scrollContainerRef.current) {
                scrollContainerRef.current.removeEventListener('scroll', handleScroll);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [programas.length]);

    return (
        <Box maxW="9xl" py={8} px={{ base: 4, md: 40 }}>
            {/* Header Section */}
            <HStack justify="space-between" align="center" mb={8}>
                <Heading
                    size="lg"
                    color="gray.900"
                    fontWeight="600"
                    fontSize={{ base: "xl", md: "2xl" }}
                >
                    {title}
                </Heading>

                {showViewAll && (
                    <Link href={viewAllHref}>
                        <Button
                            variant="ghost"
                            color="blue.500"
                            fontSize="sm"
                            fontWeight="500"
                            p={0}
                            _hover={{ color: 'blue.600' }}
                            transition="color 0.2s"
                        >
                            Ver tudo
                        </Button>
                    </Link>
                )}
            </HStack>

            {/* Container com Cards sem Bordas */}
            <Box position="relative">
                <Flex
                    ref={scrollContainerRef}
                    overflowX="auto"
                    overflowY="hidden"
                    gap={6}
                    pb={4}
                    css={{
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        scrollSnapType: 'x mandatory',
                        scrollBehavior: 'smooth',
                    }}
                >
                    {programas.map((programa, index) => (
                        <Link key={programa.id} href={`/programas/${programa.id}`}>
                            <Box
                                minW="280px"
                                w="280px"
                                cursor="pointer"
                                transition="all 0.3s ease"
                                scrollSnapAlign="start"
                                flexShrink={0}
                                _hover={{
                                    transform: 'translateY(-4px)',
                                }}
                            >
                                {/* Imagem com bordas arredondadas */}
                                <Box
                                    position="relative"
                                    overflow="hidden"
                                    h="200px"
                                    borderRadius="16px"
                                    mb={4}
                                    shadow="md"
                                    transition="all 0.3s ease"
                                    _hover={{
                                        shadow: 'lg',
                                    }}
                                >
                                    <Image
                                        src={`https://picsum.photos/280/200?random=${programa.id}`}
                                        alt={programa.titulo}
                                        w="100%"
                                        h="100%"
                                        objectFit="cover"
                                        loading={index < 4 ? "eager" : "lazy"}
                                        onError={(e) => {
                                            e.currentTarget.src = `https://via.placeholder.com/280x200/E2E8F0/718096?text=${encodeURIComponent(programa.area)}`;
                                        }}
                                    />
                                </Box>

                                {/* Conteúdo do Card - Apenas Texto */}
                                <Box>
                                    <VStack align="start" gap={2}>
                                        {/* Categoria em maiúsculo */}
                                        <Text
                                            fontSize="xs"
                                            color="gray.500"
                                            textTransform="uppercase"
                                            fontWeight="600"
                                            letterSpacing="wide"
                                        >
                                            CURSO DE {programa.area.toUpperCase()}
                                        </Text>

                                        {/* Título do Programa */}
                                        <Heading
                                            fontSize="lg"
                                            color="gray.900"
                                            fontWeight="600"
                                            lineHeight="1.3"
                                            lineClamp={2}
                                        >
                                            {programa.titulo}
                                        </Heading>

                                        {/* Instituição */}
                                        <Text
                                            fontSize="sm"
                                            color="gray.500"
                                            fontWeight="400"
                                        >
                                            {programa.instituicao.nome}
                                        </Text>
                                    </VStack>
                                </Box>
                            </Box>
                        </Link>
                    ))}
                </Flex>

                {/* Botões de navegação */}
                {showScrollButton && programas.length > 4 && (
                    <>
                        {/* Botão Esquerdo */}
                        <IconButton
                            position="absolute"
                            left="-20px"
                            top="30%"
                            transform="translateY(-50%)"
                            aria-label="Ver programas anteriores"
                            variant="solid"
                            bg="white"
                            color="gray.600"
                            size="lg"
                            borderRadius="md"
                            shadow="lg"
                            border="1px solid"
                            borderColor="gray.200"
                            onClick={() => scrollToDirection('left')}
                            opacity={canScrollLeft ? 1 : 0.4}
                            cursor={canScrollLeft ? 'pointer' : 'not-allowed'}
                            _hover={{
                                bg: canScrollLeft ? 'gray.50' : 'white',
                                color: canScrollLeft ? 'gray.800' : 'gray.600',
                                shadow: canScrollLeft ? 'xl' : 'lg',
                                transform: canScrollLeft ? 'translateY(-50%) scale(1.05)' : 'translateY(-50%)',
                            }}
                            transition="all 0.2s"
                            zIndex={2}
                            disabled={!canScrollLeft}
                        >
                            <FiChevronLeft size={20} />
                        </IconButton>

                        {/* Botão Direito */}
                        <IconButton
                            position="absolute"
                            right="-20px"
                            top="30%"
                            transform="translateY(-50%)"
                            aria-label="Ver próximos programas"
                            variant="solid"
                            bg="white"
                            color="gray.600"
                            size="lg"
                            borderRadius="md"
                            shadow="lg"
                            border="1px solid"
                            borderColor="gray.200"
                            onClick={() => scrollToDirection('right')}
                            opacity={canScrollRight ? 1 : 0.4}
                            cursor={canScrollRight ? 'pointer' : 'not-allowed'}
                            _hover={{
                                bg: canScrollRight ? 'gray.50' : 'white',
                                color: canScrollRight ? 'gray.800' : 'gray.600',
                                shadow: canScrollRight ? 'xl' : 'lg',
                                transform: canScrollRight ? 'translateY(-50%) scale(1.05)' : 'translateY(-50%)',
                            }}
                            transition="all 0.2s"
                            zIndex={2}
                            disabled={!canScrollRight}
                        >
                            <FiChevronRight size={20} />
                        </IconButton>
                    </>
                )}
            </Box>
        </Box>
    );
};