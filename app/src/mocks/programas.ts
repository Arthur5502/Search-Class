import type { Programa, Instituicao } from '@/types/domain';

const mockInstituicoes: Instituicao[] = [
    {
        id: 'inst-1',
        nome: 'Instituto Federal de São Paulo',
        site: 'https://ifsp.edu.br',
        logoUrl: '/logos/ifsp.png',
        descricao: 'Instituição federal de ensino técnico e superior',
        estado: 'SP',
        cidade: 'São Paulo',
        tipo: 'publica',
        credibilidade: 5,
        totalProgramas: 15,
        createdAt: '2023-01-01',
        updatedAt: '2025-09-27'
    },
    {
        id: 'inst-2',
        nome: 'SENAI',
        site: 'https://senai.br',
        logoUrl: '/logos/senai.png',
        descricao: 'Serviço Nacional de Aprendizagem Industrial',
        estado: 'SP',
        cidade: 'São Paulo',
        tipo: 'privada',
        credibilidade: 5,
        totalProgramas: 25,
        createdAt: '2023-01-01',
        updatedAt: '2025-09-27'
    }
];

export const mockProgramas: Programa[] = [
    {
        id: 'p1',
        titulo: 'Curso de Matemática para Computação',
        instituicao: mockInstituicoes[0],
        area: 'dados',
        modalidade: 'online',
        nivel: 'iniciante',
        publicoAlvo: ['Estudantes de computação', 'Iniciantes em programação'],
        requisitos: ['Ensino médio completo'],
        periodoInscricao: {
            inicio: '2025-09-20',
            fim: '2025-10-30'
        },
        cronograma: {
            duracao: '4 meses',
            cargaHoraria: 120,
            periodicidade: '3x por semana'
        },
        investimento: 0,
        vagas: 50,
        bolsas: {
            disponivel: true,
            percentual: 100,
            criterios: ['Renda familiar até 3 salários mínimos']
        },
        editalUrl: 'https://exemplo.com/edital-matematica.pdf',
        inscricaoUrl: 'https://exemplo.com/inscricao',
        cidade: 'São Paulo',
        estado: 'SP',
        tags: ['matemática', 'algoritmos', 'lógica', 'fundamentos'],
        resumo: 'Fundamentos matemáticos essenciais para programação e algoritmos',
        descricaoCompleta: 'Curso completo de matemática aplicada à computação...',
        beneficios: ['Certificado reconhecido', 'Material didático incluído'],
        certificacao: 'Certificado de Conclusão IFSP',
        status: 'ativo',
        destaque: true,
        avaliacoes: {
            media: 4.8,
            total: 156
        },
        createdAt: '2025-09-01',
        updatedAt: '2025-09-27'
    },
    {
        id: 'p2',
        titulo: 'Curso de Automação Industrial',
        instituicao: mockInstituicoes[1],
        area: 'backend',
        modalidade: 'hibrido',
        nivel: 'intermediario',
        publicoAlvo: ['Técnicos', 'Engenheiros'],
        requisitos: ['Curso técnico ou superior em engenharia'],
        periodoInscricao: {
            inicio: '2025-09-25',
            fim: '2025-11-15'
        },
        cronograma: {
            duracao: '6 meses',
            cargaHoraria: 200,
            periodicidade: '2x por semana'
        },
        investimento: 1500,
        vagas: 30,
        cidade: 'São Paulo',
        estado: 'SP',
        tags: ['automação', 'industrial', 'plc', 'robótica'],
        resumo: 'Automação de processos industriais com tecnologia avançada',
        status: 'ativo',
        destaque: true,
        avaliacoes: {
            media: 4.6,
            total: 89
        },
        createdAt: '2025-09-05',
        updatedAt: '2025-09-27'
    },
    // Mais programas para preencher as seções...
    ...Array.from({ length: 20 }, (_, i) => ({
        id: `p${i + 3}`,
        titulo: `Curso de Automação ${i + 1}`,
        instituicao: mockInstituicoes[i % 2],
        area: (['frontend', 'backend', 'dados', 'mobile'] as const)[i % 4],
        modalidade: (['online', 'presencial', 'hibrido'] as const)[i % 3],
        nivel: (['iniciante', 'intermediario', 'avancado'] as const)[i % 3],
        publicoAlvo: ['Estudantes', 'Profissionais'],
        requisitos: ['Ensino médio'],
        periodoInscricao: {
            inicio: '2025-09-20',
            fim: '2025-11-30'
        },
        investimento: i % 2 === 0 ? 0 : Math.floor(Math.random() * 2000),
        vagas: 20 + (i * 5),
        cidade: 'São Paulo',
        estado: 'SP',
        tags: ['automação', 'tecnologia'],
        resumo: `Descrição do curso de automação ${i + 1}`,
        status: 'ativo' as const,
        destaque: i < 8,
        avaliacoes: {
            media: 4 + Math.random(),
            total: Math.floor(Math.random() * 200)
        },
        createdAt: '2025-09-01',
        updatedAt: '2025-09-27'
    }))
];
