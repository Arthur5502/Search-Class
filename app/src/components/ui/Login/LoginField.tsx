"use client";

import { Input } from "@chakra-ui/react";
import { Field } from "@chakra-ui/react/field";

interface LoginFieldProps {
  label: string;
  type?: string;
  id: string;
  placeholder?: string;
}

export function LoginField({ label, type = "text", id, placeholder }: LoginFieldProps) {
  return (
    <Field.Root>
      <Field.Label fontSize="18px" color="#666B74">
        {label}
      </Field.Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        w="100%"
        border="1px solid #D9D9D9"
        bg="#F7F7F7"
        borderRadius="1rem"
        p="1rem"
        fontSize="16px"
        _focus={{
          outline: "none",
          borderColor: "#298BF8",
          bg: "white",
          boxShadow: "0 0 0 3px rgba(59,130,246,0.2)",
        }}
      />
    </Field.Root>
  );
}
