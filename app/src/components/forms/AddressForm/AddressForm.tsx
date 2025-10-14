import { Box, Grid, Text, VStack } from '@chakra-ui/react';
import { FormField } from '../FormField';
import type { AddressFormProps } from './AddressForm.types';

export const AddressForm = ({ data, onChange }: AddressFormProps) => {
    return (
        <VStack align="stretch" gap="10px">
            <Text
                fontSize="lg"
                fontWeight="semibold"
                color="gray.800"
            >
                Endereço do evento
            </Text>

            <Grid
                templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
                gap="10px"
            >
                <FormField
                    label="CEP"
                    placeholder="00000-000"
                    value={data.cep}
                    onChange={(value) => onChange({ cep: value })}
                />
                <FormField
                    label="Número"
                    placeholder="123"
                    value={data.numero}
                    onChange={(value) => onChange({ numero: value })}
                />
                <FormField
                    label="Complemento"
                    placeholder="Apt 101"
                    value={data.complemento}
                    onChange={(value) => onChange({ complemento: value })}
                />
            </Grid>

            <Grid
                templateColumns={{ base: '1fr', md: '1fr 2fr' }}
                gap="10px"
            >
                <FormField
                    label="Logradouro"
                    placeholder="Bairro"
                    value={data.logradouro}
                    onChange={(value) => onChange({ logradouro: value })}
                />
                <FormField
                    label="Rua"
                    placeholder="Nome da rua"
                    value={data.rua}
                    onChange={(value) => onChange({ rua: value })}
                />
            </Grid>
        </VStack>
    );
};
