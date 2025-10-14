import { Box, Textarea, Text } from '@chakra-ui/react';
import type { FormTextareaProps } from './FormTextarea.types';

export const FormTextarea = ({
    label,
    placeholder,
    isRequired = false,
    value,
    onChange,
    rows = 5
}: FormTextareaProps) => {
    return (
        <Box w="100%">
            <Text
                fontSize="sm"
                fontWeight="medium"
                color="gray.900"
                mb={1}
            >
                {label}
                {isRequired && (
                    <Text as="span" color="red.500" ml={1}>
                        *
                    </Text>
                )}
            </Text>
            <Textarea
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                bg="gray.50"
                border="1px"
                borderColor="gray.200"
                borderRadius="md"
                px={4}
                py={3}
                fontSize="sm"
                color="gray.900"
                rows={rows}
                resize="vertical"
                _placeholder={{
                    color: "gray.400"
                }}
                _hover={{
                    borderColor: "gray.300"
                }}
                _focus={{
                    borderColor: "blue.500",
                    bg: "white",
                    outline: "none",
                    boxShadow: "0 0 0 1px var(--chakra-colors-blue-500)"
                }}
            />
        </Box>
    );
};
