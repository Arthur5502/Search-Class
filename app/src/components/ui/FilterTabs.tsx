'use client';
import { FC, useState } from 'react';
import {
    Button,
    HStack,
    Container,
    Icon,
    Text,
    Image,
    Box
} from '@chakra-ui/react';
import {
    MenuRoot,
    MenuTrigger,
    MenuContent,
    MenuItem
} from '@chakra-ui/react';
import { FiMapPin, FiCloud, FiMonitor, FiChevronDown } from 'react-icons/fi';
import { estadosBrasil, type Estado } from '../../constants/estados';

type FilterType = 'financeiro' | 'cloud' | 'tecnologia' | null;

export const FilterTabs: FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterType>(null);
    const [selectedLocation, setSelectedLocation] = useState<Estado | null>(null);

    const handleFilterClick = (filter: FilterType) => {
        setActiveFilter(activeFilter === filter ? null : filter);
    };

    const handleLocationSelect = (estado: Estado) => {
        setSelectedLocation(selectedLocation?.id === estado.id ? null : estado);
    };

    const isActive = (filter: FilterType) => activeFilter === filter;

    return (
        <Container maxW="6xl" px={0} mt={8}>
            <HStack gap={4} justify="center" flexWrap="wrap">
                {/* Localização - Menu Dropdown com design premium */}
                <MenuRoot>
                    <MenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="lg"
                            borderRadius="20px"
                            bg={selectedLocation ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : "white"}
                            color={selectedLocation ? 'white' : 'gray.700'}
                            border="2px"
                            borderColor={selectedLocation ? 'transparent' : 'gray.200'}
                            px={8}
                            py={4}
                            h="auto"
                            minW="160px"
                            boxShadow={selectedLocation ? "0 8px 32px rgba(102, 126, 234, 0.4)" : "0 4px 20px rgba(0, 0, 0, 0.08)"}
                            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                            _hover={{
                                transform: "translateY(-2px)",
                                boxShadow: selectedLocation
                                    ? "0 12px 40px rgba(102, 126, 234, 0.5)"
                                    : "0 8px 25px rgba(0, 0, 0, 0.15)",
                                borderColor: selectedLocation ? 'transparent' : 'blue.300'
                            }}
                            _active={{
                                transform: "translateY(0px)"
                            }}
                        >
                            <HStack gap={3}>
                                <Icon
                                    as={FiMapPin}
                                    boxSize={5}
                                    color={selectedLocation ? 'white' : 'blue.500'}
                                />
                                <Box textAlign="left">
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
                                    color={selectedLocation ? 'white' : 'gray.400'}
                                    transition="transform 0.2s"
                                />
                            </HStack>
                        </Button>
                    </MenuTrigger>
                    <MenuContent
                        maxH="300px"
                        overflowY="auto"
                        zIndex={10}
                        borderRadius="16px"
                        border="2px"
                        borderColor="gray.100"
                        boxShadow="0 20px 60px rgba(0, 0, 0, 0.15)"
                        bg="white"
                        backdropFilter="blur(10px)"
                    >
                        {selectedLocation && (
                            <MenuItem
                                value="clear"
                                onClick={() => setSelectedLocation(null)}
                                fontWeight="600"
                                color="red.500"
                                bg="red.50"
                                borderRadius="12px"
                                m={2}
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
                                m={2}
                                p={3}
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

                {/* Filtro Financeiro - Design Premium */}
                <Button
                    variant={isActive('financeiro') ? 'solid' : 'outline'}
                    bg={isActive('financeiro')
                        ? "linear-gradient(135deg, #a855f7 0%, #8b5cf6 100%)"
                        : "white"}
                    color={isActive('financeiro') ? 'white' : 'gray.700'}
                    size="lg"
                    borderRadius="20px"
                    border="2px"
                    borderColor={isActive('financeiro') ? 'transparent' : 'gray.200'}
                    px={8}
                    py={4}
                    h="auto"
                    minW="140px"
                    boxShadow={isActive('financeiro')
                        ? "0 8px 32px rgba(168, 85, 247, 0.4)"
                        : "0 4px 20px rgba(0, 0, 0, 0.08)"}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    onClick={() => handleFilterClick('financeiro')}
                    _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: isActive('financeiro')
                            ? "0 12px 40px rgba(168, 85, 247, 0.5)"
                            : "0 8px 25px rgba(0, 0, 0, 0.15)",
                        borderColor: isActive('financeiro') ? 'transparent' : 'purple.300'
                    }}
                    _active={{
                        transform: "translateY(0px)"
                    }}
                >
                    <HStack gap={3}>
                        <Image
                            src="/coin-icon.png"
                            alt="Coin"
                            boxSize={5}
                            filter={isActive('financeiro') ? "brightness(0) invert(1)" : "none"}
                            transition="filter 0.2s"
                        />
                        <Text fontSize="sm" fontWeight="600">
                            Financeiro
                        </Text>
                    </HStack>
                </Button>

                {/* Filtro Cloud - Design Premium */}
                <Button
                    variant={isActive('cloud') ? 'solid' : 'outline'}
                    bg={isActive('cloud')
                        ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                        : "white"}
                    color={isActive('cloud') ? 'white' : 'blue.600'}
                    size="lg"
                    borderRadius="20px"
                    border="2px"
                    borderColor={isActive('cloud') ? 'transparent' : 'blue.200'}
                    px={8}
                    py={4}
                    h="auto"
                    minW="180px"
                    boxShadow={isActive('cloud')
                        ? "0 8px 32px rgba(59, 130, 246, 0.4)"
                        : "0 4px 20px rgba(0, 0, 0, 0.08)"}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    onClick={() => handleFilterClick('cloud')}
                    _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: isActive('cloud')
                            ? "0 12px 40px rgba(59, 130, 246, 0.5)"
                            : "0 8px 25px rgba(0, 0, 0, 0.15)",
                        bg: isActive('cloud')
                            ? "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)"
                            : "blue.50"
                    }}
                    _active={{
                        transform: "translateY(0px)"
                    }}
                >
                    <HStack gap={3}>
                        <Icon as={FiCloud} boxSize={5} />
                        <Text fontSize="sm" fontWeight="600">
                            Arquitetura em Cloud
                        </Text>
                    </HStack>
                </Button>

                {/* Filtro Tecnologia - Design Premium */}
                <Button
                    variant={isActive('tecnologia') ? 'solid' : 'outline'}
                    bg={isActive('tecnologia')
                        ? "linear-gradient(135deg, #10b981 0%, #059669 100%)"
                        : "white"}
                    color={isActive('tecnologia') ? 'white' : 'gray.700'}
                    size="lg"
                    borderRadius="20px"
                    border="2px"
                    borderColor={isActive('tecnologia') ? 'transparent' : 'gray.200'}
                    px={8}
                    py={4}
                    h="auto"
                    minW="140px"
                    boxShadow={isActive('tecnologia')
                        ? "0 8px 32px rgba(16, 185, 129, 0.4)"
                        : "0 4px 20px rgba(0, 0, 0, 0.08)"}
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    onClick={() => handleFilterClick('tecnologia')}
                    _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: isActive('tecnologia')
                            ? "0 12px 40px rgba(16, 185, 129, 0.5)"
                            : "0 8px 25px rgba(0, 0, 0, 0.15)",
                        borderColor: isActive('tecnologia') ? 'transparent' : 'green.300'
                    }}
                    _active={{
                        transform: "translateY(0px)"
                    }}
                >
                    <HStack gap={3}>
                        <Icon as={FiMonitor} boxSize={5} />
                        <Text fontSize="sm" fontWeight="600">
                            Tecnologia
                        </Text>
                    </HStack>
                </Button>
            </HStack>
        </Container>
    );
};
