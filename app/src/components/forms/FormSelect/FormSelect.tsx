import { Box, Text } from '@chakra-ui/react';
import { NativeSelectRoot, NativeSelectField } from '@chakra-ui/react';
import type { FormSelectProps } from './FormSelect.types';

export const FormSelect = ({
    label,
    placeholder = 'Selecione uma opção',
    isRequired = false,
    value,
    onChange,
    options
}: FormSelectProps) => {
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
            <NativeSelectRoot>
                <NativeSelectField
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    bg="gray.50"
                    border="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    h="40px"
                    px={4}
                    fontSize="sm"
                    color="gray.900"
                    _hover={{
                        borderColor: "gray.300"
                    }}
                    _focus={{
                        borderColor: "blue.500",
                        bg: "white",
                        outline: "none",
                        boxShadow: "0 0 0 1px var(--chakra-colors-blue-500)"
                    }}
                >
                    <option value="" disabled>
                        {placeholder}
                    </option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </NativeSelectField>
            </NativeSelectRoot>
        </Box>
    );
};
