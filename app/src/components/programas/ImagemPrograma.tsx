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
        w={{ base: "100%", md: "100%", lg: "478px" }}
        display="flex"
        flexDirection="column"
        gap={{ base: "16px", md: "20px", lg: "29px" }}
        pt={{ base: "20px", md: "40px", lg: "80px" }}
        transform={{ base: "none", lg: "translateX(10rem)" }}
    >
        <Image
            src={imagemUrl}
            alt="Campus"
            w={{ base: "100%", lg: "478px" }}
            h={{ base: "400px", md: "500px", lg: "663px" }}
            objectFit="cover"
            borderRadius={{ base: "20px", lg: "28px" }}
            p={{ base: "0", lg: "10px" }}
        />
        
        <Text 
            fontSize={{ base: "sm", md: "md" }} 
            color="blue.500" 
            textAlign="center"
        >
            Oferecido por: {instituicao}
        </Text>
    </Box>
);
