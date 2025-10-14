'use client'

import {
    Box,
    Heading,
    Image,
    Text,
    VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import type { ProgramCardMediumProps } from './ProgramCardMedium.types'
import { FavoriteButton } from '../ui/FavoriteButton'

export const ProgramCardMedium = ({
    programa,
    index = 0,
    className
}: ProgramCardMediumProps) => {
    return (
        <Link href={`/programas/${programa.id}`}>
            <Box
                cursor="pointer"
                transition="all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                position="relative"
                zIndex={1}
                w={{ base: "320px", sm: "380px", md: "420px", lg: "440px" }}
                className={className}
                _hover={{
                    transform: 'translateY(-4px)',
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
                    position="relative"
                    _hover={{
                        shadow: 'lg',
                    }}
                >
                    <Box
                        position="absolute"
                        top="12px"
                        right="12px"
                        zIndex={999}
                        onClick={(e) => e.preventDefault()}
                    >
                        <FavoriteButton programaId={programa.id} />
                    </Box>

                    <Box
                        position="relative"
                        overflow="hidden"
                        h={{ base: "180px", sm: "200px", md: "220px", lg: "226px" }}
                        bg="gray.100"
                    >
                        <Image
                            src={`https://picsum.photos/440/226?random=${programa.id}`}
                            alt={programa.titulo}
                            w="100%"
                            h="100%"
                            objectFit="cover"
                            loading={index < 4 ? "eager" : "lazy"}
                            transition="transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                            _hover={{
                                transform: 'scale(1.05)',
                            }}
                            onError={(e) => {
                                e.currentTarget.src = `https://via.placeholder.com/356x240/E2E8F0/718096?text=${encodeURIComponent(programa.area)}`
                            }}
                        />
                    </Box>
                </Box>

                <VStack align="start" gap={1} px={0}>
                    <Heading
                        fontSize="xl"
                        color="#666B74"
                        textTransform="uppercase"
                        fontWeight="400"
                        letterSpacing="0.5px"
                    >
                        CURSO DE {programa.area.toUpperCase()}
                    </Heading>

                    <Text
                        fontSize="sm"
                        color="#CACBCB"
                        fontWeight="400"
                        lineClamp={1}
                    >
                        {programa.instituicao.nome}
                    </Text>
                </VStack>
            </Box>
        </Link>
    )
}
