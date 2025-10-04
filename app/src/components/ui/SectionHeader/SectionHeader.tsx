import { HStack, Heading, Button } from '@chakra-ui/react'
import Link from 'next/link'
import type { SectionHeaderProps } from './SectionHeader.types'

export const SectionHeader = ({
    title,
    showViewAll = true,
    viewAllHref = "/programas",
    viewAllText = "Ver tudo",
    className
}: SectionHeaderProps) => {
    return (
        <HStack
            justify="space-between"
            align="center"
            mb={8}
            className={className}
        >
            <Heading
                size="lg"
                color="gray.900"
                fontWeight="600"
                fontSize={{ base: "xl", md: "2xl" }}
            >
                {title}
            </Heading>

            {showViewAll && (
                <Link href={viewAllHref}>
                    <Button
                        variant="ghost"
                        color="blue.500"
                        fontSize="sm"
                        fontWeight="500"
                        p={0}
                        _hover={{ color: 'blue.600' }}
                        transition="color 0.2s"
                    >
                        {viewAllText}
                    </Button>
                </Link>
            )}
        </HStack>
    )
}
