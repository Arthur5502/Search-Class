'use client'

import {
    Box,
    HStack,
    VStack,
    Grid,
    Skeleton
} from '@chakra-ui/react'

interface ProgramSkeletonProps {
    cardSize?: 'small' | 'large'
    layout?: 'carousel' | 'grid'
    columns?: {
        base: number
        sm?: number
        md?: number
        lg?: number
        xl?: number
    }
    className?: string
}

export const ProgramSkeleton = ({
    cardSize = 'small',
    layout = 'carousel',
    columns = { base: 1, sm: 2, md: 3, lg: 4 },
    className
}: ProgramSkeletonProps) => {
    const cardWidth = cardSize === 'large' ? '440px' : '356px'
    const cardHeight = cardSize === 'large' ? '320px' : '240px'

    return (
        <Box w="100%" py={6} px="20px" className={className}>
            {/* Header Skeleton */}
            <HStack justify="space-between" align="center" mb={8}>
                <Skeleton height="32px" width="300px" borderRadius="md" />
                <Skeleton height="24px" width="80px" borderRadius="md" />
            </HStack>

            {layout === 'grid' ? (
                <Grid
                    templateColumns={{
                        base: `repeat(${columns.base}, 1fr)`,
                        sm: `repeat(${columns.sm || 2}, 1fr)`,
                        md: `repeat(${columns.md || 3}, 1fr)`,
                        lg: `repeat(${columns.lg || 4}, 1fr)`,
                        xl: `repeat(${columns.xl || 4}, 1fr)`
                    }}
                    gap={6}
                >
                    {Array.from({ length: 8 }).map((_, i) => (
                        <VStack key={i} align="start" gap={4}>
                            <Skeleton
                                height={cardSize === 'large' ? '226px' : '160px'}
                                borderRadius="16px"
                                w="100%"
                            />
                            <VStack align="start" gap={2} w="100%">
                                <Skeleton height="12px" width="60%" borderRadius="md" />
                                <Skeleton height="20px" width="90%" borderRadius="md" />
                                <Skeleton height="16px" width="70%" borderRadius="md" />
                                {cardSize === 'large' && (
                                    <Skeleton height="16px" width="50%" borderRadius="md" />
                                )}
                            </VStack>
                        </VStack>
                    ))}
                </Grid>
            ) : (
                <HStack gap={6} overflowX="hidden" pt={8} pb={24}>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Box key={i} minW={cardWidth} flexShrink={0}>
                            <VStack align="start" gap={4}>
                                <Skeleton
                                    height={cardSize === 'large' ? '226px' : '160px'}
                                    borderRadius="16px"
                                    w={cardWidth}
                                />
                                <VStack align="start" gap={2} w="100%">
                                    <Skeleton height="12px" width="60%" borderRadius="md" />
                                    <Skeleton height="20px" width="90%" borderRadius="md" />
                                    <Skeleton height="16px" width="70%" borderRadius="md" />
                                    {cardSize === 'large' && (
                                        <Skeleton height="16px" width="50%" borderRadius="md" />
                                    )}
                                </VStack>
                            </VStack>
                        </Box>
                    ))}
                </HStack>
            )}
        </Box>
    )
}
