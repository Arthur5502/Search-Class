import { HStack, Text, Box, Image } from '@chakra-ui/react'
import Link from 'next/link'
import type { LogoProps } from './Logo.types'

const LOGO_SIZES = {
    sm: { image: 8, text: 'md' },
    md: { image: 12, text: 'xl' },
    lg: { image: 16, text: '2xl' }
} as const

export const Logo = ({
    size = 'md',
    showText = true,
    href = '/'
}: LogoProps) => {
    const sizeConfig = LOGO_SIZES[size]

    const LogoContent = () => (
        <HStack gap={3} cursor="pointer">
            <Image
                src="/Logo.svg"
                alt="Logo"
                w={sizeConfig.image}
                h={sizeConfig.image}
                objectFit="contain"
            />
            {showText && (
                <Box>
                    <Text
                        fontSize={sizeConfig.text}
                        color="gray.800"
                        lineHeight="1"
                        textTransform="uppercase"
                        fontWeight="semibold"
                        css={{
                            '&::first-letter': {
                                color: 'var(--chakra-colors-blue-600)'
                            }
                        }}
                    >
                        search
                    </Text>
                    <Text
                        fontSize={sizeConfig.text}
                        color="gray.500"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        fontWeight="medium"
                        css={{
                            '&::first-letter': {
                                color: 'var(--chakra-colors-blue-600)'
                            }
                        }}
                    >
                        class
                    </Text>
                </Box>
            )}
        </HStack>
    )

    return (
        <Link href={href}>
            <LogoContent />
        </Link>
    )
}
