export interface ImageUploadProps {
    onImageSelect: (file: File | null) => void;
    preview?: string;
}
