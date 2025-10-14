import { FC } from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';

interface BotaoAcessarEventoProps {
    url?: string;
}

export const BotaoAcessarEvento: FC<BotaoAcessarEventoProps> = ({ url }) => (
    <Button
        size={{ base: "md", md: "lg" }}
        w="full"
        bg="rgba(226, 242, 254, 1)"
        color="blue.600"
        border="1px"
        borderColor="blue.600"
        _hover={{ bg: 'blue.100' }}
        onClick={() => url && window.open(url, '_blank')}
        fontSize={{ base: "sm", md: "md" }}
    >
        <Icon as={FiExternalLink} mr="2" />
        Acessar Website do evento
    </Button>
);
