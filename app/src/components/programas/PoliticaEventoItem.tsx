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
            fontWeight="bold" 
            mb="2" 
            color="gray.900" 
            fontSize={{ base: "sm", md: "md" }}
        >
            {titulo}
        </Text>
        <Text 
            fontSize={{ base: "sm", md: "md" }} 
            color="gray.700" 
            lineHeight="1.6" 
            mb="2"
        >
            {descricao}
        </Text>
        <Text 
            fontSize={{ base: "sm", md: "md" }} 
            color="blue.500" 
            cursor="pointer" 
            textDecoration="underline"
        >
            {linkTexto}
        </Text>
    </Box>
);
