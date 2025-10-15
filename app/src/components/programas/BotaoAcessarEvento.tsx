import { FC } from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';

interface BotaoAcessarEventoProps {
    url?: string;
}

export const BotaoAcessarEvento: FC<BotaoAcessarEventoProps> = ({ url }) => (
    <Button
        w="full"
        maxW={{ base: "full", lg: "901px" }}
        h="48px"
        bg="#E2F2FE"
        color="blue.600"
        border="none"
        borderRadius="10px"
        px="15px"
        py="11px"
        gap="16px"
        _hover={{ bg: '#C9E7FD' }}
        onClick={() => url && window.open(url, '_blank')}
        fontSize="16px"
        fontFamily="Poppins, sans-serif"
        fontWeight="400"
        display="flex"
        alignItems="center"
        justifyContent="center"
    >
        <Icon as={FiExternalLink} boxSize="24px" />
        Acessar Website do evento
    </Button>
);
