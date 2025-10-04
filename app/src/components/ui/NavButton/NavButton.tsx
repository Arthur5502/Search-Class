import { Button, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import type { NavButtonProps } from './NavButton.types'

export const NavButton = ({
    children,
    href,
    icon,
    variant = 'ghost',
    size = 'md'
}: NavButtonProps) => {
    const ButtonContent = () => (
        <Button
            variant={variant}
            size={size}
            fontSize="sm"
            color="gray.600"
            fontWeight="medium"
            px={4}
            py={2}
            h="auto"
            borderRadius="md"
            transition="all 0.2s"
            _hover={{
                bg: "gray.100",
                color: "gray.800",
                transform: "translateY(-1px)"
            }}
            _active={{
                transform: "translateY(0px)"
            }}
        >
            <HStack gap={2}>
                {icon}
                <Text>{children}</Text>
            </HStack>
        </Button>
    )

    return (
        <Link href={href}>
            <ButtonContent />
        </Link>
    )
}