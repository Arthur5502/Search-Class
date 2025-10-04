import {
    Button,
    HStack,
    Text,
    Box,
    Icon,
    Portal,
    Image
} from '@chakra-ui/react'
import {
    MenuRoot,
    MenuTrigger,
    MenuContent,
    MenuItem,
    MenuPositioner
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import { estadosBrasil } from '../../../constants/estados'
import type { LocationSelectorProps } from './LocationSelector.types'

const LocationIcon = ({ isActiveState }: { isActiveState: boolean }) => (
    <Image
        src="/location.svg"
        alt="Localização"
        style={{
            filter: isActiveState
                ? 'brightness(0) saturate(100%) invert(45%) sepia(67%) saturate(1234%) hue-rotate(192deg) brightness(101%) contrast(97%)' // #298BF8
                : 'brightness(0) saturate(100%) invert(42%) sepia(8%) saturate(586%) hue-rotate(182deg) brightness(91%) contrast(88%)' // #666B74
        }}
    />
)

const DESIGN_TOKENS = {
    primaryColor: '#E2F2FE',
    primaryColorRgba: '59, 130, 246',
    textColor: '#666B74'
} as const

export const LocationSelector = ({
    selectedLocation,
    onLocationSelect,
    variant = 'desktop'
}: LocationSelectorProps) => {
    const isDesktop = variant === 'desktop'

    return (
        <MenuRoot
            positioning={{
                placement: isDesktop ? "bottom-start" : "bottom",
                gutter: 8,
                offset: { mainAxis: 4, crossAxis: 0 }
            }}
        >
            <MenuTrigger asChild>
                <Button
                    variant="outline"
                    size="lg"
                    borderRadius={isDesktop ? "10px" : "16px"}
                    bg={selectedLocation ? DESIGN_TOKENS.primaryColor : "#F3F3F3"}
                    color={selectedLocation ? '#298BF8' : DESIGN_TOKENS.textColor}
                    border="none"
                    px={isDesktop ? "15px" : 4}
                    py={isDesktop ? "11px" : 4}
                    h={isDesktop ? "48px" : "auto"}
                    minW={isDesktop ? "160px" : "100%"}
                    gap="16px"
                    justifyContent={isDesktop ? "center" : "space-between"}
                    boxShadow={selectedLocation
                        ? `0 8px 32px rgba(${DESIGN_TOKENS.primaryColorRgba}, 0.4)`
                        : "0 4px 20px rgba(0, 0, 0, 0.08)"
                    }
                    transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                    _hover={{
                        transform: "translateY(-2px)",
                        boxShadow: selectedLocation
                            ? `0 12px 40px rgba(${DESIGN_TOKENS.primaryColorRgba}, 0.5)`
                            : "0 8px 25px rgba(0, 0, 0, 0.15)"
                    }}
                    _active={{
                        transform: "translateY(0px)"
                    }}
                >
                    <HStack gap="16px" justify="center" align="center">
                        <LocationIcon isActiveState={!!selectedLocation} />
                        <Box textAlign={isDesktop ? "center" : "left"}>
                            <Text fontSize="sm" fontWeight="600" lineHeight="1.2">
                                {selectedLocation ? selectedLocation.nome : 'Localização'}
                            </Text>
                            {selectedLocation && isDesktop && (
                                <Text fontSize="xs" opacity={0.9} lineHeight="1.2">
                                    {selectedLocation.sigla} • {selectedLocation.regiao}
                                </Text>
                            )}
                        </Box>
                        <Icon
                            as={FiChevronDown}
                            boxSize={4}
                            color={selectedLocation ? '#298BF8' : DESIGN_TOKENS.textColor}
                            transition="transform 0.2s"
                        />
                    </HStack>
                </Button>
            </MenuTrigger>

            <Portal>
                <MenuPositioner>
                    <MenuContent
                        maxH={isDesktop ? "300px" : "250px"}
                        overflowY="auto"
                        zIndex={1000}
                        borderRadius={isDesktop ? "16px" : "12px"}
                        border={isDesktop ? "2px" : "1px"}
                        borderColor="gray.100"
                        boxShadow="0 20px 60px rgba(0, 0, 0, 0.15)"
                        bg="white"
                        backdropFilter="blur(10px)"
                        minW={isDesktop ? "280px" : "100%"}
                    >
                        {selectedLocation && (
                            <MenuItem
                                value="clear"
                                onClick={() => onLocationSelect(null)}
                                fontWeight="600"
                                color="red.500"
                                bg="red.50"
                                borderRadius={isDesktop ? "12px" : "8px"}
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
                                onClick={() => onLocationSelect(estado)}
                                bg={selectedLocation?.id === estado.id ? 'blue.50' : 'transparent'}
                                borderRadius={isDesktop ? "12px" : "8px"}
                                m={2}
                                p={isDesktop ? 3 : 2}
                                transition="all 0.2s"
                                _hover={{
                                    bg: 'blue.100',
                                    transform: "scale(1.02)"
                                }}
                            >
                                <Box>
                                    <Text
                                        fontWeight={isDesktop ? "600" : "500"}
                                        color="gray.800"
                                        fontSize={isDesktop ? "md" : "sm"}
                                    >
                                        {estado.nome}
                                    </Text>
                                    <Text
                                        fontSize="xs"
                                        color="blue.600"
                                        fontWeight="500"
                                    >
                                        {estado.sigla} • {isDesktop ? `Região ${estado.regiao}` : estado.regiao}
                                    </Text>
                                </Box>
                            </MenuItem>
                        ))}
                    </MenuContent>
                </MenuPositioner>
            </Portal>
        </MenuRoot>
    )
}
