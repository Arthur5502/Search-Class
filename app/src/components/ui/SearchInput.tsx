// src/components/ui/SearchInput.tsx
'use client';
import { FC } from 'react';
import {
    InputGroup,
    Input,
    Box,
    Container,
    InputElement
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { useAppStore } from '../../store/useAppStore';

interface SearchInputProps {
    placeholder?: string;
}

export const SearchInput: FC<SearchInputProps> = ({
    placeholder = "Curso de front-end"
}) => {
    const { filtros, updateFiltros } = useAppStore();

    const handleInputChange = (value: string) => {
        updateFiltros({ busca: value });
    };

    return (
        <Container maxW="2xl" px={0}>
            <Box position="relative">
                <Box
                    position="absolute"
                    left="4"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={2}
                    color="gray.400"
                >
                    <FiSearch size={20} />
                </Box>
                <Input
                    value={filtros.busca}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={placeholder}
                    bg="white"
                    border="2px"
                    borderColor="gray.200"
                    size="lg"
                    h="56px"
                    pl="14"
                    pr="4"
                    borderRadius="16px"
                    fontSize="md"
                    fontWeight="medium"
                    shadow="sm"
                    _hover={{
                        borderColor: 'blue.300'
                    }}
                    _focus={{
                        borderColor: 'blue.500',
                        boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.1)'
                    }}
                    _placeholder={{
                        color: 'gray.400',
                        fontSize: 'md'
                    }}
                />
            </Box>
        </Container>
    );
};
