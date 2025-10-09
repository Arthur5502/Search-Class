'use client';
import { FC } from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

export const EmptyState: FC = () => {
    return (
        <VStack
            gap={6}
            py={20}
            align="center"
            justify="center"
            minH="60vh"
        >
            <Box position="relative">
                <FiHeart
                    size={80}
                    color="#D1D5DB"
                    strokeWidth={1.5}
                />
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%) rotate(45deg)"
                    w="100px"
                    h="2px"
                    bg="gray.400"
                />
            </Box>

            <VStack gap={2}>
                <Text
                    fontSize="xl"
                    color="gray.700"
                    fontWeight="500"
                    textAlign="center"
                >
                    Você ainda não tem nenhum curso favorito
                </Text>
                <Text
                    fontSize="sm"
                    color="gray.500"
                    textAlign="center"
                >
                    Basta clicar em favorito em cada curso para ele aparecer aqui
                </Text>
            </VStack>
        </VStack>
    );
};

