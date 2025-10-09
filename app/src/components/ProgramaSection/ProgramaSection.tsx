'use client'

import { FC, useState, useRef } from 'react'
import {
    Box,
    Heading,
    HStack,
    Button,
    IconButton,
} from '@chakra-ui/react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, FreeMode, Mousewheel } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import Link from 'next/link'

import 'swiper/css'
import 'swiper/css/navigation'

import type { Programa } from '../../types/domain'
import { ProgramCardSmall } from '../ProgramCard/ProgramCardSmall'
import { ProgramCardMedium } from '../ProgramCard/ProgramCardMedium'

interface ProgramaSectionProps {
    title: string;
    programas: Programa[];
    showViewAll?: boolean;
    viewAllHref?: string;
    showScrollButton?: boolean;
    cardType?: 'small' | 'medium';
}

export const ProgramaSection: FC<ProgramaSectionProps> = ({
    title,
    programas,
    showViewAll = true,
    viewAllHref = "/programas",
    showScrollButton = true,
    cardType = 'small'
}) => {
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

    const getBreakpoints = () => {
        if (cardType === 'medium') {
            return {
                320: {
                    slidesPerView: 1.1,
                    spaceBetween: 16,
                },
                480: {
                    slidesPerView: 1.3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 24,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                },
                1536: {
                    slidesPerView: 3.5,
                    spaceBetween: 24,
                },
            }
        }

        return {
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
        }
    }

    return (
        <Box w="100%" py={2} px="10px">
            <Box>
                <HStack justify="space-between" align="center" mb={2}>
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

            <Box
                position="relative"
                w="100%"
                pt={4}
                pb={5}
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
                        breakpoints={getBreakpoints()}
                    >
                        {programas.map((programa, index) => (
                            <SwiperSlide
                                key={programa.id}
                                style={{
                                    width: 'auto',
                                    height: 'auto',
                                }}
                            >
                                {cardType === 'medium' ? (
                                    <ProgramCardMedium
                                        programa={programa}
                                        index={index}
                                    />
                                ) : (
                                    <ProgramCardSmall
                                        programa={programa}
                                        index={index}
                                    />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {showScrollButton && programas.length > 3 && (
                        <>
                            <IconButton
                                position="absolute"
                                left="-70px"
                                top="35%"
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
                                top="35%"
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

            {/* CSS */}
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
