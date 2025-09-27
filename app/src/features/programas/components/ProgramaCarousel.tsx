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
        <Box w="100vw" py={8} overflow="hidden">
            <Box position="relative" display="flex" justifyContent="center" w="100%">
                {/* Navigation Buttons */}
                <IconButton
                    ref={prevRef}
                    aria-label="Slide anterior"
                    position="absolute"
                    left="20px"
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
                    right="20px"
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
                <Box width="100%" px={0}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={4}
                        centeredSlides={false}
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
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 24,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24,
                            },
                            1400: {
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
                                        w="362px"
                                        bg="gray.50"
                                        borderRadius="20px"
                                        overflow="hidden"
                                        boxShadow="0 8px 32px rgba(0, 0, 0, 0.12)"
                                        cursor="pointer"
                                        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
                                        position="relative"
                                        flexShrink={0}
                                        _hover={{
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                                        }}
                                    >
                                        {/* Image - Toda a altura do card */}
                                        <Box position="relative" h="100%" w="100%" overflow="hidden">
                                            <Image
                                                src={`https://picsum.photos/362/561?random=${programa.id}`}
                                                alt={programa.titulo}
                                                w="100%"
                                                h="100%"
                                                objectFit="cover"
                                                loading={index < 4 ? 'eager' : 'lazy'}
                                                transition="transform 0.4s ease"
                                                _hover={{ transform: 'scale(1.06)' }}
                                            />

                                            {/* Gradiente overlay na parte inferior - mais suave e profissional */}
                                            <Box
                                                position="absolute"
                                                bottom={0}
                                                left={0}
                                                right={0}
                                                h="70%"
                                                bgGradient="linear(to-t, blackAlpha.900, blackAlpha.600, transparent)"
                                                pointerEvents="none"
                                            />

                                            {/* Content sobreposto na imagem */}
                                            <Box
                                                position="absolute"
                                                bottom={0}
                                                left={0}
                                                right={0}
                                                p={8}
                                                color="white"
                                            >
                                                <VStack align="start" gap={2}>
                                                    <Heading
                                                        size="lg"
                                                        fontWeight="800"
                                                        color="gray.50"
                                                        lineHeight="1.2"
                                                        letterSpacing="-0.02em"
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
                                                        fontSize="md"
                                                        color="whiteAlpha.900"
                                                        fontWeight="400"
                                                        letterSpacing="0.01em"
                                                    >
                                                        Fornecido por {programa.instituicao.nome}
                                                    </Text>

                                                    <Text
                                                        fontSize="sm"
                                                        color="gray.50"
                                                        fontWeight="400"
                                                    >
                                                        Professor: Arthur Campos
                                                    </Text>
                                                </VStack>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>

            {/* Pagination Container - Centralizado perfeitamente */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                mt={14}
                position="relative"
            >
                <Box className="swiper-pagination-custom" />
            </Box>

            {/* Custom Pagination Styles */}
            <style jsx global>{`
                .swiper-pagination-custom {
                    position: relative !important;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                    width: auto !important;
                    text-align: center !important;
                    margin: 0 auto !important;
                    left: 5% !important;
                    transform: translateX(-50%) !important;
                }
                
                .swiper-pagination-bullet {
                    width: 14px !important;
                    height: 14px !important;
                    background: #CBD5E0 !important;
                    opacity: 1 !important;
                    margin: 0 4px !important;
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
        </Box>
    );
};
