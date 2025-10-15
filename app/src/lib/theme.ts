import { createSystem, defineConfig } from '@chakra-ui/react';

export const theme = createSystem(defineConfig({
    theme: {
        tokens: {
            colors: {
                brand: {
                    50: { value: '#e6f3ff' },
                    500: { value: '#0066cc' },
                    600: { value: '#0052a3' },
                }
            },
            fonts: {
                body: { value: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
                heading: { value: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
            }
        }
    }
}));
