// src/constants/estados.ts

export interface Estado {
    id: string;
    nome: string;
    sigla: string;
    regiao: 'Norte' | 'Nordeste' | 'Centro-Oeste' | 'Sudeste' | 'Sul';
}

export const estadosBrasil: Estado[] = [
    // Região Norte
    { id: 'AC', nome: 'Acre', sigla: 'AC', regiao: 'Norte' },
    { id: 'AP', nome: 'Amapá', sigla: 'AP', regiao: 'Norte' },
    { id: 'AM', nome: 'Amazonas', sigla: 'AM', regiao: 'Norte' },
    { id: 'PA', nome: 'Pará', sigla: 'PA', regiao: 'Norte' },
    { id: 'RO', nome: 'Rondônia', sigla: 'RO', regiao: 'Norte' },
    { id: 'RR', nome: 'Roraima', sigla: 'RR', regiao: 'Norte' },
    { id: 'TO', nome: 'Tocantins', sigla: 'TO', regiao: 'Norte' },

    // Região Nordeste
    { id: 'AL', nome: 'Alagoas', sigla: 'AL', regiao: 'Nordeste' },
    { id: 'BA', nome: 'Bahia', sigla: 'BA', regiao: 'Nordeste' },
    { id: 'CE', nome: 'Ceará', sigla: 'CE', regiao: 'Nordeste' },
    { id: 'MA', nome: 'Maranhão', sigla: 'MA', regiao: 'Nordeste' },
    { id: 'PB', nome: 'Paraíba', sigla: 'PB', regiao: 'Nordeste' },
    { id: 'PE', nome: 'Pernambuco', sigla: 'PE', regiao: 'Nordeste' },
    { id: 'PI', nome: 'Piauí', sigla: 'PI', regiao: 'Nordeste' },
    { id: 'RN', nome: 'Rio Grande do Norte', sigla: 'RN', regiao: 'Nordeste' },
    { id: 'SE', nome: 'Sergipe', sigla: 'SE', regiao: 'Nordeste' },

    // Região Centro-Oeste
    { id: 'GO', nome: 'Goiás', sigla: 'GO', regiao: 'Centro-Oeste' },
    { id: 'MT', nome: 'Mato Grosso', sigla: 'MT', regiao: 'Centro-Oeste' },
    { id: 'MS', nome: 'Mato Grosso do Sul', sigla: 'MS', regiao: 'Centro-Oeste' },
    { id: 'DF', nome: 'Distrito Federal', sigla: 'DF', regiao: 'Centro-Oeste' },

    // Região Sudeste
    { id: 'ES', nome: 'Espírito Santo', sigla: 'ES', regiao: 'Sudeste' },
    { id: 'MG', nome: 'Minas Gerais', sigla: 'MG', regiao: 'Sudeste' },
    { id: 'RJ', nome: 'Rio de Janeiro', sigla: 'RJ', regiao: 'Sudeste' },
    { id: 'SP', nome: 'São Paulo', sigla: 'SP', regiao: 'Sudeste' },

    // Região Sul
    { id: 'PR', nome: 'Paraná', sigla: 'PR', regiao: 'Sul' },
    { id: 'RS', nome: 'Rio Grande do Sul', sigla: 'RS', regiao: 'Sul' },
    { id: 'SC', nome: 'Santa Catarina', sigla: 'SC', regiao: 'Sul' },
];

// Utilitário para buscar estado por sigla
export const getEstadoBySigla = (sigla: string): Estado | undefined => {
    return estadosBrasil.find(estado => estado.sigla === sigla);
};

// Utilitário para agrupar estados por região
export const getEstadosPorRegiao = () => {
    return estadosBrasil.reduce((acc, estado) => {
        if (!acc[estado.regiao]) {
            acc[estado.regiao] = [];
        }
        acc[estado.regiao].push(estado);
        return acc;
    }, {} as Record<string, Estado[]>);
};