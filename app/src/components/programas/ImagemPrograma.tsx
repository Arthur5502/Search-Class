import { FC } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

interface ImagemProgramaProps {
    imagemUrl: string;
    instituicao: string;
    programaId: string | number;
}

export const ImagemPrograma: FC<ImagemProgramaProps> = ({ imagemUrl, instituicao }) => (
    <Box
        flexShrink="0"
        w={{ base: "100%", lg: "478px" }}
        display="flex"
        flexDirection="column"
        gap={{ base: "16px", md: "20px", lg: "29px" }}
        pt={{ base: "80px", md: "150px", lg: "230px" }}
    >
        <Image
            src={imagemUrl}
            alt="Campus"
            w="full"
            h={{ base: "300px", md: "450px", lg: "663px" }}
            objectFit="cover"
            borderRadius="28px"
        />

        <Text
            fontSize={{ base: "14px", md: "16px", lg: "18px" }}
            color="blue.500"
            textAlign="start"
            fontFamily="Poppins, sans-serif"
            fontWeight="400"
        >
            Oferecido por: {instituicao}
        </Text>
    </Box>
);
