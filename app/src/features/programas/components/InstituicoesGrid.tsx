'use client';
import { FC } from 'react';
import { Box, SimpleGrid, Image, Text, Heading, VStack, Flex, Badge, AspectRatio, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import type { Instituicao } from '../../../types/domain';

interface InstituicaoGridProps {
  instituicoes: Instituicao[];
}

const capitalize = (s: string) => {
    if (typeof s !== 'string' || s.length === 0) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
};


export const InstituicaoGrid: FC<InstituicaoGridProps> = ({ instituicoes }) => {
  return (
    <Box maxW="9xl" py={8} px={{ base: 4, md: 40 }}>
      <Heading
        size="lg"
        color="gray.800"
        fontWeight="600"
        mb={6}
      >
        {`${instituicoes.length} Instituições`}
      </Heading>

      <SimpleGrid minChildWidth="280px" gap="32px">
        {instituicoes.map((instituicao) => (
          <Link key={instituicao.id} href={`/instituicoes/${instituicao.id}`}>
            <Box
              maxWidth="320px" 
              mx="auto"         
              cursor="pointer"
              borderRadius="xl"
              shadow="md"
              overflow="hidden"
              transition="all 0.3s ease"
              _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
              display="flex"
              flexDirection="column"
              bg="white"
            >
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={`https://picsum.photos/280/180?random=${instituicao.id}`}
                  alt={`Imagem para ${instituicao.nome}`}
                  objectFit="cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/280x180/E2E8F0/7180F6?text=${encodeURIComponent(instituicao.nome)}`;
                  }}
                />
              </AspectRatio>

              <VStack align="start" gap={1.5} p={4} flex="1">
                <Heading
                  fontSize="md"
                  color="gray.900"
                  fontWeight="600"
                  lineHeight="1.3"
                  lineClamp={2}
                  minH="2.6em"
                >
                  {instituicao.nome}
                </Heading>
                <Text fontSize="sm" color="gray.500" lineClamp={1}>
                  {instituicao.cidade} - {instituicao.estado}
                </Text>
                <HStack 
                  bg="white" 
                  borderRadius="full" 
                  px={2.5} 
                  py={1} 
                  gap={1.5}
                  border="1px solid"
                  borderColor="gray.200"
                >
                  <Box 
                    boxSize="8px" 
                    borderRadius="full" 
                    bg={instituicao.tipo === 'publica' ? 'red.500' : 'blue.500'} 
                  />
                  <Text fontSize="xs" color="gray.600" fontWeight="medium">
                    {capitalize(instituicao.tipo)}
                  </Text>
                </HStack>

              </VStack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};