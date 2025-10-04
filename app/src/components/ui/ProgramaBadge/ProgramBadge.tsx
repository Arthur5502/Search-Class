import { Box } from '@chakra-ui/react'
import type { ProgramBadgeProps } from './ProgramBadge.types'

const BADGE_VARIANTS = {
    default: {
        bg: 'rgba(0, 255, 136, 0.2)',
        border: '1px solid rgba(0, 255, 136, 0.4)',
        color: '#00ff88'
    },
    success: {
        bg: 'rgba(34, 197, 94, 0.2)',
        border: '1px solid rgba(34, 197, 94, 0.4)',
        color: '#22c55e'
    },
    warning: {
        bg: 'rgba(245, 158, 11, 0.2)',
        border: '1px solid rgba(245, 158, 11, 0.4)',
        color: '#f59e0b'
    }
} as const

export const ProgramBadge = ({
    children,
    variant = 'default'
}: ProgramBadgeProps) => {
    const styles = BADGE_VARIANTS[variant]

    return (
        <Box
            px={{ base: 2, md: 3 }}
            py={1}
            borderRadius="full"
            bg={styles.bg}
            border={styles.border}
            fontSize={{ base: '2xs', md: 'xs' }}
            fontWeight="600"
            color={styles.color}
            textTransform="uppercase"
            letterSpacing="wide"
            display="inline-block"
        >
            {children}
        </Box>
    )
}
