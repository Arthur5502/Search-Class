export interface AddressFormData {
    cep: string;
    numero: string;
    complemento: string;
    logradouro: string;
    rua: string;
}

export interface AddressFormProps {
    data: AddressFormData;
    onChange: (data: Partial<AddressFormData>) => void;
}
