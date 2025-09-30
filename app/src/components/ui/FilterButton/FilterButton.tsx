// components/ui/FilterButton/FilterButton.tsx
import { Button, HStack, Text } from '@chakra-ui/react'
import type { FilterButtonProps } from './FilterButton.types'

const DESIGN_TOKENS = {
    primaryColor: '#E2F2FE',
    primaryColorRgba: '59, 130, 246',
    textColor: '#666B74',
    variants: {
        default: {
            top: '20px',
            backgroundColor: '#F3F3F3'
        },
        variant2: {
            top: '77px',
            backgroundColor: '#F3F3F3'
        }
    }
} as const

export const FilterButton = ({
    children,
    icon,
    isActive = false,
    variant = 'default',
    onClick,
    minWidth = '140px'
}: FilterButtonProps) => {
    const variantStyles = DESIGN_TOKENS.variants[variant]

    return (
        <Button
            variant="outline"
            size="lg"
            borderRadius="10px"
            bg={isActive ? DESIGN_TOKENS.primaryColor : variantStyles.backgroundColor}
            color={isActive ? '#298BF8' : DESIGN_TOKENS.textColor}
            border="none"
            px="15px"
            py="11px"
            h="48px"
            minW={minWidth}
            gap="16px"
            boxShadow={isActive
                ? `0 8px 32px rgba(${DESIGN_TOKENS.primaryColorRgba}, 0.4)`
                : "0 4px 20px rgba(0, 0, 0, 0.08)"
            }
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            onClick={onClick}
            _hover={{
                transform: "translateY(-2px)",
                boxShadow: isActive
                    ? `0 12px 40px rgba(${DESIGN_TOKENS.primaryColorRgba}, 0.5)`
                    : "0 8px 25px rgba(0, 0, 0, 0.15)"
            }}
            _active={{
                transform: "translateY(0px)"
            }}
        >
            <HStack gap="16px" justify="center" align="center">
                {icon}
                <Text fontSize="sm" fontWeight="600">
                    {children}
                </Text>
            </HStack>
        </Button>
    )
}
