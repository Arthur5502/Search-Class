'use client';

import { useState } from 'react';
import { Box, VStack, Button, HStack, Text, Image } from '@chakra-ui/react';
import { ProducerHeader } from '@/components/layout/ProducerHeader';
import { GeneralInfoForm } from '@/components/forms/GeneralInfoForm';
import { AddressForm } from '@/components/forms/AddressForm';
import type { GeneralInfoFormData } from '@/components/forms/GeneralInfoForm';
import type { AddressFormData } from '@/components/forms/AddressForm';

export default function CadastrarCursoPage() {
    const [generalInfo, setGeneralInfo] = useState<GeneralInfoFormData>({
        titulo: '',
        dataEvento: '',
        tipoEvento: '',
        descricao: '',
        politicas: ''
    });

    const [address, setAddress] = useState<AddressFormData>({
        cep: '',
        numero: '',
        complemento: '',
        logradouro: '',
        rua: ''
    });

    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleGeneralInfoChange = (data: Partial<GeneralInfoFormData>) => {
        setGeneralInfo((prev) => ({ ...prev, ...data }));
    };

    const handleAddressChange = (data: Partial<AddressFormData>) => {
        setAddress((prev) => ({ ...prev, ...data }));
    };

    const handleSubmit = () => {
        console.log('Dados do formulário:', {
            generalInfo,
            address,
            imageFile
        });
    };

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
                    gap="10px"
                    w="1368px"
                    maxW="100%"
                    px={{ base: 4, md: 6, lg: 0 }}
                >
                    <Box h={{ base: "auto", md: "30px" }} pl={{ base: 4, md: 8 }}>
                        <Text
                            fontSize={{ base: "2xl", md: "3xl" }}
                            fontWeight="bold"
                            color="gray.800"
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
                                onImageSelect={setImageFile}
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
                                >
                                    <HStack gap="10px">
                                        <Image src="/ei_plus.svg" alt="Adicionar" w="24px" h="24px" />
                                        <Text>Cadastrar</Text>
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