'use client'

import { Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { CourseCard } from '../ui/CourseCard'
import { CarouselButton } from '../ui/CarouselButton'
import { useResponsiveCarousel } from '../../hooks/useResponsiveCarousel'
import { useSwiperNavigation } from '../../hooks/useSwiperNavigation'
import { swiperStyles } from './ProgramaCarousel.styles'
import type { ProgramaCarouselProps } from './ProgramaCarousel.types'

// Importações CSS
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export const ProgramaCarousel = ({
    programas,
    autoplay = true,
    autoplayDelay = 4000,
    className
}: ProgramaCarouselProps) => {
    const { slideWidth, cardDimensions, coverflowSettings } = useResponsiveCarousel()
    const { prevRef, nextRef, handleSwiperInit } = useSwiperNavigation()

    return (
            <Box
                overflow="hidden"
                className={className}
            >
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
                {/* Botões de Navegação */}
                <CarouselButton
                    ref={prevRef}
                    icon={<FiChevronLeft size={24} />}
                    direction="prev"
                    aria-label="Slide anterior"
                />

                <CarouselButton
                    ref={nextRef}
                    icon={<FiChevronRight size={24} />}
                    direction="next"
                    aria-label="Próximo slide"
                />

                {/* Container do Swiper */}
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
                            rotate: coverflowSettings.rotate,
                            stretch: coverflowSettings.stretch,
                            depth: coverflowSettings.depth,
                            modifier: 1,
                            slideShadows: false
                        }}
                        centeredSlides={true}
                        slidesPerView="auto"
                        spaceBetween={0}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                            el: '.swiper-pagination-custom'
                        }}
                        autoplay={autoplay ? {
                            delay: autoplayDelay,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        } : false}
                        speed={600}
                        loop={true}
                        watchSlidesProgress={true}
                        onSwiper={handleSwiperInit}
                    >
                        {programas.map((programa, index) => (
                            <SwiperSlide
                                key={programa.id}
                                style={{ width: slideWidth }}
                            >
                                <CourseCard
                                    programa={programa}
                                    width={cardDimensions.width}
                                    height={cardDimensions.height}
                                    priority={index < 3}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>

            {/* Paginação */}
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

            {/* Estilos CSS */}
            <style jsx global>
                {swiperStyles}
            </style>
        </Box>
    )
}