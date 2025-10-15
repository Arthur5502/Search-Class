import { FC } from 'react';
import { Button, Image } from '@chakra-ui/react';

interface ShareButtonProps {
    variant?: 'hero' | 'default';
}

export const ShareButton: FC<ShareButtonProps> = ({ variant = 'default' }) => {
    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: window.location.href
            }).catch(() => {});
        }
    };

    if (variant === 'hero') {
        return (
            <Button
                variant="outline"
                colorScheme="whiteAlpha"
                borderColor="whiteAlpha.400"
                color="white"
                bg="whiteAlpha.200"
                backdropFilter="blur(8px)"
                _hover={{
                    bg: 'whiteAlpha.300',
                    borderColor: 'whiteAlpha.600',
                }}
                h="48px"
                w="186px"
                px="15px"
                py="11px"
                borderRadius="8px"
                fontSize="md"
                fontFamily="Poppins, sans-serif"
                onClick={handleShare}
            >
                <Image
                    src="/mdi-light_share.svg"
                    alt="Compartilhar"
                    boxSize="24px"
                    mr={2}
                    filter="brightness(0) invert(1)"
                />
                Compartilhar
            </Button>
        );
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
        >
            <Image
                src="/mdi-light_share.svg"
                alt="Compartilhar"
                boxSize="20px"
                mr={2}
            />
            Compartilhar
        </Button>
    );
};
