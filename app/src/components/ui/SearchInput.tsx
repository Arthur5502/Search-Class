'use client';
import { FC } from 'react';
import {
    Box,
    Input,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { useAppStore } from '../../store/useAppStore';

interface SearchInputProps {
    placeholder?: string;
}

export const SearchInput: FC<SearchInputProps> = ({
    placeholder = "Procure por cursos"
}) => {
    const { filtros, updateFiltros } = useAppStore();

    const handleInputChange = (value: string) => {
        updateFiltros({ busca: value });
    };

    return (
        <Box
            w="100%"
            maxW={{ base: "400px", sm: "500px", md: "600px", lg: "700px" }}
            position="relative"
            px={{ base: 4, sm: 6, md: 8 }}
        >
            {/* Ícone posicionado absolutamente */}
            <Box
                position="absolute"
                left={{ base: "28px", sm: "34px", md: "40px" }}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                pointerEvents="none"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <FiSearch
                    size={20}
                    color="var(--chakra-colors-blue-400)"
                />
            </Box>

            <Input
                value={filtros.busca}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={placeholder}
                bg="white"
                border="2px"
                borderColor="blue.200"
                h={{ base: "50px", sm: "56px", md: "64px" }}
                pl={{ base: "50px", sm: "56px", md: "64px" }}
                pr={{ base: 4, sm: 5, md: 6 }}
                borderRadius={{ base: "25px", sm: "28px", md: "32px" }}
                fontSize={{ base: "md", sm: "lg", md: "lg" }}
                fontWeight="400"
                shadow="lg"
                w="100%"
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                    borderColor: 'blue.300',
                    shadow: 'xl',
                    transform: 'translateY(-1px)'
                }}
                _focus={{
                    borderColor: 'blue.400',
                    boxShadow: {
                        base: '0 0 0 3px rgba(66, 153, 225, 0.15)',
                        md: '0 0 0 4px rgba(66, 153, 225, 0.15)'
                    },
                    outline: 'none',
                    transform: 'translateY(-1px)'
                }}
                _placeholder={{
                    color: 'gray.500',
                    fontSize: { base: "sm", sm: "md", md: "lg" },
                    fontWeight: '400'
                }}
            />
        </Box>
    );
};
