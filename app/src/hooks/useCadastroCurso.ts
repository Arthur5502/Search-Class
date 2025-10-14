import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { useCursosCadastrados } from '@/store/useAppStore';
import { CursoService } from '@/lib/curso.service';
import type { GeneralInfoFormData } from '@/components/forms/GeneralInfoForm';
import type { AddressFormData } from '@/components/forms/AddressForm';

export const useCadastroCurso = () => {
    const router = useRouter();
    const { adicionarCurso } = useCursosCadastrados();

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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleGeneralInfoChange = useCallback((data: Partial<GeneralInfoFormData>) => {
        setGeneralInfo((prev) => ({ ...prev, ...data }));
    }, []);

    const handleAddressChange = useCallback((data: Partial<AddressFormData>) => {
        setAddress((prev) => ({ ...prev, ...data }));
    }, []);

    const handleImageSelect = useCallback((file: File | null) => {
        setImageFile(file);
    }, []);

    const handleSubmit = useCallback(async () => {
        if (isSubmitting) return;

        setIsSubmitting(true);

        try {
            const validacao = CursoService.validarFormulario({
                generalInfo,
                address,
                imageFile
            });

            if (!validacao.valido) {
                alert(validacao.mensagem);
                return;
            }

            const novoCurso = CursoService.criarCurso({
                generalInfo,
                address,
                imageFile
            });

            adicionarCurso(novoCurso);

            alert('Curso cadastrado com sucesso!');
            router.push('/seus-cursos');
        } catch (error) {
            console.error('Erro ao cadastrar curso:', error);
            alert('Ocorreu um erro ao cadastrar o curso. Tente novamente.');
        } finally {
            setIsSubmitting(false);
        }
    }, [generalInfo, address, imageFile, isSubmitting, adicionarCurso, router]);

    const resetForm = useCallback(() => {
        setGeneralInfo({
            titulo: '',
            dataEvento: '',
            tipoEvento: '',
            descricao: '',
            politicas: ''
        });
        setAddress({
            cep: '',
            numero: '',
            complemento: '',
            logradouro: '',
            rua: ''
        });
        setImageFile(null);
    }, []);

    return {
        generalInfo,
        address,
        imageFile,
        isSubmitting,
        handleGeneralInfoChange,
        handleAddressChange,
        handleImageSelect,
        handleSubmit,
        resetForm
    };
};
