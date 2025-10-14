import { FC } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Image, Button } from '@chakra-ui/react';
import { FiHeart } from 'react-icons/fi';
import { useAppStore } from '../../store/useAppStore';
import type { Programa } from '../../types/domain';

interface ProgramaHeroProps {
    programa: Programa;
}

export const ProgramaHero: FC<ProgramaHeroProps> = ({ programa }) => {
    const favoritos = useAppStore((state) => state.favoritos);
    const toggleFavorito = useAppStore((state) => state.toggleFavorito);
    const isFavorito = favoritos.includes(String(programa.id));

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: programa.titulo,
                url: window.location.href
            }).catch(() => {});
        }
    };

    return (
        <Box 
            position="relative" 
            h={{ base: "300px", md: "400px", lg: "500px" }} 
            overflow="hidden" 
            w="full"
        >
            <Image
                src={`https://picsum.photos/1920/500?random=${programa.id}`}
                alt="Background"
                w="full"
                h="full"
                objectFit="cover"
                filter="brightness(0.4)"
            />

            <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="blackAlpha.600">
                <Container maxW="7xl" h="full" py={{ base: 4, md: 6, lg: 8 }}>
                    <VStack h="full" justify="flex-end" align="start" pb={{ base: "1rem", md: "1.5rem", lg: "2rem" }}>
                        <VStack 
                            align="start" 
                            color="white" 
                            maxW="4xl" 
                            gap={2} 
                            pl={{ base: "1rem", md: "3rem", lg: "10rem" }} 
                            mb={{ base: "0.5rem", md: "0.5rem", lg: "0.5rem" }}
                        >
                            <Heading 
                                fontSize={{ base: "24px", md: "36px", lg: "48px" }}
                                fontWeight="700"
                                lineHeight="1.2"
                                fontFamily="Poppins, sans-serif"
                            >
                                {programa.titulo}
                            </Heading>
                            <Text 
                                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                                fontWeight="400"
                                fontFamily="Poppins, sans-serif"
                            >
                                Fornecido por {programa.instituicao.nome}
                            </Text>
                            <Text 
                                fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                                fontWeight="400"
                                fontFamily="Poppins, sans-serif"
                            >
                                Professor: João Neves
                            </Text>
                        </VStack>

                        {/* Botões no canto inferior direito */}
                        <HStack 
                            gap={{ base: 2, md: 3 }} 
                            w="full" 
                            justify={{ base: "center", lg: "flex-end" }} 
                            transform={{ base: "none", lg: "translateX(23rem)" }}
                            flexWrap={{ base: "wrap", md: "nowrap" }}
                        >
                            <Button
                                bg="rgba(243, 243, 243, 1)"
                                color="gray.700"
                                _hover={{
                                    bg: 'gray.200',
                                }}
                                w={{ base: "140px", md: "160px", lg: "186px" }}
                                h={{ base: "40px", md: "44px", lg: "48px" }}
                                px={{ base: "10px", md: "12px", lg: "15px" }}
                                py={{ base: "8px", md: "10px", lg: "11px" }}
                                borderRadius="10px"
                                fontSize={{ base: "sm", md: "md" }}
                                fontFamily="Poppins, sans-serif"
                                onClick={handleShare}
                            >
                                <Image
                                    src="/mdi-light_share.svg"
                                    alt="Compartilhar"
                                    boxSize="24px"
                                    mr="10px"
                                />
                                Compartilhar
                            </Button>

                            <Button
                                bg="rgba(243, 243, 243, 1)"
                                color="gray.700"
                                _hover={{
                                    bg: 'gray.200',
                                }}
                                w={{ base: "140px", md: "160px", lg: "186px" }}
                                h={{ base: "40px", md: "44px", lg: "48px" }}
                                px={{ base: "10px", md: "12px", lg: "15px" }}
                                py={{ base: "8px", md: "10px", lg: "11px" }}
                                borderRadius="10px"
                                fontSize={{ base: "sm", md: "md" }}
                                fontFamily="Poppins, sans-serif"
                                onClick={() => toggleFavorito(String(programa.id))}
                            >
                                <FiHeart
                                    size={24}
                                    fill={isFavorito ? 'red' : 'none'}
                                    color={isFavorito ? 'red' : '#4A5568'}
                                    style={{ marginRight: '10px' }}
                                />
                                Favoritar
                            </Button>
                        </HStack>
                    </VStack>
                </Container>
            </Box>
        </Box>
    );
};
