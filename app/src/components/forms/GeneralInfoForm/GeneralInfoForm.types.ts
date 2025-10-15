export interface GeneralInfoFormData {
    titulo: string;
    dataEvento: string;
    tipoEvento: string;
    descricao: string;
    politicas: string;
}

export interface GeneralInfoFormProps {
    data: GeneralInfoFormData;
    onChange: (data: Partial<GeneralInfoFormData>) => void;
    onImageSelect: (file: File | null) => void;
    imagePreview?: string;
}
