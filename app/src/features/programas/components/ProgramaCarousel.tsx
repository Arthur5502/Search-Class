// src/features/programas/components/ProgramaCarousel.tsx
'use client';
import { FC, useRef, useState } from 'react';
import {
    Box,
    Image,
    Text,
    Heading,
    Container,
    VStack,
    IconButton,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { Programa } from '../../../types/domain';
import type { Swiper as SwiperType } from 'swiper';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProgramaCarouselProps {
    programas: Programa[];
}

export const ProgramaCarousel: FC<ProgramaCarouselProps> = ({ programas }) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <Container maxW="7xl" py={8}>
            <Box position="relative" display="flex" justifyContent="center">
                {/* Navigation Buttons */}
                <IconButton
                    ref={prevRef}
                    aria-label="Slide anterior"
                    position="absolute"
                    left="-20px"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={10}
                    size="lg"
                    borderRadius="full"
                    bg="white"
                    border="1px"
                    borderColor="gray.200"
                    boxShadow="md"
                    _hover={{ bg: 'gray.50', boxShadow: 'lg' }}
                    _active={{ bg: 'gray.100' }}
                >
                    <FiChevronLeft size={20} />
                </IconButton>

                <IconButton
                    ref={nextRef}
                    aria-label="Próximo slide"
                    position="absolute"
                    right="-20px"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={10}
                    size="lg"
                    borderRadius="full"
                    bg="white"
                    border="1px"
                    borderColor="gray.200"
                    boxShadow="md"
                    _hover={{ bg: 'gray.50', boxShadow: 'lg' }}
                    _active={{ bg: 'gray.100' }}
                >
                    <FiChevronRight size={20} />
                </IconButton>

                {/* Swiper */}
                <Box width="100%" display="flex" justifyContent="right">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            el: '.swiper-pagination-custom',
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={600}
                        loop={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 24,
                            },
                        }}
                        onSwiper={(swiper) => {
                            setSwiperInstance(swiper);
                            // Fix navigation after swiper initialization
                            setTimeout(() => {
                                if (prevRef.current && nextRef.current) {
                                    (swiper.params.navigation as any).prevEl = prevRef.current;
                                    (swiper.params.navigation as any).nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }
                            });
                        }}
                    >
                        {programas.map((programa, index) => (
                            <SwiperSlide key={programa.id}>
                                <Link href={`/programas/${programa.id}`}>
                                    <Box
                                        h="561px"
                                        bg="white"
                                        borderRadius="12px"
                                        overflow="hidden"
                                        boxShadow="sm"
                                        border="1px"
                                        borderColor="gray.200"
                                        cursor="pointer"
                                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                        _hover={{
                                            transform: 'translateY(-4px)',
                                            boxShadow: 'lg',
                                            borderColor: 'blue.200',
                                        }}
                                    >
                                        {/* Image */}
                                        <Box position="relative" h="420px" overflow="hidden">
                                            <Image
                                                src={`https://picsum.photos/400/240?random=${programa.id}`}
                                                alt={programa.titulo}
                                                w="100%"
                                                h="100%"
                                                objectFit="cover"
                                                loading={index < 4 ? 'eager' : 'lazy'}
                                                transition="transform 0.3s ease"
                                                _hover={{ transform: 'scale(1.05)' }}
                                            />
                                        </Box>

                                        {/* Content */}
                                        <Box p={5} h="140px">
                                            <VStack align="start" gap={2} h="100%">
                                                <Heading
                                                    size="sm"
                                                    fontWeight="600"
                                                    color="gray.800"
                                                    lineHeight="short"
                                                    style={{
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden',
                                                    }}
                                                >
                                                    {programa.titulo}
                                                </Heading>

                                                <Text
                                                    fontSize="sm"
                                                    color="gray.600"
                                                    fontWeight="500"
                                                >
                                                    {programa.instituicao.nome}
                                                </Text>

                                                <Text
                                                    fontSize="sm"
                                                    color="gray.500"
                                                    mt="auto"
                                                >
                                                    Professor: Arthur Campos
                                                </Text>
                                            </VStack>
                                        </Box>
                                    </Box>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>

            {/* Pagination Container */}
            <Box
                className="swiper-pagination-custom"
                mt={18}
                display="flex"
                justifyContent="end"
                alignItems="end"
                width="100%"
            />

            {/* Custom Pagination Styles */}
            <style jsx global>{`
                .swiper-pagination-custom {
                    display: flex !important;
                    justify-content: right !important;
                    align-items: right !important;
                    width: 100% !important;
                    text-align: right !important;
                    margin: 0 auto !important;
                }
                
                .swiper-pagination-bullet {
                    width: 14px !important;
                    height: 14px !important;
                    background: #CBD5E0 !important;
                    opacity: 1 !important;
                    margin: 15 4px !important;
                    transition: all 0.3s ease !important;
                    cursor: pointer !important;
                }
                
                .swiper-pagination-bullet-active {
                    background: #3182CE !important;
                    width: 24px !important;
                    border-radius: !important;
                }
                
                .swiper-pagination-bullet-dynamic {
                    transition: all 0.3s ease !important;
                }
            `}</style>
        </Container>
    );
};