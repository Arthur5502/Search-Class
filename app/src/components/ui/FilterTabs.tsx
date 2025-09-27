'use client';
import { FC } from 'react';
import { Button, HStack, Container } from '@chakra-ui/react';
import { FiMapPin, FiDollarSign } from 'react-icons/fi';

export const FilterTabs: FC = () => {
    return (
        <Container maxW="4xl" px={0}>
            <HStack gap={4} justify="center" flexWrap="wrap">
                <Button
                    variant="outline"
                    size="sm"
                    borderRadius="full"
                    bg="white"
                    border="1px"
                    borderColor="gray.300"
                >
                    <FiMapPin size={14} style={{ marginRight: '6px' }} />
                    Localização
                </Button>

                <Button
                    variant="solid"
                    colorScheme="blue"
                    size="sm"
                    borderRadius="full"
                >
                    <FiDollarSign size={14} style={{ marginRight: '6px' }} />
                    Gratuito
                </Button>

                <Button
                    variant="solid"
                    colorScheme="blue"
                    size="sm"
                    borderRadius="full"
                >
                    Inscrições abertas
                </Button>

                <Button
                    variant="outline"
                    size="sm"
                    borderRadius="full"
                    bg="white"
                    border="1px"
                    borderColor="gray.300"
                >
                    Online
                </Button>
            </HStack>
        </Container>
    );
};
