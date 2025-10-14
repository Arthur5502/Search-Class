import { Box, Grid, HStack, Text, VStack } from '@chakra-ui/react';
import { FormField } from '../FormField';
import { FormSelect } from '../FormSelect';
import { FormTextarea } from '../FormTextarea';
import { ImageUpload } from '../ImageUpload';
import type { GeneralInfoFormProps } from './GeneralInfoForm.types';

const tipoEventoOptions = [
    { value: 'presencial', label: 'Presencial' },
    { value: 'online', label: 'Online' },
    { value: 'hibrido', label: 'Híbrido' }
];

export const GeneralInfoForm = ({
    data,
    onChange,
    onImageSelect,
    imagePreview
}: GeneralInfoFormProps) => {
    return (
        <VStack align="stretch" gap="10px">
            <HStack justify="space-between" align="start">
                <Text
                    fontSize="30px"
                    fontWeight="400"
                    color="#000000"
                    lineHeight="100%"
                    letterSpacing="0%"
                    fontFamily="'Poppins', sans-serif"
                >
                    Informações Gerais
                </Text>
                <ImageUpload
                    onImageSelect={onImageSelect}
                    preview={imagePreview}
                />
            </HStack>

            <FormField
                label="Título do Curso"
                placeholder="Digite o título do curso"
                isRequired
                value={data.titulo}
                onChange={(value) => onChange({ titulo: value })}
            />

            <Grid
                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                gap="10px"
            >
                <FormField
                    label="Data do evento"
                    type="date"
                    value={data.dataEvento}
                    onChange={(value) => onChange({ dataEvento: value })}
                />
                <FormSelect
                    label="Tipo do evento"
                    value={data.tipoEvento}
                    onChange={(value) => onChange({ tipoEvento: value })}
                    options={tipoEventoOptions}
                />
            </Grid>

            <FormTextarea
                label="Descrição do Curso"
                placeholder="Descreva o curso..."
                value={data.descricao}
                onChange={(value) => onChange({ descricao: value })}
                rows={6}
            />

            <FormTextarea
                label="Políticas e Descrição"
                placeholder="Políticas do curso..."
                value={data.politicas}
                onChange={(value) => onChange({ politicas: value })}
                rows={4}
            />
        </VStack>
    );
};
