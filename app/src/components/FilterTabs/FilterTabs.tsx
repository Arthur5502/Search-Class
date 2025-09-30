// components/FilterTabs/FilterTabs.tsx
'use client'

import { Container, HStack, VStack, Icon, Box, Text, Button } from '@chakra-ui/react'
import { FiMonitor, FiCloud } from 'react-icons/fi'
import Image from 'next/image'
import { FilterButton } from '../ui/FilterButton'
import { LocationSelector } from '../ui/LocaionSelector'
import { useFilters } from '../../hooks/useFilters'
import type { FilterTabsProps } from './FilterTabs.types'

export const FilterTabs = ({ className }: FilterTabsProps) => {
    const {
        selectedLocation,
        handleFilterToggle,
        handleLocationSelect,
        isActive
    } = useFilters()

    // Componente de ícone customizado para Financeiro
    const FinanceIcon = ({ isActiveState }: { isActiveState: boolean }) => (
            <Image
                src="/akar-icons_coin.svg"
                alt="Financeiro"
                width={24}
                height={24}
                style={{
                    filter: isActiveState
                        ? 'brightness(0) saturate(100%) invert(45%) sepia(67%) saturate(1234%) hue-rotate(192deg) brightness(101%) contrast(97%)' // #298BF8
                        : 'brightness(0) saturate(100%) invert(42%) sepia(8%) saturate(586%) hue-rotate(182deg) brightness(91%) contrast(88%)' // #666B74
                }}
            />
    )

    // Componente de ícone mobile para Financeiro
    const FinanceIconMobile = ({ isActiveState }: { isActiveState: boolean }) => (
        <Image
            src="/akar-icons_coin.svg"
            alt="Financeiro"
            width={10}
            height={10}
            style={{
                filter: isActiveState
                    ? 'brightness(0) saturate(100%) invert(45%) sepia(67%) saturate(1234%) hue-rotate(192deg) brightness(101%) contrast(97%)' // #298BF8
                    : 'brightness(0) saturate(100%) invert(42%) sepia(8%) saturate(586%) hue-rotate(182deg) brightness(91%) contrast(88%)' // #666B74
            }}
        />
    )

    return (
        <Container
            maxW="8xl"
            px={{ base: 4, sm: 6, md: 8 }}
            py={{ base: 4, md: 8 }}
            className={className}
        >
            {/* Desktop Layout */}
            <HStack
                gap="16px"
                justify="center"
                align="center"
                flexWrap="nowrap"
                display={{ base: 'none', md: 'flex' }}
                w="100%"
            >
                <LocationSelector
                    selectedLocation={selectedLocation}
                    onLocationSelect={handleLocationSelect}
                    variant="desktop"
                />

                <FilterButton
                    icon={<Icon as={FiMonitor} boxSize={5} color={isActive('tecnologia') ? '#298BF8' : '#666B74'} />}
                    isActive={isActive('tecnologia')}
                    onClick={() => handleFilterToggle('tecnologia')}
                    variant="default"
                >
                    Tecnologia
                </FilterButton>

                <FilterButton
                    icon={<FinanceIcon isActiveState={isActive('financeiro')} />}
                    isActive={isActive('financeiro')}
                    onClick={() => handleFilterToggle('financeiro')}
                    variant="variant2"
                >
                    Financeiro
                </FilterButton>

                <FilterButton
                    icon={<Icon as={FiCloud} boxSize={5} color={isActive('cloud') ? '#298BF8' : '#666B74'} />}
                    isActive={isActive('cloud')}
                    onClick={() => handleFilterToggle('cloud')}
                    variant="variant2"
                    minWidth="180px"
                >
                    Arquitetura em Cloud
                </FilterButton>
            </HStack>

            {/* Mobile Layout */}
            <VStack
                gap={4}
                display={{ base: 'flex', md: 'none' }}
                w="100%"
                align="center"
                maxW="400px"
                mx="auto"
            >
                <LocationSelector
                    selectedLocation={selectedLocation}
                    onLocationSelect={handleLocationSelect}
                    variant="mobile"
                />

                <HStack gap={3} w="100%" justify="space-between">
                    <Button
                        variant="outline"
                        size="md"
                        borderRadius="12px"
                        bg={isActive('tecnologia') ? '#3b82f6' : "#E2F2FE"}
                        color={isActive('tecnologia') ? 'white' : '#666B74'}
                        border="none"
                        px={3}
                        py={3}
                        h="auto"
                        flex="1"
                        onClick={() => handleFilterToggle('tecnologia')}
                        boxShadow={isActive('tecnologia')
                            ? "0 4px 16px rgba(59, 130, 246, 0.3)"
                            : "0 2px 8px rgba(0, 0, 0, 0.08)"
                        }
                    >
                        <VStack gap={1}>
                            <Icon
                                as={FiMonitor}
                                boxSize={4}
                                color={isActive('tecnologia') ? 'white' : '#666B74'}
                            />
                            <Text fontSize="xs" fontWeight="600" textAlign="center">
                                Tecnologia
                            </Text>
                        </VStack>
                    </Button>

                    <Button
                        variant="outline"
                        size="md"
                        borderRadius="12px"
                        bg={isActive('financeiro') ? '#3b82f6' : "#E2F2FE"}
                        color={isActive('financeiro') ? 'white' : '#666B74'}
                        border="none"
                        px={3}
                        py={3}
                        h="auto"
                        flex="1"
                        onClick={() => handleFilterToggle('financeiro')}
                        boxShadow={isActive('financeiro')
                            ? "0 4px 16px rgba(59, 130, 246, 0.3)"
                            : "0 2px 8px rgba(0, 0, 0, 0.08)"
                        }
                    >
                        <VStack gap={1}>
                            <FinanceIconMobile isActiveState={isActive('financeiro')} />
                            <Text fontSize="xs" fontWeight="600" textAlign="center">
                                Financeiro
                            </Text>
                        </VStack>
                    </Button>

                    <Button
                        variant="outline"
                        size="md"
                        borderRadius="12px"
                        bg={isActive('cloud') ? '#3b82f6' : "#E2F2FE"}
                        color={isActive('cloud') ? 'white' : '#666B74'}
                        border="none"
                        px={3}
                        py={3}
                        h="auto"
                        flex="1"
                        onClick={() => handleFilterToggle('cloud')}
                        boxShadow={isActive('cloud')
                            ? "0 4px 16px rgba(59, 130, 246, 0.3)"
                            : "0 2px 8px rgba(0, 0, 0, 0.08)"
                        }
                    >
                        <VStack gap={1}>
                            <Icon
                                as={FiCloud}
                                boxSize={4}
                                color={isActive('cloud') ? 'white' : '#666B74'}
                            />
                            <Text fontSize="xs" fontWeight="600" textAlign="center">
                                Cloud
                            </Text>
                        </VStack>
                    </Button>
                </HStack>
            </VStack>
        </Container>
    )
}
