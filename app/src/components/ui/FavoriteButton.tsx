'use client';
import { FC } from 'react';
import { IconButton } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
import { useAppStore } from '../../store/useAppStore';

interface FavoriteButtonProps {
    programaId: string | number;
    variant?: 'card' | 'hero';
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({ 
    programaId,
    variant = 'card'
}) => {
    const favoritos = useAppStore((state) => state.favoritos);
    const toggleFavorito = useAppStore((state) => state.toggleFavorito);
    const isFavorito = favoritos.includes(String(programaId));

    if (variant === 'hero') {
        return (
            <IconButton
                aria-label={isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                variant="outline"
                colorScheme="whiteAlpha"
                borderColor="whiteAlpha.400"
                color="white"
                bg={isFavorito ? 'red.500' : 'whiteAlpha.200'}
                backdropFilter="blur(8px)"
                _hover={{
                    bg: isFavorito ? 'red.600' : 'whiteAlpha.300',
                    borderColor: 'whiteAlpha.600',
                }}
                h="48px"
                w="48px"
                borderRadius="8px"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorito(String(programaId));
                }}
            >
                <FiHeart
                    size={24}
                    fill={isFavorito ? 'white' : 'none'}
                />
            </IconButton>
        );
    }

    return (
        <IconButton
            aria-label={isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            size="sm"
            borderRadius="full"
            bg={isFavorito ? 'red.500' : 'white'}
            color={isFavorito ? 'white' : 'gray.700'}
            boxShadow="lg"
            _hover={{
                bg: isFavorito ? 'red.600' : 'gray.100',
                transform: 'scale(1.1)',
            }}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorito(String(programaId));
            }}
        >
            <FiHeart
                size={16}
                fill={isFavorito ? 'white' : 'none'}
            />
        </IconButton>
    );
};

