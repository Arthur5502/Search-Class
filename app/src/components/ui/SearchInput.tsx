'use client';
import { FC, useState } from 'react';
import { Box, Input } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { useAppStore } from '../../store/useAppStore';

interface SearchInputProps {
  placeholder?: string;
}

export const SearchInput: FC<SearchInputProps> = ({
  placeholder = "Buscar cursos"
}) => {
  const { filtros, updateFiltros } = useAppStore();
  const [iconColor, setIconColor] = useState('#656a72');

  const handleFocus = () => setIconColor('#298bf8');
  const handleBlur = () => setIconColor('#656a72');

  return (
    <Box
      w="100%"
      maxW={{ base: "400px", sm: "500px", md: "600px", lg: "700px" }}
      position="relative"
      px={{ base: 4, sm: 6, md: 8 }}
    >
      <Box
        position="absolute"
        left={{ base: "28px", sm: "34px", md: "40px" }}
        top="50%"
        padding={4}
        transform="translateY(-50%)"
        zIndex={2}
        pointerEvents="none"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <FiSearch size={20}
        color={iconColor} />
      </Box>

      <Input
        value={filtros.busca}
        onChange={(e) => updateFiltros({ busca: e.target.value })}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        bg="white"
        borderColor="E4E5E6"
        h={{ base: "50px", sm: "56px", md: "64px" }}
        pl={{ base: "50px", sm: "56px", md: "64px" }}
        pr={{ base: 4, sm: 5, md: 6 }}
        borderRadius={{ base: "18px", sm: "18px", md: "18px" }}
        fontSize={{ base: "md", sm: "lg", md: "lg" }}
        fontWeight="400"
        w="100%"
        shadow="sm"
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        _focus={{
          borderColor: 'blue.400',
          outline: 'none',
          transform: 'translateY(-1px)',
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
