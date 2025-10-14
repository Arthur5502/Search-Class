import { FC } from 'react';
import { Box, HStack, VStack } from '@chakra-ui/react';
import { DescricaoEvento } from './DescricaoEvento';
import { PoliticaEvento } from './PoliticaEvento';
import { BotaoAcessarEvento } from './BotaoAcessarEvento';
import { ImagemPrograma } from './ImagemPrograma';

interface ProgramaConteudoProps {
    programaId: string | number;
    titulo: string;
    descricao: string[];
    data: string;
    local: string;
    realizacao: string;
    imagemUrl: string;
    instituicao: string;
    eventoUrl?: string;
}

export const ProgramaConteudo: FC<ProgramaConteudoProps> = ({
    programaId,
    titulo,
    descricao,
    data,
    local,
    realizacao,
    imagemUrl,
    instituicao,
    eventoUrl
}) => (
    <Box 
        w={{ base: "100%", lg: "1728px" }}
        minH={{ base: "auto", lg: "1256px" }}
        mx="auto"
        pt={{ base: "20px", md: "20px", lg: "10px" }}
        pr={{ base: "20px", md: "40px", lg: "109px" }}
        pb={{ base: "40px", md: "60px", lg: "10px" }}
        pl={{ base: "20px", md: "40px", lg: "109px" }}
    >
        <HStack 
            align="start" 
            gap={{ base: 0, lg: "159px" }}
            flexDirection={{ base: "column", lg: "row" }}
        >
            {/* Área da esquerda - TEXTO DIRETO */}
            <VStack align="stretch" gap="6" flex="1" maxW="2xl">
                <DescricaoEvento
                    titulo={titulo}
                    descricao={descricao}
                    data={data}
                    local={local}
                    realizacao={realizacao}
                />
                <PoliticaEvento />
                <BotaoAcessarEvento url={eventoUrl} />
            </VStack>

            {/* Área da direita - SÓ A IMAGEM */}
            <ImagemPrograma 
                programaId={programaId}
                imagemUrl={imagemUrl} 
                instituicao={instituicao} 
            />
        </HStack>
    </Box>
);
