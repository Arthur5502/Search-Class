'use client';

import { Box, VStack, Button, HStack, Text, Image } from '@chakra-ui/react';
import { ProducerHeader } from '@/components/layout/ProducerHeader';
import { GeneralInfoForm } from '@/components/forms/GeneralInfoForm';
import { AddressForm } from '@/components/forms/AddressForm';
import { useCadastroCurso } from '@/hooks/useCadastroCurso';

export default function CadastrarCursoPage() {
    const {
        generalInfo,
        address,
        isSubmitting,
        handleGeneralInfoChange,
        handleAddressChange,
        handleImageSelect,
        handleSubmit
    } = useCadastroCurso();

    return (
        <>
            <ProducerHeader />

            <Box
                bg="#FFFFFF"
                minH="100vh"
                display="flex"
                justifyContent="center"
                py={{ base: 4, md: 8 }}
            >
                <VStack
                    align="stretch"
                    gap="20px"
                    w="1368px"
                    maxW="100%"
                    px={{ base: 4, md: 6, lg: 0 }}
                >
                    <Box h={{ base: "auto", md: "30px" }} pl={{ base: 4, md: 8 }}>
                        <Text
                            fontSize={{ base: "28px", md: "42.08px" }}
                            fontWeight="400"
                            color="#000000"
                            lineHeight="100%"
                            letterSpacing="0%"
                            fontFamily="'Poppins', sans-serif"
                        >
                            Cadastrar novo curso
                        </Text>
                    </Box>

                    <Box
                        bg="white"
                        borderRadius="xl"
                        p={{ base: 4, md: 6, lg: 8 }}
                    >
                        <VStack align="stretch" gap="10px">
                            <GeneralInfoForm
                                data={generalInfo}
                                onChange={handleGeneralInfoChange}
                                onImageSelect={handleImageSelect}
                            />

                            <AddressForm
                                data={address}
                                onChange={handleAddressChange}
                            />

                            <HStack justify={{ base: "stretch", md: "flex-end" }} pt={4}>
                                <Button
                                    bg="#298BF8"
                                    color="white"
                                    h={{ base: "50px", md: "45px" }}
                                    w={{ base: "100%", md: "500px" }}
                                    px={{ base: 6, md: "190px" }}
                                    py="14px"
                                    fontSize="md"
                                    fontWeight="semibold"
                                    borderRadius="16px"
                                    border="1px"
                                    borderColor="#298BF8"
                                    _hover={{ bg: "#265486", borderColor: "#265486" }}
                                    onClick={handleSubmit}
                                    loading={isSubmitting}
                                    disabled={isSubmitting}
                                >
                                    <HStack gap="10px">
                                        <Image src="/ei_plus.svg" alt="Adicionar" w="24px" h="24px" />
                                        <Text>{isSubmitting ? 'Cadastrando...' : 'Cadastrar'}</Text>
                                    </HStack>
                                </Button>
                            </HStack>
                        </VStack>
                    </Box>
                </VStack>
            </Box>
        </>
    );
}