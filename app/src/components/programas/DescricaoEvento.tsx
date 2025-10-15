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
    <VStack align="start" gap={0}>
        <Heading
            size={{ base: "xl", md: "2xl" }}
            color="#000000"
            fontSize={{ base: "34px", md: "38px", lg: "42px" }}
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            mb={{ base: "32px", md: "40px", lg: "48px" }}
        >
            Descrição do evento
        </Heading>
        <VStack align="start" gap={{ base: "16px", md: "20px", lg: "24px" }}>
            <Heading
                size={{ base: "md", md: "lg" }}
                fontWeight="600"
                color="gray.900"
                fontSize={{ base: "18px", md: "20px", lg: "24px" }}
                fontFamily="Poppins, sans-serif"
            >
                {titulo}
            </Heading>
            {descricao.map((paragrafo, index) => (
                <Text
                    key={index}
                    color="gray.700"
                    lineHeight="1.6"
                    fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                    fontFamily="Poppins, sans-serif"
                    fontWeight="400"
                >
                    {paragrafo}
                </Text>
            ))}
            <VStack align="start" gap="8px" pt="16px">
                <Text
                    fontWeight="600"
                    color="gray.900"
                    fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                    fontFamily="Poppins, sans-serif"
                >
                    {data}
                </Text>
                <Text
                    color="gray.600"
                    fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                    fontFamily="Poppins, sans-serif"
                    fontWeight="400"
                >
                    {local}
                </Text>
                <Text
                    color="gray.600"
                    fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                    fontFamily="Poppins, sans-serif"
                    fontWeight="400"
                >
                    {realizacao}
                </Text>
            </VStack>
        </VStack>
    </VStack>
);