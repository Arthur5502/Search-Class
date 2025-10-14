import { FC } from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';

interface DescricaoEventoProps {
    titulo: string;
    descricao: string[];
    data: string;
    local: string;
    realizacao: string;
}

export const DescricaoEvento: FC<DescricaoEventoProps> = ({
    titulo,
    descricao,
    data,
    local,
    realizacao
}) => (
    <VStack align="start" gap="4">
        <Heading 
            size={{ base: "xl", md: "2xl" }} 
            color="gray.900" 
            fontSize={{ base: "xl", md: "2xl" }}
        >
            Descrição do evento
        </Heading>
        <Heading 
            size={{ base: "md", md: "lg" }} 
            fontWeight="bold" 
            color="gray.900" 
            fontSize={{ base: "lg", md: "xl" }}
        >
            {titulo}
        </Heading>
        {descricao.map((paragrafo, index) => (
            <Text 
                key={index} 
                color="gray.700" 
                lineHeight="1.6" 
                fontSize={{ base: "sm", md: "md" }}
            >
                {paragrafo}
            </Text>
        ))}
        <VStack align="start" gap="1" pt="2">
            <Text fontWeight="bold" color="gray.900" fontSize={{ base: "sm", md: "md" }}>{data}</Text>
            <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>{local}</Text>
            <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>{realizacao}</Text>
        </VStack>
    </VStack>
);
