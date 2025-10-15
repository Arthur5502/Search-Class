'use client';
import { FC } from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';

export const EmptyState: FC = () => {
    return (
        <VStack
            gap={8}
            align="center"
            justify="center"
        >
            <Box position="relative">
                <FiHeart
                    size={120}
                    color="#D1D5DB"
                    strokeWidth={1.5}
                />
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%) rotate(45deg)"
                    w="140px"
                    h="3px"
                    bg="gray.400"
                />
            </Box>

            <VStack gap={3}>
                <Text
                    fontSize="2xl"
                    color="gray.700"
                    fontWeight="600"
                    textAlign="center"
                >
                    Você ainda não tem nenhum curso favorito
                </Text>
                <Text
                    fontSize="md"
                    color="gray.500"
                    textAlign="center"
                >
                    Basta clicar em favorito em cada curso para ele aparecer aqui
                </Text>
            </VStack>
        </VStack>
    );
};

