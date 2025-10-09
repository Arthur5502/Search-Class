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
import { FavoriteButton } from '../../../components/ui/FavoriteButton';

interface ProgramaSectionProps {
    title?: string;
    programas: Programa[];
    showViewAll?: boolean;
    viewAllHref?: string;
    showScrollButton?: boolean;
    layout?: 'scroll' | 'grid';
    showHeader?: boolean;
}

export const ProgramaSection: FC<ProgramaSectionProps> = ({
    title,
    programas,
    showViewAll = true,
    viewAllHref = "/programas",
    showScrollButton = true,
    layout = 'scroll',
    showHeader = true
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
            const scrollAmount = 300;

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
        <Box maxW="9xl" py={8} px={{ base: 4, md: layout === 'grid' ? 0 : 40 }}>
            {showHeader && title && (
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
            )}

            <Box position="relative">
                {layout === 'grid' ? (
                    <Box
                        display="grid"
                        gridTemplateColumns="repeat(4, 1fr)"
                        gap={5}
                        w="100%"
                    >
                        {programas.map((programa, index) => (
                            <Box
                                key={programa.id}
                                position="relative"
                            >
                                <Box
                                    position="absolute"
                                    top="8px"
                                    right="8px"
                                    zIndex={10}
                                >
                                    <FavoriteButton programaId={programa.id} />
                                </Box>

                                <Link href={`/programas/${programa.id}`}>
                                    <Box
                                        cursor="pointer"
                                        transition="all 0.3s ease"
                                        _hover={{
                                            transform: 'translateY(-2px)',
                                        }}
                                    >
                                        <Box
                                            position="relative"
                                            overflow="hidden"
                                            h="170px"
                                            borderRadius="12px"
                                            mb={2}
                                            shadow="sm"
                                            transition="all 0.3s ease"
                                            _hover={{
                                                shadow: 'md',
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

                                        <Text
                                            fontSize="xs"
                                            color="gray.600"
                                            textTransform="uppercase"
                                            fontWeight="600"
                                            letterSpacing="wide"
                                            lineHeight="1.4"
                                        >
                                            CURSO DE {programa.area.toUpperCase()}
                                        </Text>
                                    </Box>
                                </Link>
                            </Box>
                        ))}
                    </Box>
                ) : (
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
                        <Box
                            key={programa.id}
                            minW="280px"
                            w="280px"
                            scrollSnapAlign="start"
                            flexShrink={0}
                            position="relative"
                        >
                            <Box
                                position="absolute"
                                top="8px"
                                right="8px"
                                zIndex={10}
                            >
                                <FavoriteButton programaId={programa.id} />
                            </Box>

                                <Link href={`/programas/${programa.id}`}>
                                    <Box
                                        cursor="pointer"
                                        transition="all 0.3s ease"
                                        _hover={{
                                            transform: 'translateY(-4px)',
                                        }}
                                    >
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

                                        <Box>
                                            <VStack align="start" gap={2}>
                                                <Text
                                                    fontSize="xs"
                                                    color="gray.500"
                                                    textTransform="uppercase"
                                                    fontWeight="600"
                                                    letterSpacing="wide"
                                                >
                                                    CURSO DE {programa.area.toUpperCase()}
                                                </Text>

                                                <Heading
                                                    fontSize="lg"
                                                    color="gray.900"
                                                    fontWeight="600"
                                                    lineHeight="1.3"
                                                    lineClamp={2}
                                                >
                                                    {programa.titulo}
                                                </Heading>

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
                        </Box>
                    ))}
                </Flex>
                )}

                {layout === 'scroll' && showScrollButton && programas.length > 4 && (
                    <>
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