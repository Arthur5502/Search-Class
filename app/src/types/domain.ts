export interface Usuario {
    id: string;
    nome: string;
    email: string;
    avatar?: string;
    favoritos: string[];
    perfil?: {
        experiencia?: NivelExperiencia;
        areasInteresse?: AreaTecnologia[];
        modalidadePreferida?: Modalidade;
    };
}

// Tipos de instituição
export interface Instituicao {
    id: string;
    nome: string;
    site: string;
    logoUrl: string;
    descricao: string;
    estado: string;
    cidade: string;
    tipo: 'publica' | 'privada';
    credibilidade: number;
    totalProgramas: number;
    createdAt: string;
    updatedAt: string;
}

// Tipos de programa
export interface Programa {
    id: string;
    titulo: string;
    instituicao: Instituicao;
    area: AreaTecnologia;
    modalidade: Modalidade;
    nivel: NivelExperiencia;
    publicoAlvo: string[];
    requisitos: string[];
    periodoInscricao: {
        inicio: string;
        fim: string;
    };
    cronograma?: {
        duracao: string;
        cargaHoraria: number;
        periodicidade: string;
    };
    investimento: number;
    vagas: number;
    bolsas?: {
        disponivel: boolean;
        percentual: number;
        criterios: string[];
    };
    editalUrl?: string;
    inscricaoUrl?: string;
    cidade: string;
    estado: string;
    tags: string[];
    resumo: string;
    descricaoCompleta?: string;
    beneficios?: string[];
    certificacao?: string;
    status: 'ativo' | 'inativo' | 'suspenso';
    destaque: boolean;
    avaliacoes: {
        media: number;
        total: number;
    };
    createdAt: string;
    updatedAt: string;
}

// Filtros para busca de programas
export interface FiltrosPrograma {
    busca: string;
    areas: Set<AreaTecnologia>;
    modalidades: Set<Modalidade>;
    niveis: Set<NivelExperiencia>;
    estados: Set<string>;
    investimentoMax?: number;
    comBolsas?: boolean;
    inscricoesAbertas?: boolean;
    ordenacao: 'relevancia' | 'data' | 'investimento' | 'avaliacao';
}

// Tipos básicos
export type AreaTecnologia =
    | 'frontend'
    | 'backend'
    | 'fullstack'
    | 'mobile'
    | 'dados'
    | 'ia'
    | 'cloud'
    | 'devops'
    | 'ux'
    | 'seguranca'
    | 'qa'
    | 'gamedev';

export type Modalidade = 'presencial' | 'online' | 'hibrido';

export type NivelExperiencia = 'iniciante' | 'intermediario' | 'avancado';
