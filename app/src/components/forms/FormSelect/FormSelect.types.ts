export interface FormSelectOption {
    value: string;
    label: string;
}

export interface FormSelectProps {
    label: string;
    placeholder?: string;
    isRequired?: boolean;
    value: string;
    onChange: (value: string) => void;
    options: FormSelectOption[];
}
