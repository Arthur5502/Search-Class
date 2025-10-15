import { FC } from 'react';
import { Box, Text } from '@chakra-ui/react';

interface PoliticaEventoItemProps {
    titulo: string;
    descricao: string;
    linkTexto: string;
}

export const PoliticaEventoItem: FC<PoliticaEventoItemProps> = ({
    titulo,
    descricao,
    linkTexto
}) => (
    <Box>
        <Text
            fontWeight="600"
            mb="8px"
            color="gray.900"
            fontSize={{ base: "14px", md: "15px", lg: "16px" }}
            fontFamily="Poppins, sans-serif"
        >
            {titulo}
        </Text>
        <Text
            fontSize={{ base: "14px", md: "15px", lg: "16px" }}
            color="gray.700"
            lineHeight="1.6"
            mb="8px"
            fontFamily="Poppins, sans-serif"
            fontWeight="400"
        >
            {descricao}
        </Text>
        <Text
            fontSize={{ base: "14px", md: "15px", lg: "16px" }}
            color="blue.500"
            cursor="pointer"
            textDecoration="underline"
            fontFamily="Poppins, sans-serif"
            fontWeight="400"
        >
            {linkTexto}
        </Text>
    </Box>
);
