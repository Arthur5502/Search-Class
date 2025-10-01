import { IconButton } from '@chakra-ui/react'
import { forwardRef } from 'react'
import type { CarouselButtonProps } from './CarouselButton.types'

export const CarouselButton = forwardRef<HTMLButtonElement, CarouselButtonProps>(({
    icon,
    direction,
    onClick,
    disabled = false,
    'aria-label': ariaLabel
}, ref) => {
    const positionStyles = {
        prev: {
            left: { base: "10px", sm: "20px", md: "50px", lg: "80px", xl: "130px" }
        },
        next: {
            right: { base: "10px", sm: "20px", md: "50px", lg: "80px", xl: "130px" }
        }
    }

    return (
        <IconButton
            ref={ref}
            aria-label={ariaLabel}
            position="absolute"
            {...positionStyles[direction]}
            top="50%"
            transform="translateY(-50%)"
            zIndex={20}
            size={{ base: "lg", md: "xl" }}
            borderRadius="md"
            bg="#FFFFFF"
            color="#666B74"
            border="none"
            boxShadow="0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.05)"
            disabled={disabled}
            onClick={onClick}
            _hover={{
                bg: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                transform: 'translateY(-50%) scale(1.1)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2), 0 4px 10px rgba(0, 0, 0, 0.1)'
            }}
            _active={{
                transform: 'translateY(-50%) scale(0.95)',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)'
            }}
            _disabled={{
                opacity: 0.4,
                cursor: 'not-allowed',
                _hover: {
                    bg: '#FFFFFF',
                    color: '#666B74',
                    transform: 'translateY(-50%)'
                }
            }}
            transition="all 0.3s ease"
            display={{ base: 'none', sm: 'flex' }}
        >
            {icon}
        </IconButton>
    )
})

CarouselButton.displayName = 'CarouselButton'