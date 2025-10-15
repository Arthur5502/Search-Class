"use client";

import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import { Logo } from "@/components/ui/Logo";
import { LoginToggle } from "@/components/ui/Login/LoginToggle";
import { LoginForm } from "@/components/ui/Login/LoginForm";

export default function LoginPage() {
  const [userType, setUserType] = useState<"aluno" | "instituicao">("aluno");

  const handleToggle = (type: "aluno" | "instituicao") => {
    setUserType(type);
  };

  return (
    <Flex h="100vh" w="100%">
      {/* Lado esquerdo */}
      <Box
        w="55%"
        h="100vh"
        position="relative"
        display={{ base: "none", md: "block" }}
        overflow="hidden"
      >
        <Image
          src={userType === "aluno" ? "/login-bg-1.png" : "/login-bg-2.png"}
          alt="Imagem de fundo"
          width={800}
          height={800}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.5s ease",
          }}
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
        w={{ base: "100%", md: "45%" }}
        h="100vh"
        align="center"
        justify="center"
      >
        <Box w="100%" px="4rem" display="flex" flexDir="column" alignItems="center" gap="2rem">
          <Logo />
          <LoginToggle userType={userType} onToggle={handleToggle} />
          <LoginForm userType={userType} />
        </Box>
      </Flex>
    </Flex>
  );
}
