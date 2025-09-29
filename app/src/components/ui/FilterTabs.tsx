'use client';
import { FC, useState } from 'react';
import {
    Button,
    HStack,
    Icon,
    Text,
    Box,
    VStack,
} from '@chakra-ui/react';
import {
    MenuRoot,
    MenuTrigger,
    MenuContent,
    MenuItem
} from '@chakra-ui/react';
import { FiMapPin, FiCloud, FiMonitor, FiChevronDown } from 'react-icons/fi';
import { estadosBrasil, type Estado } from '../../constants/estados';

type FilterType = 'financeiro' | 'cloud' | 'tecnologia';

export const FilterTabs: FC = () => {
    // Cores padronizadas
    const primaryColor = '#3b82f6';
    const primaryColorRgba = '59, 130, 246';
    const textColor = '#666B74';

    const [activeFilters, setActiveFilters] = useState<FilterType[]>([]);
    const [selectedLocation, setSelectedLocation] = useState<Estado | null>(null);

    const handleFilterToggle = (filter: FilterType) => {
        setActiveFilters(prevFilters => {
            if (prevFilters.includes(filter)) {
                return prevFilters.filter(f => f !== filter);
            } else {
                return [...prevFilters, filter];
            }
        });
    };

    const handleLocationSelect = (estado: Estado) => {
        setSelectedLocation(selectedLocation?.id === estado.id ? null : estado);
    };

    const isActive = (filter: FilterType) => activeFilters.includes(filter);

    return (
        <Box w="100%" px={{ base: 4, sm: 6, md: 8 }}>
            {/* Desktop e Tablet - Layout Horizontal CENTRALIZADO */}
            <Box
                display={{ base: 'none', md: 'flex' }}
                justifyContent="center"
                alignItems="center"
                w="100%"
            >
                <HStack
                    gap={{ md: 6, lg: 8 }}
                    justify="center"
                    align="center"
                    flexWrap="nowrap"
                >
                    {/* Localização - Menu Dropdown */}
                    <MenuRoot>
                        <MenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="lg"
                                borderRadius="20px"
                                bg={selectedLocation ? primaryColor : "white"}
                                color={selectedLocation ? 'white' : textColor}
                                border="2px"
                                borderColor={selectedLocation ? primaryColor : 'gray.200'}
                                px={8}
                                py={4}
                                h="auto"
                                minW="160px"
                                boxShadow={selectedLocation ? `0 8px 32px rgba(${primaryColorRgba}, 0.4)` : "0 4px 20px rgba(0, 0, 0, 0.08)"}
                                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                                _hover={{
                                    transform: "translateY(-2px)",
                                    boxShadow: selectedLocation
                                        ? `0 12px 40px rgba(${primaryColorRgba}, 0.5)`
                                        : "0 8px 25px rgba(0, 0, 0, 0.15)",
                                    borderColor: selectedLocation ? primaryColor : 'blue.300'
                                }}
                                _active={{
                                    transform: "translateY(0px)"
                                }}
                            >
                                <HStack gap={3} justify="center" align="center">
                                    <Icon
                                        as={FiMapPin}
                                        boxSize={5}
                                        color={selectedLocation ? 'white' : textColor}
                                    />
                                    <Box textAlign="center">
                                        <Text fontSize="sm" fontWeight="600" lineHeight="1.2">
                                            {selectedLocation ? selectedLocation.nome : 'Localização'}
                                        </Text>
                                        {selectedLocation && (
                                            <Text fontSize="xs" opacity={0.9} lineHeight="1.2">
                                                {selectedLocation.sigla} • {selectedLocation.regiao}
                                            </Text>
                                        )}
                                    </Box>
                                    <Icon
                                        as={FiChevronDown}
                                        boxSize={4}
                                        color={selectedLocation ? 'white' : textColor}
                                        transition="transform 0.2s"
                                    />
                                </HStack>
                            </Button>
                        </MenuTrigger>

                        <MenuContent
                            maxH="300px"
                            overflowY="auto"
                            zIndex={1000}
                            borderRadius="16px"
                            border="2px"
                            borderColor="gray.100"
                            boxShadow="0 20px 60px rgba(0, 0, 0, 0.15)"
                            bg="white"
                            backdropFilter="blur(10px)"
                            minW="280px"
                            w="auto"
                            position="absolute"
                            top="100%"
                            left="50%"
                            transform="translateX(-50%)"
                            mt={2}
                        >
                            {selectedLocation && (
                                <MenuItem
                                    value="clear"
                                    onClick={() => setSelectedLocation(null)}
                                    fontWeight="600"
                                    color="red.500"
                                    bg="red.50"
                                    borderRadius="12px"
                                    mx={2}
                                    my={1}
                                    px={3}
                                    py={2}
                                    _hover={{
                                        bg: "red.100",
                                        transform: "scale(1.02)"
                                    }}
                                    transition="all 0.2s"
                                >
                                    ✕ Limpar seleção
                                </MenuItem>
                            )}
                            {estadosBrasil.map((estado) => (
                                <MenuItem
                                    key={estado.id}
                                    value={estado.id}
                                    onClick={() => handleLocationSelect(estado)}
                                    bg={selectedLocation?.id === estado.id ? 'blue.50' : 'transparent'}
                                    borderRadius="12px"
                                    mx={2}
                                    my={1}
                                    px={3}
                                    py={2}
                                    transition="all 0.2s"
                                    _hover={{
                                        bg: 'blue.100',
                                        transform: "scale(1.02)"
                                    }}
                                >
                                    <Box>
                                        <Text fontWeight="600" color="gray.800">{estado.nome}</Text>
                                        <Text fontSize="xs" color="blue.600" fontWeight="500">
                                            {estado.sigla} • Região {estado.regiao}
                                        </Text>
                                    </Box>
                                </MenuItem>
                            ))}
                        </MenuContent>
                    </MenuRoot>

                    {/* Filtro Tecnologia */}
                    <Button
                        variant="outline"
                        size="lg"
                        borderRadius="20px"
                        bg={isActive('tecnologia') ? primaryColor : "white"}
                        color={isActive('tecnologia') ? 'white' : textColor}
                        border="2px"
                        borderColor={isActive('tecnologia') ? primaryColor : 'gray.200'}
                        px={8}
                        py={4}
                        h="auto"
                        minW="140px"
                        boxShadow={isActive('tecnologia')
                            ? `0 8px 32px rgba(${primaryColorRgba}, 0.4)`
                            : "0 4px 20px rgba(0, 0, 0, 0.08)"}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        onClick={() => handleFilterToggle('tecnologia')}
                        _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: isActive('tecnologia')
                                ? `0 12px 40px rgba(${primaryColorRgba}, 0.5)`
                                : "0 8px 25px rgba(0, 0, 0, 0.15)",
                            borderColor: isActive('tecnologia') ? primaryColor : 'blue.300'
                        }}
                        _active={{
                            transform: "translateY(0px)"
                        }}
                    >
                        <HStack gap={3} justify="center" align="center">
                            <Icon
                                as={FiMonitor}
                                boxSize={5}
                                color={isActive('tecnologia') ? 'white' : textColor}
                            />
                            <Text fontSize="sm" fontWeight="600">
                                Tecnologia
                            </Text>
                        </HStack>
                    </Button>

                    {/* Filtro Financeiro */}
                    <Button
                        variant="outline"
                        size="lg"
                        borderRadius="20px"
                        bg={isActive('financeiro') ? primaryColor : "white"}
                        color={isActive('financeiro') ? 'white' : textColor}
                        border="2px"
                        borderColor={isActive('financeiro') ? primaryColor : 'gray.200'}
                        px={8}
                        py={4}
                        h="auto"
                        minW="140px"
                        boxShadow={isActive('financeiro')
                            ? `0 8px 32px rgba(${primaryColorRgba}, 0.4)`
                            : "0 4px 20px rgba(0, 0, 0, 0.08)"}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        onClick={() => handleFilterToggle('financeiro')}
                        _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: isActive('financeiro')
                                ? `0 12px 40px rgba(${primaryColorRgba}, 0.5)`
                                : "0 8px 25px rgba(0, 0, 0, 0.15)",
                            borderColor: isActive('financeiro') ? primaryColor : 'blue.300'
                        }}
                        _active={{
                            transform: "translateY(0px)"
                        }}
                    >
                        <HStack gap={3} justify="center" align="center">
                            <Box
                                w={5}
                                h={5}
                                bg={isActive('financeiro') ? 'white' : textColor}
                                borderRadius="full"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text
                                    fontSize="xs"
                                    fontWeight="bold"
                                    color={isActive('financeiro') ? textColor : 'white'}
                                >
                                    ©
                                </Text>
                            </Box>
                            <Text fontSize="sm" fontWeight="600">
                                Financeiro
                            </Text>
                        </HStack>
                    </Button>

                    {/* Filtro Cloud */}
                    <Button
                        variant="outline"
                        size="lg"
                        borderRadius="20px"
                        bg={isActive('cloud') ? primaryColor : "white"}
                        color={isActive('cloud') ? 'white' : textColor}
                        border="2px"
                        borderColor={isActive('cloud') ? primaryColor : 'gray.200'}
                        px={8}
                        py={4}
                        h="auto"
                        minW="180px"
                        boxShadow={isActive('cloud')
                            ? `0 8px 32px rgba(${primaryColorRgba}, 0.4)`
                            : "0 4px 20px rgba(0, 0, 0, 0.08)"}
                        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                        onClick={() => handleFilterToggle('cloud')}
                        _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: isActive('cloud')
                                ? `0 12px 40px rgba(${primaryColorRgba}, 0.5)`
                                : "0 8px 25px rgba(0, 0, 0, 0.15)",
                            bg: isActive('cloud')
                                ? primaryColor
                                : "blue.50"
                        }}
                        _active={{
                            transform: "translateY(0px)"
                        }}
                    >
                        <HStack gap={3} justify="center" align="center">
                            <Icon
                                as={FiCloud}
                                boxSize={5}
                                color={isActive('cloud') ? 'white' : textColor}
                            />
                            <Text fontSize="sm" fontWeight="600">
                                Arquitetura em Cloud
                            </Text>
                        </HStack>
                    </Button>
                </HStack>
            </Box>

            {/* Mobile - Layout Vertical CENTRALIZADO */}
            <VStack
                gap={4}
                display={{ base: 'flex', md: 'none' }}
                w="100%"
                align="center"
                maxW="400px"
                mx="auto"
            >
                {/* Localização Mobile */}
                <MenuRoot>
                    <MenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="lg"
                            borderRadius="16px"
                            bg={selectedLocation ? primaryColor : "white"}
                            color={selectedLocation ? 'white' : textColor}
                            border="2px"
                            borderColor={selectedLocation ? primaryColor : 'gray.200'}
                            px={4}
                            py={4}
                            h="auto"
                            w="100%"
                            justifyContent="space-between"
                            boxShadow={selectedLocation ? `0 4px 16px rgba(${primaryColorRgba}, 0.3)` : "0 2px 8px rgba(0, 0, 0, 0.08)"}
                        >
                            <HStack gap={3}>
                                <Icon as={FiMapPin} boxSize={5} color={selectedLocation ? 'white' : textColor} />
                                <Text fontSize="sm" fontWeight="600">
                                    {selectedLocation ? selectedLocation.nome : 'Localização'}
                                </Text>
                            </HStack>
                            <Icon as={FiChevronDown} boxSize={4} color={selectedLocation ? 'white' : textColor} />
                        </Button>
                    </MenuTrigger>

                    <MenuContent
                        maxH="250px"
                        overflowY="auto"
                        zIndex={1000}
                        borderRadius="12px"
                        border="1px"
                        borderColor="gray.200"
                        boxShadow="0 10px 40px rgba(0, 0, 0, 0.1)"
                        bg="white"
                        w="100%"
                        position="absolute"
                        top="100%"
                        left="50%"
                        transform="translateX(-50%)"
                        mt={2}
                    >
                        {selectedLocation && (
                            <MenuItem
                                value="clear"
                                onClick={() => setSelectedLocation(null)}
                                fontWeight="600"
                                color="red.500"
                                bg="red.50"
                                mx={2}
                                my={1}
                                px={3}
                                py={2}
                                borderRadius="8px"
                            >
                                ✕ Limpar seleção
                            </MenuItem>
                        )}
                        {estadosBrasil.map((estado) => (
                            <MenuItem
                                key={estado.id}
                                value={estado.id}
                                onClick={() => handleLocationSelect(estado)}
                                bg={selectedLocation?.id === estado.id ? 'blue.50' : 'transparent'}
                                mx={2}
                                my={1}
                                px={3}
                                py={2}
                                borderRadius="8px"
                            >
                                <Box>
                                    <Text fontWeight="500" color="gray.800" fontSize="sm">{estado.nome}</Text>
                                    <Text fontSize="xs" color="blue.600">{estado.sigla} • {estado.regiao}</Text>
                                </Box>
                            </MenuItem>
                        ))}
                    </MenuContent>
                </MenuRoot>

                {/* Filtros Mobile - Grid 3 colunas equalizada */}
                <HStack gap={3} w="100%" justify="space-between">
                    <Button
                        variant="outline"
                        size="md"
                        borderRadius="12px"
                        bg={isActive('tecnologia') ? primaryColor : "white"}
                        color={isActive('tecnologia') ? 'white' : textColor}
                        border="2px"
                        borderColor={isActive('tecnologia') ? primaryColor : 'gray.200'}
                        px={3}
                        py={3}
                        h="auto"
                        flex="1"
                        onClick={() => handleFilterToggle('tecnologia')}
                    >
                        <VStack gap={1}>
                            <Icon as={FiMonitor} boxSize={4} color={isActive('tecnologia') ? 'white' : textColor} />
                            <Text fontSize="xs" fontWeight="600" textAlign="center">
                                Tecnologia
                            </Text>
                        </VStack>
                    </Button>

                    <Button
                        variant="outline"
                        size="md"
                        borderRadius="12px"
                        bg={isActive('financeiro') ? primaryColor : "white"}
                        color={isActive('financeiro') ? 'white' : textColor}
                        border="2px"
                        borderColor={isActive('financeiro') ? primaryColor : 'gray.200'}
                        px={3}
                        py={3}
                        h="auto"
                        flex="1"
                        onClick={() => handleFilterToggle('financeiro')}
                    >
                        <VStack gap={1}>
                            <Box w={4} h={4} bg={isActive('financeiro') ? 'white' : textColor} borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                                <Text fontSize="10px" fontWeight="bold" color={isActive('financeiro') ? textColor : 'white'}>©</Text>
                            </Box>
                            <Text fontSize="xs" fontWeight="600" textAlign="center">
                                Financeiro
                            </Text>
                        </VStack>
                    </Button>

                    <Button
                        variant="outline"
                        size="md"
                        borderRadius="12px"
                        bg={isActive('cloud') ? primaryColor : "white"}
                        color={isActive('cloud') ? 'white' : textColor}
                        border="2px"
                        borderColor={isActive('cloud') ? primaryColor : 'gray.200'}
                        px={3}
                        py={3}
                        h="auto"
                        flex="1"
                        onClick={() => handleFilterToggle('cloud')}
                    >
                        <VStack gap={1}>
                            <Icon as={FiCloud} boxSize={4} color={isActive('cloud') ? 'white' : textColor} />
                            <Text fontSize="xs" fontWeight="600" textAlign="center">
                                Cloud
                            </Text>
                        </VStack>
                    </Button>
                </HStack>
            </VStack>
        </Box>
    );
};
