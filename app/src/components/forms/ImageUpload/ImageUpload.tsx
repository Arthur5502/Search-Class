'use client';
import { Box, Image, Input } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import type { ImageUploadProps } from './ImageUpload.types';

export const ImageUpload = ({ onImageSelect, preview }: ImageUploadProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [previewUrl, setPreviewUrl] = useState<string | undefined>(preview);

    const handleClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            onImageSelect(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box>
            <Input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                display="none"
            />

            <Box
                onClick={handleClick}
                w="66px"
                h="66px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
                transition="all 0.2s"
                overflow="hidden"
                borderRadius="lg"
                _hover={{
                    opacity: 0.8
                }}
            >
                {previewUrl ? (
                    <Image
                        src={previewUrl}
                        alt="Preview"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        borderRadius="lg"
                    />
                ) : (
                    <Image
                        src="/upload-image.svg"
                        alt="Upload"
                        w="66px"
                        h="66px"
                    />
                )}
            </Box>
        </Box>
    );
};
