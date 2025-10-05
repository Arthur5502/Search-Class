'use client';
import { FC, useRef, useState } from 'react';
import {
    Box,
    Image,
    Text,
    Heading,
    VStack,
    IconButton,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi';
import type { Programa } from '../../../types/domain';
import type { Swiper as SwiperType } from 'swiper';
import Link from 'next/link';
import { useAppStore } from '../../../store/useAppStore';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface ProgramaCarouselProps {
    programas: Programa[];
}

export const ProgramaCarousel: FC<ProgramaCarouselProps> = ({ programas }) => {
    const favoritos = useAppStore((state) => state.favoritos);
    const toggleFavorito = useAppStore((state) => state.toggleFavorito);
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <Box w="100vw" py={20} overflow="hidden" bg="gray.50">
            <Box position="relative" display="flex" justifyContent="center" w="100%" minH="550px" alignItems="center">
                <IconButton
                    ref={prevRef}
                    aria-label="Slide anterior"
                    position="absolute"
                    left="130px"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={20}
                    size="xl"
                    borderRadius="md"
                    bg="#FFFFFF"
                    color="#666B74"
                    border="none"
                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)"
                    _hover={{
                        bg: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        transform: 'translateY(-50%) scale(1.1)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                    _active={{
                        transform: 'translateY(-50%) scale(0.95)',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                    }}
                    transition="all 0.3s ease"
                >
                    <FiChevronLeft size={24} />
                </IconButton>

                <IconButton
                    ref={nextRef}
                    aria-label="Próximo slide"
                    position="absolute"
                    right="130px"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={20}
                    size="xl"
                    borderRadius="md"
                    bg="#FFFFFF"
                    color="#666B74"
                    border="none"
                    boxShadow="0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)"
                    _hover={{
                        bg: 'rgba(0, 0, 0, 0.8)',
                        color: 'white',
                        transform: 'translateY(-50%) scale(1.1)',
                        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                    _active={{
                        transform: 'translateY(-50%) scale(0.95)',
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                    }}
                    transition="all 0.3s ease"
                >
                    <FiChevronRight size={24}/>
                </IconButton>

                <Box width="100%" maxW="1200px" px={0}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: 20,
                            stretch: -60,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        centeredSlides={true}
                        slidesPerView="auto"
                        spaceBetween={0}
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
                        onSwiper={(swiper) => {
                            setSwiperInstance(swiper);
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
                        {programas.map((programa, index) => {
                            const isFavorito = favoritos.includes(String(programa.id));
                            
                            return (
                                <SwiperSlide key={programa.id} style={{ width: '350px' }}>
                                    <Box position="relative">
                                        <Box
                                            position="absolute"
                                            top="16px"
                                            right="16px"
                                            zIndex={999}
                                        >
                                            <IconButton
                                                aria-label={isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                                                size="md"
                                                borderRadius="full"
                                                bg={isFavorito ? 'red.500' : 'white'}
                                                color={isFavorito ? 'white' : 'gray.700'}
                                                boxShadow="lg"
                                                _hover={{
                                                    bg: isFavorito ? 'red.600' : 'gray.100',
                                                    transform: 'scale(1.1)',
                                                }}
                                                onClick={() => toggleFavorito(String(programa.id))}
                                            >
                                                <FiHeart
                                                    size={20}
                                                    fill={isFavorito ? 'white' : 'none'}
                                                />
                                            </IconButton>
                                        </Box>

                                        <Link href={`/programas/${programa.id}`}>
                                            <Box
                                                h="561px"
                                                w="362px"
                                                mx="auto"
                                                borderRadius="20px"
                                                overflow="hidden"
                                                cursor="pointer"
                                                position="relative"
                                                boxShadow="0 10px 30px rgba(0, 0, 0, 0.2)"
                                                transition="transform 0.4s ease, box-shadow 0.4s ease"
                                                _hover={{
                                                    transform: 'translateY(-10px)',
                                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                                                }}
                                            >
                                        <Box position="relative" h="100%" w="100%" overflow="hidden" borderRadius="20px">
                                            <Image
                                                src={`https://picsum.photos/350/500?random=${programa.id}`}
                                                alt={programa.titulo}
                                                w="100%"
                                                h="100%"
                                                objectFit="cover"
                                                loading={index < 3 ? 'eager' : 'lazy'}
                                            />

                                            <Box
                                                position="absolute"
                                                top={0}
                                                left={0}
                                                right={0}
                                                bottom={0}
                                                background="linear-gradient(180deg,
                                                    rgba(0, 0, 0, 0) 0%,
                                                    rgba(0, 0, 0, 0.1) 40%,
                                                    rgba(0, 0, 0, 0.8) 100%)"
                                            />

                                            <Box
                                                position="absolute"
                                                bottom={0}
                                                left={0}
                                                right={0}
                                                p={6}
                                                color="white"
                                            >
                                                <VStack align="start" gap={3}>
                                                    <Box
                                                        px={3}
                                                        py={1}
                                                        borderRadius="full"
                                                        bg="rgba(0, 255, 136, 0.2)"
                                                        border="1px solid rgba(0, 255, 136, 0.4)"
                                                        fontSize="xs"
                                                        fontWeight="600"
                                                        color="#00ff88"
                                                        textTransform="uppercase"
                                                        letterSpacing="wide"
                                                    >
                                                        Programa
                                                    </Box>

                                                    <Heading
                                                        fontSize="xl"
                                                        fontWeight="bold"
                                                        color="white"
                                                        lineHeight="1.2"
                                                        lineClamp={2}
                                                        as="h3"
                                                    >
                                                        {programa.titulo}
                                                    </Heading>

                                                    <Text
                                                        fontSize="sm"
                                                        color="gray.300"
                                                        fontWeight="medium"
                                                    >
                                                        {programa.instituicao.nome}
                                                    </Text>

                                                    <Box
                                                        px={3}
                                                        py={2}
                                                        borderRadius="full"
                                                        bg="rgba(255, 255, 255, 0.15)"
                                                        fontSize="sm"
                                                        color="white"
                                                        fontWeight="medium"
                                                    >
                                                        Arthur Campos
                                                    </Box>
                                                </VStack>
                                            </Box>
                                            </Box>
                                        </Box>
                                    </Link>
                                </Box>
                            </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Box>
            </Box>

            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                mt={10}
                position="relative"
            >
                <Box className="swiper-pagination-custom" />
            </Box>

            <style jsx global>{`
                @keyframes pulse {
                    0%, 100% {
                        box-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
                        transform: scale(1);
                    }
                    50% {
                        box-shadow: 0 0 25px rgba(59, 130, 246, 0.8), 0 0 35px rgba(59, 130, 246, 0.4);
                        transform: scale(1.05);
                    }
                }
                
                @keyframes float {
                    0%, 100% {
                        transform: translateX(-50%) translateY(0px);
                    }
                    50% {
                        transform: translateX(-50%) translateY(-3px);
                    }
                }
                
                @keyframes shimmer {
                    0% { left: -100%; opacity: 0; }
                    50% { opacity: 1; }
                    100% { left: 100%; opacity: 0; }
                }
                
                /* Paginação flutuante - sem container visível */
                .swiper-pagination-custom {
                    position: absolute !important;
                    bottom: -60px !important;
                    left: 50% !important;
                    transform: translateX(-50%) !important;
                    width: auto !important;
                    display: flex !important;
                    justify-content: center !important;
                    align-items: center !important;
                    padding: 0 !important;
                    background: transparent !important;
                    border: none !important;
                    backdrop-filter: none !important;
                    box-shadow: none !important;
                    z-index: 10 !important;
                    animation: float 4s ease-in-out infinite !important;
                    gap: 12px !important;
                }
                
                /* Bullets flutuantes premium */
                .swiper-pagination-bullet {
                    width: 14px !important;
                    height: 14px !important;
                    background: rgba(255, 255, 255, 0.3) !important;
                    opacity: 1 !important;
                    margin: 0 !important;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    cursor: pointer !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                    border-radius: 50% !important;
                    position: relative !important;
                    backdrop-filter: blur(20px) !important;
                    box-shadow:
                        0 4px 12px rgba(0, 0, 0, 0.1),
                        0 2px 6px rgba(0, 0, 0, 0.05) !important;
                }
                
                /* Efeito de glow interno */
                .swiper-pagination-bullet::before {
                    content: '' !important;
                    position: absolute !important;
                    top: 2px !important;
                    left: 2px !important;
                    right: 2px !important;
                    bottom: 2px !important;
                    background: radial-gradient(circle at center, rgba(106, 106, 106, 0.8), transparent 70%) !important;
                    border-radius: 50% !important;
                    opacity: 0 !important;
                    transition: opacity 0.3s ease !important;
                }
                
                /* Bullet ativo - design premium futurístico */
                .swiper-pagination-bullet-active {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%) !important;
                    width: 24px !important;
                    height: 12px !important;
                    border-radius: !important;
                    box-shadow:
                        0 0 20px rgba(102, 126, 234, 0.6),
                        0 0 40px rgba(118, 75, 162, 0.4),
                        0 4px 20px rgba(102, 126, 234, 0.3),
                        inset 0 1px 3px rgba(255, 255, 255, 0.4) !important;
                    border: 1px solid rgba(102, 126, 234, 0.8) !important;
                    animation: pulse 3s infinite ease-in-out !important;
                    position: relative !important;
                    overflow: hidden !important;
                    transform: scale(1.1) !important;
                }
                
                .swiper-pagination-bullet-active::before {
                    opacity: 0.6 !important;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3)) !important;
                    border-radius: 20px !important;
                    top: 1px !important;
                    left: 1px !important;
                    right: 1px !important;
                    bottom: 1px !important;
                }
                
                /* Shimmer effect no bullet ativo */
                .swiper-pagination-bullet-active::after {
                    content: '' !important;
                    position: absolute !important;
                    top: 0 !important;
                    left: -100% !important;
                    width: 100% !important;
                    height: 100% !important;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.6),
                        transparent
                    ) !important;
                    animation: shimmer 2.5s infinite !important;
                    border-radius: 20px !important;
                }
                
                /* Hover states refinados */
                .swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active) {
                    transform: scale(1.3) !important;
                    background: rgba(102, 126, 234, 0.4) !important;
                    box-shadow:
                        0 0 15px rgba(102, 126, 234, 0.5),
                        0 6px 16px rgba(0, 0, 0, 0.15) !important;
                    border: 1px solid rgba(102, 126, 234, 0.7) !important;
                }
                
                .swiper-pagination-bullet:hover:not(.swiper-pagination-bullet-active)::before {
                    opacity: 0.8 !important;
                }
                
                /* Micro-interação adicional */
                .swiper-pagination-bullet:active {
                    transform: scale(0.9) !important;
                    transition: transform 0.1s ease !important;
                }
                
                .swiper-pagination-bullet-active:hover {
                    animation-play-state: paused !important;
                    transform: scale(1.15) !important;
                    box-shadow:
                        0 0 25px rgba(102, 126, 234, 0.8),
                        0 0 50px rgba(118, 75, 162, 0.6),
                        0 6px 24px rgba(102, 126, 234, 0.4) !important;
                }
                
                /* Remove sombras padrão do Swiper */
                .swiper-slide-shadow-left,
                .swiper-slide-shadow-right {
                    display: none !important;
                }
                
                .swiper-slide-active {
                    z-index: 10 !important;
                }
                
                .swiper-slide-next,
                .swiper-slide-prev {
                    z-index: 5 !important;
                }
                
                /* Estados de foco para acessibilidade */
                .swiper-pagination-bullet:focus {
                    outline: none !important;
                    box-shadow: 
                        0 0 0 3px rgba(102, 126, 234, 0.3),
                        0 0 16px rgba(102, 126, 234, 0.5) !important;
                    transform: scale(1.2) !important;
                }
                
                /* Responsividade */
                @media (max-width: 768px) {
                    .swiper-pagination-custom {
                        bottom: -50px !important;
                        gap: 10px !important;
                    }
                    
                    .swiper-pagination-bullet {
                        width: 10px !important;
                        height: 10px !important;
                    }
                    
                    .swiper-pagination-bullet-active {
                        width: 32px !important;
                        height: 10px !important;
                        border-radius: 16px !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .swiper-pagination-custom {
                        gap: 8px !important;
                    }
                    
                    .swiper-pagination-bullet {
                        width: 8px !important;
                        height: 8px !important;
                    }
                    
                    .swiper-pagination-bullet-active {
                        width: 28px !important;
                        height: 8px !important;
                        border-radius: 14px !important;
                    }
                }
                
                /* Redução de movimento para usuários sensíveis */
                @media (prefers-reduced-motion: reduce) {
                    .swiper-pagination-bullet,
                    .swiper-pagination-custom {
                        transition: none !important;
                        animation: none !important;
                    }
                    
                    .swiper-pagination-bullet-active {
                        animation: none !important;
                    }
                    
                    .swiper-pagination-bullet-active::after {
                        animation: none !important;
                    }
                }
            `}</style>
        </Box>
    );
};
