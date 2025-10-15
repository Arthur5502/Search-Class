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
            <Box position="relative" w="100%">
                <NativeSelectRoot>
                    <NativeSelectField
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        bg="#F7F7F7"
                        border="1px solid"
                        borderColor="#D9D9D9"
                        borderRadius="10px"
                        h="40px"
                        px={4}
                        pr="40px"
                        fontSize="14px"
                        fontFamily="'Poppins', sans-serif"
                        fontWeight="400"
                        color="gray.900"
                        appearance="none"
                        css={{
                            '&::-ms-expand': {
                                display: 'none'
                            }
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

                <Box
                    position="absolute"
                    right="12px"
                    top="50%"
                    transform="translateY(-50%)"
                    pointerEvents="none"
                    color="#666B74"
                >
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Box>
            </Box>
        </Box>
    );
};
