"use client";

import { VStack, Box, Button } from "@chakra-ui/react";
import { LoginField } from "./LoginField";

interface LoginFormProps {
  userType: "aluno" | "instituicao";
}

export function LoginForm({ userType }: LoginFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Entrar como:", userType);
  };

  return (
    <Box as="form" w="100%" maxW="460px" onSubmit={handleSubmit}>
      <VStack alignItems="stretch" gap="2rem" w="100%">
        <LoginField
          label="E-mail ou CPF"
          id="email"
          placeholder="Digite seu e-mail ou CPF"
        />
        <LoginField
          label="Senha"
          type="password"
          id="password"
          placeholder="Digite sua senha"
        />
        <Button
          type="submit"
          bg="#298BF8"
          color="white"
          borderRadius="1rem"
          p="1rem"
          fontWeight="bold"
          fontSize="16px"
          h="3.2rem"
          _hover={{ opacity: 0.9 }}
        >
          Entrar
        </Button>
      </VStack>
    </Box>
  );
}
