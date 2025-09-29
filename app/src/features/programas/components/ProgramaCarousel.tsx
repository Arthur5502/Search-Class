'use client';
import { FC, useRef, useState, useEffect } from 'react';
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
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { Programa } from '../../../types/domain';
import type { Swiper as SwiperType } from 'swiper';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

interface ProgramaCarouselProps {
    programas: Programa[];
}

export const ProgramaCarousel: FC<ProgramaCarouselProps> = ({ programas }) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
    const [slideWidth, setSlideWidth] = useState('350px');
    const [cardDimensions, setCardDimensions] = useState({ width: '350px', height: '561px' });
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    // Responsividade melhorada
    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth;

            if (width < 480) {
                // Mobile pequeno
                setSlideWidth('280px');
                setCardDimensions({ width: '280px', height: '420px' });
            } else if (width < 768) {
                // Mobile
                setSlideWidth('300px');
                setCardDimensions({ width: '300px', height: '480px' });
            } else if (width < 1024) {
                // Tablet
                setSlideWidth('320px');
                setCardDimensions({ width: '320px', height: '520px' });
            } else {
                // Desktop
                setSlideWidth('350px');
                setCardDimensions({ width: '350px', height: '561px' });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <Box w="100vw" py={{ base: 10, md: 20 }} overflow="hidden" bg="gray.50">
            {/* Container wrapper responsivo */}
            <Box
                position="relative"
                display="flex"
                justifyContent="center"
                w="100%"
                minH={{ base: "500px", sm: "580px", md: "650px" }}
                alignItems="center"
                py={{ base: "30px", md: "50px" }}
                overflow="visible"
            >
                {/* Navigation Buttons - Responsivos */}
                <IconButton
                    ref={prevRef}
                    aria-label="Slide anterior"
                    position="absolute"
                    left={{ base: "10px", sm: "20px", md: "50px", lg: "80px", xl: "130px" }}
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={20}
                    size={{ base: "lg", md: "xl" }}
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
                    display={{ base: 'none', sm: 'flex' }}
                >
                    <FiChevronLeft size={24} />
                </IconButton>

                <IconButton
                    ref={nextRef}
                    aria-label="Próximo slide"
                    position="absolute"
                    right={{ base: "10px", sm: "20px", md: "50px", lg: "80px", xl: "130px" }}
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={20}
                    size={{ base: "lg", md: "xl" }}
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
                    display={{ base: 'none', sm: 'flex' }}
                >
                    <FiChevronRight size={24} />
                </IconButton>

                {/* Swiper Container responsivo */}
                <Box
                    width="100%"
                    maxW={{ base: "100%", md: "1200px" }}
                    px={{ base: 4, sm: 6, md: 0 }}
                    className="swiper-overflow-container"
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        effect="coverflow"
                        coverflowEffect={{
                            rotate: window.innerWidth < 768 ? 10 : 20,
                            stretch: window.innerWidth < 768 ? -30 : -60,
                            depth: window.innerWidth < 768 ? 50 : 100,
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
                        watchSlidesProgress={true}
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
                        {programas.map((programa, index) => (
                            <SwiperSlide
                                key={programa.id}
                                style={{ width: slideWidth }}
                            >
                                <Link href={`/programas/${programa.id}`}>
                                    <Box
                                        h={cardDimensions.height}
                                        w={cardDimensions.width}
                                        mx="auto"
                                        borderRadius={{ base: "16px", md: "20px" }}
                                        overflow="hidden"
                                        cursor="pointer"
                                        position="relative"
                                        boxShadow="0 10px 30px rgba(0, 0, 0, 0.2)"
                                        transition="all 0.4s ease"
                                        zIndex={1}
                                        _hover={{
                                            transform: {
                                                base: 'translateY(-10px) scale(1.02)',
                                                md: 'translateY(-20px) scale(1.02)'
                                            },
                                            boxShadow: {
                                                base: '0 20px 40px rgba(0, 0, 0, 0.3)',
                                                md: '0 30px 60px rgba(0, 0, 0, 0.4)'
                                            },
                                            zIndex: 1000
                                        }}
                                    >
                                        {/* Image Container */}
                                        <Box
                                            position="relative"
                                            h="100%"
                                            w="100%"
                                            overflow="hidden"
                                            borderRadius={{ base: "16px", md: "20px" }}
                                        >
                                            <Image
                                                src={`https://picsum.photos/350/500?random=${programa.id}`}
                                                alt={programa.titulo}
                                                w="100%"
                                                h="100%"
                                                objectFit="cover"
                                                loading={index < 3 ? 'eager' : 'lazy'}
                                            />

                                            {/* Gradient Overlay */}
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

                                            {/* Content */}
                                            <Box
                                                position="absolute"
                                                bottom={0}
                                                left={0}
                                                right={0}
                                                p={{ base: 4, md: 6 }}
                                                color="white"
                                            >
                                                <VStack align="start" gap={{ base: 2, md: 3 }}>
                                                    <Box
                                                        px={{ base: 2, md: 3 }}
                                                        py={1}
                                                        borderRadius="full"
                                                        bg="rgba(0, 255, 136, 0.2)"
                                                        border="1px solid rgba(0, 255, 136, 0.4)"
                                                        fontSize={{ base: "2xs", md: "xs" }}
                                                        fontWeight="600"
                                                        color="#00ff88"
                                                        textTransform="uppercase"
                                                        letterSpacing="wide"
                                                    >
                                                        Programa
                                                    </Box>

                                                    <Heading
                                                        fontSize={{ base: "md", md: "xl" }}
                                                        fontWeight="bold"
                                                        color="white"
                                                        lineHeight="1.2"
                                                        lineClamp={2}
                                                        as="h3"
                                                    >
                                                        {programa.titulo}
                                                    </Heading>

                                                    <Text
                                                        fontSize={{ base: "xs", md: "sm" }}
                                                        color="gray.300"
                                                        fontWeight="medium"
                                                        lineClamp={1}
                                                    >
                                                        {programa.instituicao.nome}
                                                    </Text>

                                                    <Box
                                                        px={{ base: 2, md: 3 }}
                                                        py={{ base: 1, md: 2 }}
                                                        borderRadius="full"
                                                        bg="rgba(255, 255, 255, 0.15)"
                                                        fontSize={{ base: "xs", md: "sm" }}
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>

            {/* Pagination responsiva */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                width="100%"
                mt={{ base: 6, md: 10 }}
                position="relative"
            >
                <Box className="swiper-pagination-custom" />
            </Box>

            {/* Custom Styles com responsividade melhorada */}
            <style jsx global>{`
                .swiper-overflow-container .swiper {
                    overflow: visible !important;
                    position: static !important;
                }
                
                .swiper-overflow-container .swiper-wrapper {
                    overflow: visible !important;
                }
                
                .swiper-overflow-container .swiper-slide {
                    opacity: 0 !important;
                    visibility: hidden !important;
                    pointer-events: none !important;
                    transition: opacity 0.3s ease, visibility 0.3s ease !important;
                }
                
                .swiper-overflow-container .swiper-slide-active,
                .swiper-overflow-container .swiper-slide-next,
                .swiper-overflow-container .swiper-slide-prev {
                    opacity: 1 !important;
                    visibility: visible !important;
                    pointer-events: auto !important;
                }
                
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
                
                .swiper-pagination-custom {
                    position: absolute !important;
                    bottom: -40px !important;
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
                    gap: 8px !important;
                }
                
                .swiper-pagination-bullet {
                    width: 12px !important;
                    height: 12px !important;
                    background: rgba(255, 255, 255, 0.3) !important;
                    opacity: 1 !important;
                    margin: 0 !important;
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    cursor: pointer !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                    border-radius: 50% !important;
                    position: relative !important;
                    backdrop-filter: blur(20px) !important;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05) !important;
                }
                
                .swiper-pagination-bullet-active {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%) !important;
                    width: 32px !important;
                    height: 12px !important;
                    border-radius: 12px !important;
                    box-shadow: 0 0 20px rgba(102, 126, 234, 0.6), 0 0 40px rgba(118, 75, 162, 0.4), 0 4px 20px rgba(102, 126, 234, 0.3), inset 0 1px 3px rgba(255, 255, 255, 0.4) !important;
                    border: 1px solid rgba(102, 126, 234, 0.8) !important;
                    animation: pulse 3s infinite ease-in-out !important;
                    position: relative !important;
                    overflow: hidden !important;
                    transform: scale(1.1) !important;
                }

                /* Responsividade melhorada */
                @media (max-width: 480px) {
                    .swiper-pagination-custom {
                        bottom: -30px !important;
                        gap: 6px !important;
                    }
                    
                    .swiper-pagination-bullet {
                        width: 8px !important;
                        height: 8px !important;
                    }
                    
                    .swiper-pagination-bullet-active {
                        width: 24px !important;
                        height: 8px !important;
                        border-radius: 8px !important;
                    }
                }
                
                @media (min-width: 481px) and (max-width: 768px) {
                    .swiper-pagination-custom {
                        bottom: -35px !important;
                        gap: 8px !important;
                    }
                    
                    .swiper-pagination-bullet {
                        width: 10px !important;
                        height: 10px !important;
                    }
                    
                    .swiper-pagination-bullet-active {
                        width: 28px !important;
                        height: 10px !important;
                        border-radius: 10px !important;
                    }
                }

                @media (min-width: 769px) and (max-width: 1024px) {
                    .swiper-pagination-custom {
                        bottom: -45px !important;
                        gap: 10px !important;
                    }
                    
                    .swiper-pagination-bullet {
                        width: 12px !important;
                        height: 12px !important;
                    }
                    
                    .swiper-pagination-bullet-active {
                        width: 30px !important;
                        height: 12px !important;
                        border-radius: 12px !important;
                    }
                }

                @media (min-width: 1025px) {
                    .swiper-pagination-custom {
                        bottom: -60px !important;
                        gap: 12px !important;
                    }
                    
                    .swiper-pagination-bullet {
                        width: 14px !important;
                        height: 14px !important;
                    }
                    
                    .swiper-pagination-bullet-active {
                        width: 32px !important;
                        height: 12px !important;
                        border-radius: 12px !important;
                    }
                }
                
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
