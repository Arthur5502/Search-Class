import { FC } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import { PoliticaEventoItem } from './PoliticaEventoItem';

export const PoliticaEvento: FC = () => (
    <VStack align="start" gap={{ base: "16px", md: "20px", lg: "24px" }}>
        <Heading
            size={{ base: "lg", md: "xl" }}
            color="gray.900"
            fontSize={{ base: "24px", md: "28px", lg: "32px" }}
            fontFamily="Poppins, sans-serif"
            fontWeight="600"
        >
            Política do Evento
        </Heading>
        <PoliticaEventoItem
            titulo="Cancelamento de pedidos pagos"
            descricao="Cancelamentos de pedidos serão aceitos até 7 dias após a compra, desde que a solicitação seja enviada até 48 horas antes do início do evento."
            linkTexto="Saiba mais sobre o cancelamento"
        />
        <PoliticaEventoItem
            titulo="Edição de participantes"
            descricao="Você poderá editar o participante de um ingresso apenas uma vez. Essa opção ficará disponível até 24 horas antes do início do evento."
            linkTexto="Saiba como editar participantes"
        />
    </VStack>
);
