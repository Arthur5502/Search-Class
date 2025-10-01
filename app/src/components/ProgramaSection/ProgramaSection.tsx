'use client'

import { useState, useRef } from 'react'
import {
    Box,
    Heading,
    Image,
    Text,
    HStack,
    VStack,
    Button,
    IconButton,
    Grid,
    Skeleton
} from '@chakra-ui/react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Link from 'next/link'
import type { ProgramaSectionProps } from './ProgramaSection.types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export const ProgramaSection = ({
    title,
    programas,
    showViewAll = true,
    viewAllHref = "/programas",
    showScrollButton = true,
    isLoading = false,
    className,
    layout = 'carousel',
    cardVariant = 'standard',
    columns = { base: 1, sm: 2, md: 3, lg: 4 }
}: ProgramaSectionProps) => {

    const swiperRef = useRef<SwiperType | null>(null)
    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)

    const handleSwiperInit = (swiper: SwiperType) => {
        swiperRef.current = swiper
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    const handleSlideChange = (swiper: SwiperType) => {
        setIsBeginning(swiper.isBeginning)
        setIsEnd(swiper.isEnd)
    }

    const slidePrev = () => {
        swiperRef.current?.slidePrev()
    }

    const slideNext = () => {
        swiperRef.current?.slideNext()
    }

    if (isLoading) {
        return (
            <Box w="100%" py={6} px="20px" className={className}>
                <HStack justify="space-between" align="center" mb={8}>
                    <Skeleton height="32px" width="300px" />
                    <Skeleton height="24px" width="80px" />
                </HStack>

                {layout === 'grid' ? (
                    <Grid
                        templateColumns={{
                            base: `repeat(${columns.base}, 1fr)`,
                            sm: `repeat(${columns.sm || 2}, 1fr)`,
                            md: `repeat(${columns.md || 3}, 1fr)`,
                            lg: `repeat(${columns.lg || 4}, 1fr)`,
                            xl: `repeat(${columns.xl || 4}, 1fr)`
                        }}
                        gap={6}
                    >
                        {Array.from({ length: 8 }).map((_, i) => (
                            <Box key={i}>
                                <Skeleton height="140px" borderRadius="16px" mb={4} />
                                <Skeleton height="16px" borderRadius="md" mb={2} />
                                <Skeleton height="20px" borderRadius="md" mb={2} />
                                <Skeleton height="16px" borderRadius="md" w="60%" />
                            </Box>
                        ))}
                    </Grid>
                ) : (
                    <HStack gap={6} overflowX="hidden">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <Box key={i} minW="280px">
                                <Skeleton height="200px" borderRadius="16px" mb={4} />
                                <Skeleton height="16px" borderRadius="md" mb={2} />
                                <Skeleton height="20px" borderRadius="md" mb={2} />
                                <Skeleton height="16px" borderRadius="md" w="60%" />
                            </Box>
                        ))}
                    </HStack>
                )}
            </Box>
        )
    }

    if (programas.length === 0) {
        return null
    }

    return (
        <Box w="100%" py={6} px="20px" className={className}>
            <Box>
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
            </Box>

            {layout === 'grid' ? (
                <Grid
                    templateColumns={{
                        base: `repeat(${columns.base}, 1fr)`,
                        sm: `repeat(${columns.sm || 2}, 1fr)`,
                        md: `repeat(${columns.md || 3}, 1fr)`,
                        lg: `repeat(${columns.lg || 4}, 1fr)`,
                        xl: `repeat(${columns.xl || 4}, 1fr)`
                    }}
                    gap={{ base: 4, md: 6 }}
                    w="100%"
                >
                    {programas.map((programa, index) => (
                        <Link key={programa.id} href={`/programas/${programa.id}`}>
                            <Box
                                cursor="pointer"
                                transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                position="relative"
                                zIndex={1}
                                _hover={{
                                    transform: 'translateY(-8px)',
                                    zIndex: 999,
                                }}
                            >
                                <Box
                                    borderRadius="15.39px"
                                    overflow="hidden"
                                    shadow={cardVariant === 'featured' && index === 2 ? 'lg' : 'md'}
                                    bg="white"
                                    border={cardVariant === 'featured' && index === 2 ? '2px solid' : 'none'}
                                    borderColor={cardVariant === 'featured' && index === 2 ? 'blue.200' : 'transparent'}
                                    transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                    _hover={{
                                        shadow: 'xl',
                                        borderColor: cardVariant === 'featured' && index === 2 ? 'blue.300' : 'gray.200'
                                    }}
                                >
                                    <Box
                                        position="relative"
                                        overflow="hidden"
                                        h={cardVariant === 'compact' ? '162px' : cardVariant === 'featured' && index === 2 ? '316px' : '226px'}
                                        bg="gray.100"
                                    >
                                        <Image
                                            src={programa.imagem || `https://picsum.photos/400/300?random=${programa.id}`}
                                            alt={programa.titulo}
                                            w="100%"
                                            h="100%"
                                            objectFit="cover"
                                            loading={index < 4 ? "eager" : "lazy"}
                                            transition="transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                            _hover={{
                                                transform: 'scale(1.08)',
                                            }}
                                            onError={(e) => {
                                                e.currentTarget.src = `https://via.placeholder.com/400x300/E2E8F0/718096?text=${encodeURIComponent(programa.area)}`
                                            }}
                                        />

                                        {cardVariant === 'featured' && index === 2 && (
                                            <Box
                                                position="absolute"
                                                top="12px"
                                                right="12px"
                                                bg="blue.500"
                                                color="white"
                                                px="8px"
                                                py="4px"
                                                borderRadius="full"
                                                fontSize="xs"
                                                fontWeight="bold"
                                            >
                                                DESTAQUE
                                            </Box>
                                        )}
                                    </Box>
                                </Box>

                                <VStack align="start" gap="8px" mt={4} px={1}>
                                    {cardVariant !== 'compact' && (
                                        <Text
                                            fontSize="xs"
                                            color="gray.500"
                                            textTransform="uppercase"
                                            fontWeight="600"
                                            letterSpacing="0.5px"
                                        >
                                            CURSO DE {programa.area.toUpperCase()}
                                        </Text>
                                    )}

                                    <Text
                                        fontSize={cardVariant === 'compact' ? 'md' : 'lg'}
                                        color="gray.900"
                                        fontWeight="600"
                                        lineHeight="1.3"
                                        lineClamp={2}
                                    >
                                        {programa.titulo}
                                    </Text>

                                    {cardVariant === 'compact' && (
                                        <Text
                                            fontSize="sm"
                                            color="gray.400"
                                            fontWeight="400"
                                            lineClamp={1}
                                        >
                                            {programa.cidade} - {programa.estado}
                                        </Text>
                                    )}

                                    <Text
                                        fontSize="sm"
                                        color="gray.500"
                                        fontWeight="400"
                                        lineClamp={1}
                                    >
                                        {programa.instituicao.nome}
                                    </Text>
                                </VStack>
                            </Box>
                        </Link>
                    ))}
                </Grid>
            ) : (
                <Box
                    position="relative"
                    w="100%"
                    pt={8}
                    pb={24}
                    overflow="visible"
                    className="programa-section-overflow"
                >
                    <Box position="relative">
                        <Swiper
                            modules={[Navigation, FreeMode, Mousewheel]}
                            onSwiper={handleSwiperInit}
                            onSlideChange={handleSlideChange}
                            spaceBetween={24}
                            slidesPerView="auto"
                            grabCursor={true}
                            watchOverflow={true}
                            freeMode={{
                                enabled: true,
                                sticky: false,
                                momentumBounce: false,
                                momentumRatio: 0.6,
                            }}
                            mousewheel={{
                                forceToAxis: true,
                                sensitivity: 1,
                                releaseOnEdges: true,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 16,
                                },
                                480: {
                                    slidesPerView: 1.8,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 24,
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 24,
                                },
                                1536: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 24,
                                },
                            }}
                        >
                            {programas.map((programa, index) => (
                                <SwiperSlide
                                    key={programa.id}
                                    style={{
                                        width: '280px',
                                        height: 'auto',
                                    }}
                                >
                                    <Link href={`/programas/${programa.id}`}>
                                        <Box
                                            cursor="pointer"
                                            transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                            position="relative"
                                            zIndex={1}
                                            _hover={{
                                                transform: 'translateY(-16px)',
                                                zIndex: 999,
                                            }}
                                        >
                                            <Box
                                                borderRadius="16px"
                                                overflow="hidden"
                                                shadow="md"
                                                bg="white"
                                                transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                                mb={4}
                                                _hover={{
                                                    shadow: '2xl',
                                                }}
                                            >
                                                <Box
                                                    position="relative"
                                                    overflow="hidden"
                                                    h="200px"
                                                    bg="gray.100"
                                                >
                                                    <Image
                                                        src={programa.imagem || `https://picsum.photos/280/200?random=${programa.id}`}
                                                        alt={programa.titulo}
                                                        w="100%"
                                                        h="100%"
                                                        objectFit="cover"
                                                        loading={index < 4 ? "eager" : "lazy"}
                                                        transition="transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                                        _hover={{
                                                            transform: 'scale(1.08)',
                                                        }}
                                                        onError={(e) => {
                                                            e.currentTarget.src = `https://via.placeholder.com/280x200/E2E8F0/718096?text=${encodeURIComponent(programa.area)}`
                                                        }}
                                                    />
                                                </Box>
                                            </Box>

                                            <VStack align="start" gap="12px" px={1}>
                                                <Text
                                                    fontSize="xs"
                                                    color="gray.500"
                                                    textTransform="uppercase"
                                                    fontWeight="600"
                                                    letterSpacing="0.5px"
                                                >
                                                    CURSO DE {programa.area.toUpperCase()}
                                                </Text>

                                                <Text
                                                    fontSize="lg"
                                                    color="gray.900"
                                                    fontWeight="600"
                                                    lineHeight="1.3"
                                                    lineClamp={2}
                                                >
                                                    {programa.titulo}
                                                </Text>

                                                <Text
                                                    fontSize="sm"
                                                    color="gray.500"
                                                    fontWeight="400"
                                                    lineClamp={1}
                                                >
                                                    {programa.instituicao.nome}
                                                </Text>
                                            </VStack>
                                        </Box>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {showScrollButton && programas.length > 3 && (
                            <>
                                <IconButton
                                    position="absolute"
                                    left="-70px"
                                    top="40%"
                                    transform="translateY(-50%)"
                                    aria-label="Slide anterior"
                                    variant="solid"
                                    bg="white"
                                    color="gray.600"
                                    size="lg"
                                    borderRadius="full"
                                    shadow="lg"
                                    border="1px solid"
                                    borderColor="gray.200"
                                    onClick={slidePrev}
                                    opacity={isBeginning ? 0.4 : 1}
                                    cursor={isBeginning ? 'not-allowed' : 'pointer'}
                                    _hover={{
                                        bg: !isBeginning ? 'gray.50' : 'white',
                                        color: !isBeginning ? 'gray.800' : 'gray.600',
                                        shadow: !isBeginning ? 'xl' : 'lg',
                                        transform: !isBeginning
                                            ? 'translateY(-50%) scale(1.1)'
                                            : 'translateY(-50%)',
                                    }}
                                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                    zIndex={1000}
                                    disabled={isBeginning}
                                    w="56px"
                                    h="56px"
                                >
                                    <FiChevronLeft size={24} />
                                </IconButton>

                                <IconButton
                                    position="absolute"
                                    right="-70px"
                                    top="40%"
                                    transform="translateY(-50%)"
                                    aria-label="Próximo slide"
                                    variant="solid"
                                    bg="white"
                                    color="gray.600"
                                    size="lg"
                                    borderRadius="full"
                                    shadow="lg"
                                    border="1px solid"
                                    borderColor="gray.200"
                                    onClick={slideNext}
                                    opacity={isEnd ? 0.4 : 1}
                                    cursor={isEnd ? 'not-allowed' : 'pointer'}
                                    _hover={{
                                        bg: !isEnd ? 'gray.50' : 'white',
                                        color: !isEnd ? 'gray.800' : 'gray.600',
                                        shadow: !isEnd ? 'xl' : 'lg',
                                        transform: !isEnd
                                            ? 'translateY(-50%) scale(1.1)'
                                            : 'translateY(-50%)',
                                    }}
                                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                    zIndex={1000}
                                    disabled={isEnd}
                                    w="56px"
                                    h="56px"
                                >
                                    <FiChevronRight size={24} />
                                </IconButton>
                            </>
                        )}
                    </Box>
                </Box>
            )}

            <style jsx global>{`
                .programa-section-overflow .swiper {
                    overflow: visible !important;
                    position: static !important;
                }
                
                .programa-section-overflow .swiper-wrapper {
                    overflow: visible !important;
                }
                
                .programa-section-overflow .swiper-slide {
                    opacity: 1 !important;
                    visibility: visible !important;
                    pointer-events: auto !important;
                    transition: all 0.4s ease !important;
                }
            `}</style>
        </Box>
    )
}
