import { FC } from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import { PoliticaEventoItem } from './PoliticaEventoItem';

export const PoliticaEvento: FC = () => (
    <VStack align="start" gap="4">
        <Heading 
            size={{ base: "lg", md: "xl" }} 
            color="gray.900" 
            fontSize={{ base: "xl", md: "2xl" }}
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
