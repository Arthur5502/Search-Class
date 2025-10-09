'use client'

import {
    Box,
    Heading,
    Image,
    Text,
    VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import type { ProgramCardSmallProps } from './ProgramCardSmall.types'

export const ProgramCardSmall = ({
    programa,
    index = 0,
    variant = 'default'
}: ProgramCardSmallProps) => {
    return (
        <Link href={`/programas/${programa.id}`}>
            <Box
                cursor="pointer"
                transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                position="relative"
                zIndex={1}
                w="317px"
                _hover={{
                    transform: 'translateY(-8px)',
                    zIndex: 999,
                }}
            >
                <Box
                    borderRadius="14px"
                    overflow="hidden"
                    shadow="md"
                    bg="white"
                    transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                    mb={3}
                    _hover={{
                        shadow: '2xl',
                    }}
                >
                    <Box
                        position="relative"
                        overflow="hidden"
                        h="163px"
                        bg="gray.100"
                    >
                        <Image
                            src={`https://picsum.photos/317/163?random=${programa.id}`}
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
                                e.currentTarget.src = `https://via.placeholder.com/265x180/E2E8F0/718096?text=${encodeURIComponent(programa.area)}`
                            }}
                        />
                    </Box>
                </Box>

                <VStack align="start" gap={1} px={0}>
                    <Heading
                        fontSize="lg"
                        color="#666B74"
                        textTransform="uppercase"
                        fontWeight="400"
                        letterSpacing="0.5px"
                    >
                        CURSO DE {programa.area.toUpperCase()}
                    </Heading>

                    <Text
                        fontSize="md"
                        color="#CACBCB"
                        fontWeight="400"
                        lineClamp={1}
                    >
                        {programa.instituicao.nome}
                    </Text>

                    {variant === 'variant2' && (
                        <Text
                            fontSize="xl"
                            color="gray.400"
                            fontWeight="400"
                            lineClamp={1}
                        >
                            {programa.cidade} - {programa.estado}
                        </Text>
                    )}
                </VStack>
            </Box>
        </Link>
    )
}