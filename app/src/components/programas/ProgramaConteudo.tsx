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
        w="full"
        maxW="1728px"
        mx="auto"
        px={{ base: "20px", md: "40px", lg: "109px" }}
        py={{ base: "40px", md: "60px", lg: "10px" }}
    >
        <HStack
            align="start"
            gap={{ base: 0, lg: "159px" }}
            flexDirection={{ base: "column", lg: "row" }}
        >
            {/* Área da esquerda - TEXTO */}
            <VStack
                align="stretch"
                gap={{ base: "24px", md: "32px", lg: "48px" }}
                flex="1"
                maxW={{ base: "full", lg: "901px" }}
                py={{ base: 0, lg: "103px" }}
            >
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

            {/* Área da direita - IMAGEM */}
            <ImagemPrograma
                programaId={programaId}
                imagemUrl={imagemUrl}
                instituicao={instituicao}
            />
        </HStack>
    </Box>
);
