export interface FormFieldProps {
    label: string;
    placeholder?: string;
    isRequired?: boolean;
    value: string;
    onChange: (value: string) => void;
    type?: 'text' | 'date';
}
