'use client';
import { FC } from 'react';
import {
    VStack,
    Heading,
    Text,
    Box,
} from '@chakra-ui/react';

export const PolicySection: FC = () => (
    <VStack align="start"gap={6}>
        <Heading
            size="xl"
            color="gray.900"
            fontSize="28px"
            fontWeight="600"
        >
            Política do Evento
        </Heading>
        
        <VStack align="start"gap={5}>
            <Box>
                <Text fontWeight="700" mb={3} color="gray.900" fontSize="16px">
                    Cancelamento de pedidos pagos
                </Text>
                <Text fontSize="16px" color="gray.700" lineHeight="1.7" mb={3}>
                    Cancelamentos de pedidos serão aceitos até 7 dias após a compra, desde que a
                    solicitação seja enviada até 48 horas antes do início do evento.
                </Text>
                <Text
                    fontSize="16px"
                    color="blue.500"
                    cursor="pointer"
                    textDecoration="underline"
                    _hover={{ color: 'blue.600' }}
                >
                    Saiba mais sobre o cancelamento
                </Text>
            </Box>

            <Box>
                <Text fontWeight="700" mb={3} color="gray.900" fontSize="16px">
                    Edição de participantes
                </Text>
                <Text fontSize="16px" color="gray.700" lineHeight="1.7" mb={3}>
                    Você poderá editar o participante de um ingresso apenas uma vez. Essa opção ficará
                    disponível até 24 horas antes do início do evento.
                </Text>
                <Text
                    fontSize="16px"
                    color="blue.500"
                    cursor="pointer"
                    textDecoration="underline"
                    _hover={{ color: 'blue.600' }}
                >
                    Saiba como editar participantes
                </Text>
            </Box>
        </VStack>
    </VStack>
);
