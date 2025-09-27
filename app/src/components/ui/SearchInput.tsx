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
    placeholder = "Procure por cursos"
}) => {
    const { filtros, updateFiltros } = useAppStore();

    const handleInputChange = (value: string) => {
        updateFiltros({ busca: value });
    };

    return (
        <Container maxW="3xl" px={0}>
            <Box position="relative">
                <Box
                    position="absolute"
                    left="5"
                    top="50%"
                    transform="translateY(-50%)"
                    zIndex={2}
                    color="blue.400"
                >
                    <FiSearch size={22} />
                </Box>
                <Input
                    value={filtros.busca}
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder={placeholder}
                    bg="white"
                    border="2px"
                    borderColor="blue.200"
                    size="lg"
                    h="64px"
                    pl="16"
                    pr="6"
                    borderRadius="32px"
                    fontSize="lg"
                    fontWeight="400"
                    shadow="lg"
                    _hover={{
                        borderColor: 'blue.300',
                        shadow: 'xl'
                    }}
                    _focus={{
                        borderColor: 'blue.400',
                        boxShadow: '0 0 0 4px rgba(66, 153, 225, 0.15)',
                        outline: 'none'
                    }}
                    _placeholder={{
                        color: 'gray.500',
                        fontSize: 'lg',
                        fontWeight: '400'
                    }}
                />
            </Box>
        </Container>
    );
};
