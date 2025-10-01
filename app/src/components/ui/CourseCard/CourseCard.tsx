import { Box, Image, Text, Heading, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { ProgramBadge } from '../ProgramaBadge'
import type { CourseCardProps } from './CourseCard.types'

const DESIGN_TOKENS = {
    borderRadius: { base: '16px', md: '19px' }, // Conforme Figma: 19px
    padding: { base: 4, md: 6 }, // 69px 19px conforme specs
    shadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
    hoverShadow: { base: '0 20px 40px rgba(0, 0, 0, 0.3)', md: '0 30px 60px rgba(0, 0, 0, 0.4)' },
    gradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.8) 100%)'
} as const

// 🆕 Configurações para diferentes variantes
const VARIANT_CONFIG = {
    carousel: {
        borderRadius: DESIGN_TOKENS.borderRadius,
        padding: DESIGN_TOKENS.padding,
        imageHeight: '100%',
        shadow: DESIGN_TOKENS.shadow,
        layout: 'overlay' as const
    },
    compact: {
        borderRadius: '15.39px',
        padding: '0px',
        imageHeight: '140px',
        shadow: 'sm',
        layout: 'external' as const
    },
    standard: {
        borderRadius: '15.39px',
        padding: '8.1px',
        imageHeight: '200px',
        shadow: 'md',
        layout: 'external' as const
    },
    featured: {
        borderRadius: '15.39px',
        padding: '12px',
        imageHeight: '240px',
        shadow: 'lg',
        layout: 'external' as const,
        highlight: true
    }
} as const

export const CourseCard = ({
    programa,
    width = '350px',
    height = '561px', // Altura exata do Figma
    priority = false,
    onClick,
    // 🆕 Novas props com valores padrão para não quebrar código existente
    variant = 'carousel', // Mantém comportamento atual como padrão
    showCategory = variant === 'carousel', // Mostra categoria apenas no carousel por padrão
    showLocation = false,
    layout = variant === 'carousel' ? 'overlay' : 'external' // Layout automático baseado no variant
}: CourseCardProps) => {

    // 🆕 Usa configuração baseada na variant, ou fallback para valores originais
    const config = variant === 'carousel'
        ? {
            borderRadius: DESIGN_TOKENS.borderRadius,
            padding: DESIGN_TOKENS.padding,
            imageHeight: '100%',
            shadow: DESIGN_TOKENS.shadow,
            layout: 'overlay' as const
        }
        : VARIANT_CONFIG[variant]

    const CardContent = () => (
        <Box
            h={height}
            w={width}
            mx="auto"
            borderRadius={config.borderRadius}
            overflow="hidden"
            cursor="pointer"
            position="relative"
            boxShadow={config.shadow}
            transition="all 0.4s ease"
            zIndex={1}
            onClick={onClick}
            _hover={{
                transform: {
                    base: 'translateY(-10px) scale(1.02)',
                    md: 'translateY(-20px) scale(1.02)'
                },
                boxShadow: DESIGN_TOKENS.hoverShadow,
                zIndex: 1000
            }}
            // 🆕 Bordas para variantes especiais
            border={variant === 'featured' ? '2px solid' : 'none'}
            borderColor={variant === 'featured' ? 'blue.200' : 'transparent'}
        >
            <Box
                position="relative"
                h="100%"
                w="100%"
                overflow="hidden"
                borderRadius={config.borderRadius}
            >
                {/* Imagem de Fundo */}
                <Image
                    src={programa.imagem || `https://picsum.photos/350/500?random=${programa.id}`}
                    alt={programa.titulo}
                    w="100%"
                    h={layout === 'overlay' ? "100%" : config.imageHeight}
                    objectFit="cover"
                    loading={priority ? 'eager' : 'lazy'}
                />

                {/* 🆕 Badge de destaque para featured */}
                {variant === 'featured' && (
                    <Box
                        position="absolute"
                        top="12px"
                        right="12px"
                        bg="blue.500"
                        color="white"
                        px="8px"
                        py="4px"
                        borderRadius="full"
                        fontSize="xs"
                        fontWeight="bold"
                    >
                        DESTAQUE
                    </Box>
                )}

                {/* Gradiente Overlay - só para layout overlay */}
                {layout === 'overlay' && (
                    <Box
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        background={DESIGN_TOKENS.gradient}
                    />
                )}

                {/* Conteúdo do Card - Posicionamento baseado no layout */}
                {layout === 'overlay' ? (
                    // LAYOUT ORIGINAL - Texto sobre a imagem (carousel)
                    <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        right={0}
                        p={config.padding}
                        color="white"
                    >
                        <VStack align="start" gap={{ base: 2, md: 3 }}>
                            {showCategory && <ProgramBadge>Programa</ProgramBadge>}

                            <Heading
                                fontSize={{ base: 'md', md: 'xl' }}
                                fontWeight="bold"
                                color="white"
                                lineHeight="1.2"
                                lineClamp={2}
                                as="h3"
                            >
                                {programa.titulo}
                            </Heading>

                            <Text
                                fontSize={{ base: 'xs', md: 'sm' }}
                                color="gray.300"
                                fontWeight="medium"
                                lineClamp={1}
                            >
                                Fornecido por {programa.instituicao.nome}
                            </Text>

                            {programa.professor && (
                                <Box
                                    px={{ base: 2, md: 3 }}
                                    py={{ base: 1, md: 2 }}
                                    borderRadius="full"
                                    bg="rgba(255, 255, 255, 0.15)"
                                    fontSize={{ base: 'xs', md: 'sm' }}
                                    color="white"
                                    fontWeight="medium"
                                >
                                    Professor: {programa.professor}
                                </Box>
                            )}
                        </VStack>
                    </Box>
                ) : (
                    // 🆕 LAYOUT EXTERNO - Texto embaixo da imagem (grid)
                    <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        right={0}
                        transform="translateY(100%)"
                        p={config.padding}
                        bg="transparent"
                    >
                        <VStack align="start" gap="8px" mt={4}>
                            {showCategory && (
                                <Text
                                    fontSize="xs"
                                    color="gray.500"
                                    textTransform="uppercase"
                                    fontWeight="600"
                                    letterSpacing="0.5px"
                                >
                                    CURSO DE {programa.area.toUpperCase()}
                                </Text>
                            )}

                            <Heading
                                fontSize={variant === 'compact' ? 'md' : 'lg'}
                                color="gray.900"
                                fontWeight="600"
                                lineHeight="1.3"
                                lineClamp={2}
                                as="h3"
                            >
                                {programa.titulo}
                            </Heading>

                            {showLocation && (
                                <Text
                                    fontSize="sm"
                                    color="gray.400"
                                    fontWeight="400"
                                    lineClamp={1}
                                >
                                    {programa.cidade} - {programa.estado}
                                </Text>
                            )}

                            <Text
                                fontSize="sm"
                                color="gray.500"
                                fontWeight="400"
                                lineClamp={1}
                            >
                                {programa.instituicao.nome}
                            </Text>
                        </VStack>
                    </Box>
                )}
            </Box>
        </Box>
    )

    return (
        <Link href={`/programas/${programa.id}`}>
            <CardContent />
        </Link>
    )
}