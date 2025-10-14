'use client'

import { IconButton } from '@chakra-ui/react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

interface CarouselControlsProps {
    onPrev: () => void
    onNext: () => void
    isBeginning: boolean
    isEnd: boolean
}

export const CarouselControls = ({
    onPrev,
    onNext,
    isBeginning,
    isEnd
}: CarouselControlsProps) => {
    return (
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
                onClick={onPrev}
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
                onClick={onNext}
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
    )
}
