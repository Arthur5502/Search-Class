import type { Programa, Instituicao } from '@/types/domain';

export const mockInstituicoes: Instituicao[] = [
    {
        id: 'inst-1',
        nome: 'SENAI - Serviço Nacional de Aprendizagem Industrial',
        site: 'https://senai.br',
        logoUrl: '/logos/senai.png',
        descricao: 'Maior complexo de educação profissional e tecnológica da América Latina',
        estado: 'SP',
        cidade: 'São Paulo',
        tipo: 'publica',
        credibilidade: 5,
        totalProgramas: 150,
        createdAt: '1942-01-22',
        updatedAt: '2025-09-27'
    },
    {
        id: 'inst-2',
        nome: 'SENAC - Serviço Nacional de Aprendizagem Comercial',
        site: 'https://senac.br',
        logoUrl: '/logos/senac.png',
        descricao: 'Instituição de educação profissional voltada para o setor de comércio e serviços',
        estado: 'SP',
        cidade: 'São Paulo',
        tipo: 'privada',
        credibilidade: 5,
        totalProgramas: 120,
        createdAt: '1946-01-10',
        updatedAt: '2025-09-27'
    },
    {
        id: 'inst-3',
        nome: 'IFSP - Instituto Federal de São Paulo',
        site: 'https://ifsp.edu.br',
        logoUrl: '/logos/ifsp.png',
        descricao: 'Autarquia federal de ensino técnico e superior',
        estado: 'SP',
        cidade: 'São Paulo',
        tipo: 'publica',
        credibilidade: 5,
        totalProgramas: 89,
        createdAt: '2008-12-29',
        updatedAt: '2025-09-27'
    },
    {
        id: 'inst-4',
        nome: 'FATEC - Faculdade de Tecnologia do Estado de São Paulo',
        site: 'https://fatec.sp.gov.br',
        logoUrl: '/logos/fatec.png',
        descricao: 'Faculdades públicas estaduais que oferecem cursos superiores de tecnologia',
        estado: 'SP',
        cidade: 'São Paulo',
        tipo: 'publica',
        credibilidade: 5,
        totalProgramas: 75,
        createdAt: '1969-10-06',
        updatedAt: '2025-09-27'
    },
    {
        id: 'inst-5',
        nome: 'SEBRAE - Serviço Brasileiro de Apoio às Micro e Pequenas Empresas',
        site: 'https://sebrae.com.br',
        logoUrl: '/logos/sebrae.png',
        descricao: 'Entidade privada sem fins lucrativos voltada para o desenvolvimento de pequenos negócios',
        estado: 'DF',
        cidade: 'Brasília',
        tipo: 'privada',
        credibilidade: 5,
        totalProgramas: 200,
        createdAt: '1972-07-17',
        updatedAt: '2025-09-27'
    },
    {
        id: 'inst-6',
        nome: 'Alura',
        site: 'https://alura.com.br',
        logoUrl: '/logos/alura.png',
        descricao: 'Plataforma brasileira de cursos online de tecnologia, design e negócios',
        estado: 'SP',
        cidade: 'São Paulo',
        tipo: 'privada',
        credibilidade: 4,
        totalProgramas: 300,
        createdAt: '2011-05-15',
        updatedAt: '2025-09-27'
    }
];

export const mockProgramas: Programa[] = [
    // === CURSOS TÉCNICOS SENAI ===
    {
        id: 'p1',
        titulo: 'Técnico em Automação Industrial',
        professor: 'Prof. Dr. Carlos Eduardo Machado',
        instituicao: mockInstituicoes[0], // SENAI
        area: 'backend',
        modalidade: 'presencial',
        descricao: 'Forme-se técnico em automação industrial e domine sistemas automatizados, controladores lógicos programáveis (CLP), robótica e instrumentação.',
        nivel: 'intermediario',
        publicoAlvo: ['Jovens a partir de 16 anos', 'Profissionais da área industrial', 'Estudantes do ensino médio'],
        requisitos: ['Ensino médio completo ou cursando', 'Conhecimentos básicos de matemática e física'],
        periodoInscricao: {
            inicio: '2025-10-01',
            fim: '2025-11-15'
        },
        cronograma: {
            duracao: '18 meses',
            cargaHoraria: 1200,
            periodicidade: '4x por semana (segunda a quinta)'
        },
        investimento: 0,
        vagas: 30,
        bolsas: {
            disponivel: true,
            percentual: 100,
            criterios: ['Processo seletivo por notas', 'Renda familiar comprovada']
        },
        editalUrl: 'https://senai.br/editais/automacao-industrial-2025.pdf',
        inscricaoUrl: 'https://senai.br/inscricoes',
        cidade: 'São Bernardo do Campo',
        estado: 'SP',
        tags: ['automação', 'industrial', 'plc', 'robótica', 'instrumentação'],
        resumo: 'Curso técnico gratuito em automação industrial com foco em CLPs, robótica e sistemas automatizados',
        certificacao: 'Diploma de Técnico em Automação Industrial - SENAI',
        status: 'ativo',
        destaque: true,
        avaliacoes: {
            media: 4.7,
            total: 243
        },
        createdAt: '2025-08-15',
        updatedAt: '2025-09-27'
    },

    {
        id: 'p2',
        titulo: 'Desenvolvimento de Sistemas Web Full Stack',
        professor: 'Prof. Msc. Ana Carolina Silva',
        instituicao: mockInstituicoes[5], // Alura
        area: 'frontend',
        modalidade: 'online',
        descricao: 'Aprenda a desenvolver aplicações web completas do front-end ao back-end com as tecnologias mais utilizadas no mercado.',
        nivel: 'intermediario',
        publicoAlvo: ['Desenvolvedores iniciantes', 'Profissionais em transição de carreira', 'Estudantes de tecnologia'],
        requisitos: ['Conhecimentos básicos de lógica de programação', 'Computador com acesso à internet'],
        periodoInscricao: {
            inicio: '2025-09-01',
            fim: '2025-12-31'
        },
        cronograma: {
            duracao: '12 meses',
            cargaHoraria: 300,
            periodicidade: 'Flexível - estude no seu ritmo'
        },
        investimento: 1200,
        vagas: 1000,
        cidade: 'Online',
        estado: 'Nacional',
        tags: ['javascript', 'react', 'nodejs', 'mongodb', 'fullstack', 'web'],
        resumo: 'Formação completa para se tornar desenvolvedor full stack com React, Node.js e MongoDB',
        certificacao: 'Certificado de Conclusão Alura',
        status: 'ativo',
        destaque: true,
        avaliacoes: {
            media: 4.8,
            total: 1547
        },
        createdAt: '2025-09-01',
        updatedAt: '2025-09-27'
    },

    // === CURSOS SEBRAE ===
    {
        id: 'p3',
        titulo: 'Marketing Digital para Pequenos Negócios',
        professor: 'Prof. Especialista Fernanda Oliveira',
        instituicao: mockInstituicoes[4], // SEBRAE
        area: 'marketing',
        modalidade: 'hibrido',
        descricao: 'Domine estratégias de marketing digital específicas para micro e pequenas empresas. Aprenda sobre redes sociais, Google Ads, SEO e métricas.',
        nivel: 'iniciante',
        publicoAlvo: ['Microempreendedores', 'Donos de pequenos negócios', 'Profissionais de marketing'],
        requisitos: ['Ter um negócio próprio ou pretender abrir', 'Conhecimentos básicos de internet'],
        periodoInscricao: {
            inicio: '2025-10-15',
            fim: '2025-11-30'
        },
        cronograma: {
            duracao: '3 meses',
            cargaHoraria: 60,
            periodicidade: '2x por semana (terças e quintas)'
        },
        investimento: 350,
        vagas: 25,
        bolsas: {
            disponivel: true,
            percentual: 50,
            criterios: ['MEI ativo há pelo menos 1 ano', 'Faturamento anual até R$ 81.000']
        },
        cidade: 'São Paulo',
        estado: 'SP',
        tags: ['marketing digital', 'google ads', 'redes sociais', 'seo', 'pequenos negócios'],
        resumo: 'Curso prático de marketing digital focado nas necessidades de micro e pequenas empresas',
        certificacao: 'Certificado SEBRAE',
        status: 'ativo',
        destaque: true,
        avaliacoes: {
            media: 4.6,
            total: 187
        },
        createdAt: '2025-09-10',
        updatedAt: '2025-09-27'
    },

    // === CURSOS SENAC ===
    {
        id: 'p4',
        titulo: 'Design Gráfico e Comunicação Visual',
        professor: 'Prof. Dr. Ricardo Pereira Santos',
        instituicao: mockInstituicoes[1], // SENAC
        area: 'design',
        modalidade: 'presencial',
        descricao: 'Desenvolva habilidades em design gráfico, identidade visual, diagramação e comunicação visual para atuar no mercado criativo.',
        nivel: 'iniciante',
        publicoAlvo: ['Iniciantes em design', 'Profissionais de marketing', 'Artistas e criativos'],
        requisitos: ['Ensino médio completo', 'Conhecimentos básicos de informática'],
        periodoInscricao: {
            inicio: '2025-10-01',
            fim: '2025-11-20'
        },
        cronograma: {
            duracao: '8 meses',
            cargaHoraria: 320,
            periodicidade: '3x por semana (segunda, quarta e sexta)'
        },
        investimento: 2400,
        vagas: 20,
        bolsas: {
            disponivel: true,
            percentual: 30,
            criterios: ['Renda familiar até 5 salários mínimos', 'Análise de perfil socioeconômico']
        },
        cidade: 'São Paulo',
        estado: 'SP',
        tags: ['design gráfico', 'photoshop', 'illustrator', 'indesign', 'identidade visual'],
        resumo: 'Curso completo de design gráfico com foco no mercado de comunicação visual',
        certificacao: 'Certificado de Qualificação Profissional SENAC',
        status: 'ativo',
        destaque: true,
        avaliacoes: {
            media: 4.5,
            total: 96
        },
        createdAt: '2025-08-20',
        updatedAt: '2025-09-27'
    },

    // === CURSOS FATEC ===
    {
        id: 'p5',
        titulo: 'Análise e Desenvolvimento de Sistemas',
        professor: 'Prof. Dr. João Marcos Lima',
        instituicao: mockInstituicoes[3], // FATEC
        area: 'backend',
        modalidade: 'presencial',
        descricao: 'Curso superior de tecnologia focado no desenvolvimento de software, análise de sistemas e gestão de projetos de TI.',
        nivel: 'intermediario',
        publicoAlvo: ['Vestibulandos', 'Profissionais de TI', 'Estudantes de tecnologia'],
        requisitos: ['Ensino médio completo', 'Aprovação no vestibular FATEC'],
        periodoInscricao: {
            inicio: '2025-11-01',
            fim: '2025-12-15'
        },
        cronograma: {
            duracao: '6 semestres (3 anos)',
            cargaHoraria: 2880,
            periodicidade: 'Matutino ou noturno - segunda a sexta'
        },
        investimento: 0,
        vagas: 80,
        cidade: 'São Paulo',
        estado: 'SP',
        tags: ['programação', 'java', 'python', 'banco de dados', 'engenharia de software'],
        resumo: 'Curso superior gratuito de tecnologia em análise e desenvolvimento de sistemas',
        certificacao: 'Diploma Superior de Tecnologia - FATEC',
        status: 'ativo',
        destaque: true,
        avaliacoes: {
            media: 4.4,
            total: 312
        },
        createdAt: '2025-08-01',
        updatedAt: '2025-09-27'
    },

    // === MAIS CURSOS REALISTAS ===
    {
        id: 'p6',
        titulo: 'Técnico em Eletrotécnica',
        professor: 'Prof. Msc. Rafael Costa Nunes',
        instituicao: mockInstituicoes[2], // IFSP
        area: 'engenharia',
        modalidade: 'presencial',
        descricao: 'Formação técnica em eletrotécnica com foco em instalações elétricas, máquinas elétricas e automação.',
        nivel: 'intermediario',
        publicoAlvo: ['Estudantes do ensino médio', 'Profissionais da área elétrica'],
        requisitos: ['Estar cursando o 2º ano do ensino médio'],
        periodoInscricao: { inicio: '2025-11-01', fim: '2025-12-10' },
        cronograma: { duracao: '3 anos', cargaHoraria: 1200, periodicidade: 'Integrado ao ensino médio' },
        investimento: 0,
        vagas: 35,
        cidade: 'Guarulhos',
        estado: 'SP',
        tags: ['eletrotécnica', 'instalações elétricas', 'automação', 'NR-10'],
        resumo: 'Curso técnico gratuito integrado ao ensino médio em eletrotécnica',
        status: 'ativo',
        destaque: false,
        avaliacoes: { media: 4.3, total: 78 },
        createdAt: '2025-08-10',
        updatedAt: '2025-09-27'
    },

    {
        id: 'p7',
        titulo: 'Gestão Empresarial para MEI',
        professor: 'Prof. Especialista Mariana Almeida',
        instituicao: mockInstituicoes[4], // SEBRAE
        area: 'gestao',
        modalidade: 'online',
        descricao: 'Aprenda a gerenciar seu negócio como MEI: finanças, marketing, vendas e aspectos legais.',
        nivel: 'iniciante',
        publicoAlvo: ['Microempreendedores Individuais', 'Futuros empreendedores'],
        requisitos: ['Ser MEI ou ter interesse em se formalizar'],
        periodoInscricao: { inicio: '2025-09-15', fim: '2025-12-31' },
        cronograma: { duracao: '2 meses', cargaHoraria: 40, periodicidade: 'Flexível' },
        investimento: 0,
        vagas: 500,
        cidade: 'Online',
        estado: 'Nacional',
        tags: ['gestão', 'mei', 'finanças', 'empreendedorismo'],
        resumo: 'Curso gratuito online para gestão de micro negócios',
        status: 'ativo',
        destaque: true,
        avaliacoes: { media: 4.7, total: 892 },
        createdAt: '2025-09-15',
        updatedAt: '2025-09-27'
    },

    {
        id: 'p8',
        titulo: 'Técnico em Administração',
        professor: 'Prof. Msc. Luciano Barbosa',
        instituicao: mockInstituicoes[1], // SENAC
        area: 'gestao',
        modalidade: 'presencial',
        descricao: 'Formação técnica em administração com foco em rotinas administrativas, recursos humanos e gestão.',
        nivel: 'iniciante',
        publicoAlvo: ['Estudantes', 'Profissionais administrativos'],
        requisitos: ['Ensino médio completo'],
        periodoInscricao: { inicio: '2025-10-01', fim: '2025-11-15' },
        cronograma: { duracao: '18 meses', cargaHoraria: 800, periodicidade: '4x por semana' },
        investimento: 1800,
        vagas: 40,
        cidade: 'Santos',
        estado: 'SP',
        tags: ['administração', 'recursos humanos', 'contabilidade', 'gestão'],
        resumo: 'Curso técnico em administração com estágio supervisionado',
        status: 'ativo',
        destaque: false,
        avaliacoes: { media: 4.2, total: 156 },
        createdAt: '2025-08-25',
        updatedAt: '2025-09-27'
    },

    {
        id: 'p9',
        titulo: 'Data Science e Analytics',
        professor: 'Prof. Dr. Thiago Monteiro',
        instituicao: mockInstituicoes[5], // Alura
        area: 'dados',
        modalidade: 'online',
        descricao: 'Formação completa em ciência de dados: Python, estatística, machine learning e visualização.',
        nivel: 'avancado',
        publicoAlvo: ['Analistas', 'Desenvolvedores', 'Profissionais de TI'],
        requisitos: ['Conhecimento em programação', 'Matemática básica'],
        periodoInscricao: { inicio: '2025-09-01', fim: '2025-12-31' },
        cronograma: { duracao: '15 meses', cargaHoraria: 400, periodicidade: 'Flexível' },
        investimento: 1800,
        vagas: 2000,
        cidade: 'Online',
        estado: 'Nacional',
        tags: ['python', 'machine learning', 'estatística', 'big data', 'pandas'],
        resumo: 'Formação completa em ciência de dados com projetos práticos',
        status: 'ativo',
        destaque: true,
        avaliacoes: { media: 4.9, total: 2341 },
        createdAt: '2025-09-01',
        updatedAt: '2025-09-27'
    },

    {
        id: 'p10',
        titulo: 'Soldagem e Caldeiraria',
        professor: 'Prof. Técnico André Silva',
        instituicao: mockInstituicoes[0], // SENAI
        area: 'engenharia',
        modalidade: 'presencial',
        descricao: 'Curso de qualificação em soldagem com eletrodo revestido, MIG/MAG e TIG.',
        nivel: 'iniciante',
        publicoAlvo: ['Trabalhadores da indústria', 'Interessados em soldagem'],
        requisitos: ['Ensino fundamental completo', 'Idade mínima 18 anos'],
        periodoInscricao: { inicio: '2025-10-15', fim: '2025-11-30' },
        cronograma: { duracao: '6 meses', cargaHoraria: 400, periodicidade: '5x por semana' },
        investimento: 0,
        vagas: 25,
        cidade: 'São Caetano do Sul',
        estado: 'SP',
        tags: ['soldagem', 'caldeiraria', 'metalurgia', 'indústria'],
        resumo: 'Qualificação profissional gratuita em soldagem industrial',
        status: 'ativo',
        destaque: false,
        avaliacoes: { media: 4.6, total: 89 },
        createdAt: '2025-08-30',
        updatedAt: '2025-09-27'
    }
];