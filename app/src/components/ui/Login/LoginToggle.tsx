"use client";

import { Button, Flex } from "@chakra-ui/react";

interface LoginToggleProps {
  userType: "aluno" | "instituicao";
  onToggle: (type: "aluno" | "instituicao") => void;
}

export function LoginToggle({ userType, onToggle }: LoginToggleProps) {
  return (
    <Flex justify="center" gap="0">
      <Button
        onClick={() => onToggle("aluno")}
        bg={userType === "aluno" ? "#298BF8" : "transparent"}
        color={userType === "aluno" ? "#fff" : "#6b7280"}
        fontWeight="700"
        fontSize="18px"
        borderRadius="1rem 0 1rem 1rem"
        px="40px"
        py="12px"
        w="200px"
        _hover={{ opacity: 0.9 }}
        transition="all 0.2s ease"
      >
        Sou aluno
      </Button>

      <Button
        onClick={() => onToggle("instituicao")}
        bg={userType === "instituicao" ? "#298BF8" : "transparent"}
        color={userType === "instituicao" ? "#fff" : "#6b7280"}
        fontWeight="700"
        fontSize="18px"
        borderRadius="0 1rem 1rem 1rem"
        px="40px"
        py="12px"
        w="200px"
        _hover={{ opacity: 0.9 }}
        transition="all 0.2s ease"
      >
        Sou instituição
      </Button>
    </Flex>
  );
}
