import { Box, Input, Text } from '@chakra-ui/react';
import type { FormFieldProps } from './FormField.types';

export const FormField = ({
    label,
    placeholder,
    isRequired = false,
    value,
    onChange,
    type = 'text'
}: FormFieldProps) => {
    return (
        <Box w="100%">
            <Text
                fontSize="20px"
                fontWeight="400"
                color="#000000"
                lineHeight="100%"
                letterSpacing="0%"
                fontFamily="'Poppins', sans-serif"
                mb={2}
            >
                {label}
                {isRequired && (
                    <Text as="span" color="red.500" ml={1}>
                        *
                    </Text>
                )}
            </Text>
            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                bg="#F7F7F7"
                border="1px solid"
                borderColor="#D9D9D9"
                borderRadius="10px"
                h="40px"
                px={4}
                fontSize="14px"
                fontFamily="'Poppins', sans-serif"
                fontWeight="400"
                color="gray.900"
                css={{
                    '&::-webkit-calendar-picker-indicator': {
                        filter: 'invert(1)',
                        cursor: 'pointer',
                        opacity: 1
                    },
                    '&[type="date"]': {
                        colorScheme: 'dark'
                    }
                }}
                _placeholder={{
                    color: "gray.400",
                    fontFamily: "'Poppins', sans-serif"
                }}
                _hover={{
                    borderColor: "#B3B3B3"
                }}
                _focus={{
                    borderColor: "#298bf8",
                    bg: "white",
                    outline: "none",
                    boxShadow: "0 0 0 1px #298bf8"
                }}
            />
        </Box>
    );
};
