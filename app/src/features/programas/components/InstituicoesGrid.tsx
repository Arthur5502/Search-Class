'use client';
import { FC } from 'react';
import { Box, SimpleGrid, Image, Text, Heading, VStack, Flex, Badge } from '@chakra-ui/react';
import Link from 'next/link';
import type { Instituicao } from '../../../types/domain';

interface InstituicaoGridProps {
  instituicoes: Instituicao[];
}

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

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={8}>
        {instituicoes.map((instituicao) => (
          <Link key={instituicao.id} href={`/instituicoes/${instituicao.id}`}>
            <Box
              h="100%"
              cursor="pointer"
              borderRadius="16px"
              shadow="md"
              overflow="hidden"
              transition="all 0.3s ease"
              _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
              display="flex"
              flexDirection="column"
            >

              <Box h="180px" overflow="hidden">
                <Image
                  src={`https://picsum.photos/280/180?random=${instituicao.id}`}
                  alt={`Imagem para ${instituicao.nome}`}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  // fallback para caso o picsum.photos falhe
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/280x180/E2E8F0/718096?text=${encodeURIComponent(instituicao.nome)}`;
                  }}
                />
              </Box>

              <VStack align="start" gap={2} p={4} flex="1">
                <Heading
                  fontSize="md"
                  color="gray.900"
                  fontWeight="600"
                  lineHeight="short"
                  lineClamp={2}
                >
                  {instituicao.nome}
                </Heading>
                <Text fontSize="sm" color="gray.500" lineClamp={1}>
                  {instituicao.cidade} - {instituicao.estado}
                </Text>
                <Badge colorScheme={instituicao.tipo === 'publica' ? 'green' : 'blue'}>
                  {instituicao.tipo.toUpperCase()}
                </Badge>
              </VStack>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};