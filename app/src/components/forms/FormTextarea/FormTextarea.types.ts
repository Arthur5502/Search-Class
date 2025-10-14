export interface FormTextareaProps {
    label: string;
    placeholder?: string;
    isRequired?: boolean;
    value: string;
    onChange: (value: string) => void;
    rows?: number;
}
