'use client';

import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  VStack,
  Field,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Logo } from '@/components/ui/Logo';

export default function LoginPage() {
  const [userType, setUserType] = useState<'aluno' | 'instituicao'>('aluno');

  const toggleUserType = (type: 'aluno' | 'instituicao') => {
    setUserType(type);
  };

  return (
    <Flex h="100vh" w="100%">
      {/* Lado esquerdo */}
      <Box
        w="55%"
        h="100vh"
        position="relative"
        display={{ base: 'none', md: 'block' }}
        overflow="hidden"
      >
        <Image
          src={
            userType === 'aluno'
              ? '/login-bg-1.png'
              : '/login-bg-2.png'
          }
          alt="Imagem de fundo"
          objectFit="cover"
          w="100%"
          h="100%"
          maxW="100%"
        />
        <Box
          position="absolute"
          inset="0"
          bg="rgba(30, 90, 255, 0.35)"
          pointerEvents="none"
        />
      </Box>

      {/* Lado direito */}
      <Flex
        w={{ base: '100%', md: '45%' }}
        h="100vh"
        align="center"
        justify="center"
      >
        <Box w="100%" px="4rem">
          {/* Header */}
          <Flex direction="column" align="center" mb="2rem" gap="2rem">
            <Logo />

            {/* Botões de alternância */}
            <Flex justify="center" gap="20px">
              <Button
                onClick={() => toggleUserType('aluno')}
                bg={userType === 'aluno' ? '#298BF8' : 'transparent'}
                color={userType === 'aluno' ? '#fff' : '#6b7280'}
                fontWeight="700"
                fontSize="18px"
                borderRadius="9999px"
                px="40px"
                py="12px"
                w="180px"
                _hover={{ opacity: 0.9 }}
              >
                Sou aluno
              </Button>

              <Button
                onClick={() => toggleUserType('instituicao')}
                bg={userType === 'instituicao' ? '#298BF8' : 'transparent'}
                color={userType === 'instituicao' ? '#fff' : '#6b7280'}
                fontWeight="700"
                fontSize="18px"
                borderRadius="9999px"
                px="40px"
                py="12px"
                w="180px"
                _hover={{ opacity: 0.9 }}
              >
                Sou instituição
              </Button>
            </Flex>
          </Flex>

          {/* Formulário */}
          <Box as="form" w="100%">
            <VStack alignItems="stretch" gap="2rem" w="100%">
              <Field.Root>
                <Field.Label fontSize="18px" color="#666B74">
                  E-mail ou CPF
                </Field.Label>
                <Input
                  type="text"
                  id="email"
                  placeholder="Digite seu e-mail ou CPF"
                  w="100%"
                  border="1px solid #D9D9D9"
                  bg="#F7F7F7"
                  borderRadius="1rem"
                  p="1rem"
                  fontSize="16px"
                  _focus={{
                    outline: 'none',
                    borderColor: '#298BF8',
                    bg: 'white',
                    boxShadow: '0 0 0 3px rgba(59,130,246,0.2)',
                  }}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label fontSize="18px" color="#666B74">
                  Senha
                </Field.Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha"
                  w="100%"
                  border="1px solid #D9D9D9"
                  bg="#F7F7F7"
                  borderRadius="1rem"
                  p="1rem"
                  fontSize="16px"
                  _focus={{
                    outline: 'none',
                    borderColor: '#298BF8',
                    bg: 'white',
                    boxShadow: '0 0 0 3px rgba(59,130,246,0.2)',
                  }}
                />
              </Field.Root>

              <Button
                type="submit"
                bg="#298BF8"
                color="#fff"
                fontWeight="bold"
                fontSize="1rem"
                borderRadius="1rem"
                py="1.2rem"
                _hover={{ bg: '#1d6ed6' }}
                w="100%"
              >
                Entrar
              </Button>
            </VStack>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
