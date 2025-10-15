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
            }).catch(() => { });
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
                <Box h="full" py={{ base: 4, md: 6, lg: 8 }}>
                    <VStack h="full" justify="flex-end" align="start" pb={{ base: "2rem", md: "2.5rem", lg: "3rem" }}>
                        <HStack
                            w="full"
                            justify="space-between"
                            align="flex-end"
                            px={{ base: 4, md: 8, lg: 16 }}
                            flexDirection={{ base: "column", lg: "row" }}
                            gap={{ base: 4, lg: 0 }}
                        >
                            <VStack
                                align="start"
                                color="white"
                                gap={1}
                                maxW={{ base: "full", lg: "682px" }}
                            >
                                <Heading
                                    fontSize={{ base: "28px", md: "38px", lg: "49.77px" }}
                                    fontWeight="700"
                                    lineHeight="120%"
                                    fontFamily="Poppins, sans-serif"
                                >
                                    {programa.titulo}
                                </Heading>
                                <Text
                                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                                    fontWeight="400"
                                    fontFamily="Poppins, sans-serif"
                                >
                                    Fornecido por {programa.instituicao.nome}
                                </Text>
                                <Text
                                    fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                                    fontWeight="400"
                                    fontFamily="Poppins, sans-serif"
                                >
                                    Professor: {programa.professor}
                                </Text>
                            </VStack>

                            <HStack
                                gap={{ base: 2, md: 3, lg: "10px" }}
                                flexWrap={{ base: "wrap", md: "nowrap" }}
                                justify={{ base: "center", lg: "flex-end" }}
                                w={{ base: "full", lg: "auto" }}
                            >
                                <Button
                                    bg="rgba(243, 243, 243, 1)"
                                    color="gray.700"
                                    _hover={{
                                        bg: 'gray.200',
                                    }}
                                    w={{ base: "165px", md: "175px", lg: "183px" }}
                                    h={{ base: "44px", md: "46px", lg: "48px" }}
                                    borderRadius="10px"
                                    fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                                    fontFamily="Poppins, sans-serif"
                                    fontWeight="400"
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
                                    w={{ base: "165px", md: "175px", lg: "183px" }}
                                    h={{ base: "44px", md: "46px", lg: "48px" }}
                                    borderRadius="10px"
                                    fontSize={{ base: "14px", md: "15px", lg: "16px" }}
                                    fontFamily="Poppins, sans-serif"
                                    fontWeight="400"
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
                        </HStack>
                    </VStack>
                </Box>
            </Box>
        </Box>
    );
};
