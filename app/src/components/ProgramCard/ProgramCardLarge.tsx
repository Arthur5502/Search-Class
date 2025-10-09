'use client'

import {
    Box,
    Heading,
    Image,
    Text,
    VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import type { ProgramCardLargeProps } from './ProgramCardLarge.types'

export const ProgramCardLarge = ({
    programa,
    index = 0,
    showBadge = false,
    badgeText = "DESTAQUE"
}: ProgramCardLargeProps) => {
    return (
        <Link href={`/programas/${programa.id}`}>
            <Box
                cursor="pointer"
                transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                position="relative"
                zIndex={1}
                w="440px"
                _hover={{
                    transform: 'translateY(-8px)',
                    zIndex: 999,
                }}
            >
                <Box
                    borderRadius="16px"
                    overflow="hidden"
                    shadow="lg"
                    bg="white"
                    transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    mb={3}
                    position="relative"
                    _hover={{
                        shadow: '2xl',
                    }}
                >
                    <Box
                        position="relative"
                        overflow="hidden"
                        h="280px"
                        bg="gray.100"
                    >
                        <Image
                            src={`https://picsum.photos/440/280?random=${programa.id}`}
                            alt={programa.titulo}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            loading={index < 4 ? "eager" : "lazy"}
                            transition="transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                            _hover={{
                                transform: 'scale(1.08)',
                            }}
                            onError={(e) => {
                                e.currentTarget.src = `https://via.placeholder.com/440x280/E2E8F0/718096?text=${encodeURIComponent(programa.area)}`
                            }}
                        />

                        {showBadge && (
                            <Box
                                position="absolute"
                                top="12px"
                                right="12px"
                                bg="purple.500"
                                color="white"
                                px="12px"
                                py="6px"
                                borderRadius="full"
                                fontSize="xs"
                                fontWeight="bold"
                                textTransform="uppercase"
                            >
                                {badgeText}
                            </Box>
                        )}
                    </Box>
                </Box>

                <VStack align="start" gap={1} px={0}>
                    <Text
                        fontSize="xs"
                        color="gray.500"
                        textTransform="uppercase"
                        fontWeight="600"
                        letterSpacing="0.5px"
                    >
                        CURSO DE {programa.area.toUpperCase()}
                    </Text>

                    <Heading
                        fontSize="xl"
                        color="gray.900"
                        fontWeight="700"
                        lineHeight="1.3"
                        lineClamp={2}
                    >
                        {programa.titulo}
                    </Heading>

                    <Text
                        fontSize="sm"
                        color="gray.500"
                        fontWeight="400"
                        lineClamp={1}
                    >
                        {programa.instituicao.nome}
                    </Text>

                    <Text
                        fontSize="sm"
                        color="gray.400"
                        fontWeight="400"
                        lineClamp={1}
                    >
                        {programa.cidade} - {programa.estado}
                    </Text>
                </VStack>
            </Box>
        </Link>
    )
}
