'use client'

import { VStack, Box } from '@chakra-ui/react'
import { ProgramaSection } from '../ProgramaSection'
import type { ProgramaContainerProps } from './ProgramaContainer.types'

export const ProgramaContainer = ({
    sections,
    className,
    spacing = 12
}: ProgramaContainerProps) => {
    return (
        <Box className={className} w="100%" bg="gray.50" py={8}>
            <VStack gap={spacing} align="stretch" w="100%">
                {sections.map((section, index) => (
                    <ProgramaSection
                        key={section.id || index}
                        title={section.title}
                        programas={section.programas}
                        showViewAll={section.showViewAll}
                        viewAllHref={section.viewAllHref}
                        showScrollButton={section.showScrollButton}
                    />
                ))}
            </VStack>
        </Box>
    )
}
