import type { Programa, AreaTecnologia } from '@/types/domain'; // Importação de AreaTecnologia adicionada
import type { GeneralInfoFormData } from '@/components/forms/GeneralInfoForm';
import type { AddressFormData } from '@/components/forms/AddressForm';

export interface CursoFormData {
    generalInfo: GeneralInfoFormData;
    address: AddressFormData;
    imageFile?: File | null;
}

export class CursoService {
    static validarFormulario(data: CursoFormData): { valido: boolean; mensagem?: string } {
        const { generalInfo } = data;

        if (!generalInfo.titulo?.trim()) {
            return { valido: false, mensagem: 'O título do curso é obrigatório' };
        }

        if (!generalInfo.dataEvento) {
            return { valido: false, mensagem: 'A data do evento é obrigatória' };
        }

        if (!generalInfo.tipoEvento?.trim()) {
            return { valido: false, mensagem: 'O tipo de evento é obrigatório' };
        }

        if (!generalInfo.descricao?.trim()) {
            return { valido: false, mensagem: 'A descrição do curso é obrigatória' };
        }

        return { valido: true };
    }

    static criarCurso(data: CursoFormData): Programa {
        const { generalInfo, address } = data;
        const timestamp = Date.now();
        const dataAtual = new Date().toISOString();

        return {
            id: `curso-${timestamp}`,
            titulo: generalInfo.titulo,
            instituicao: this.criarInstituicaoPadrao(address),
            area: this.mapearTipoParaArea(generalInfo.tipoEvento),
            modalidade: 'presencial',
            descricao: generalInfo.descricao || '',
            nivel: 'iniciante',
            publicoAlvo: ['Todos'],
            requisitos: [],
            periodoInscricao: {
                inicio: generalInfo.dataEvento,
                fim: generalInfo.dataEvento
            },
            cronograma: {
                duracao: '3 meses',
                cargaHoraria: 40,
                periodicidade: 'Semanal'
            },
            investimento: 0,
            vagas: 30,
            cidade: address.logradouro || 'São Paulo',
            estado: this.extrairEstado(address.rua) || 'SP',
            tags: [generalInfo.tipoEvento || 'curso'],
            resumo: this.gerarResumo(generalInfo.descricao),
            status: 'ativo',
            destaque: false,
            avaliacoes: {
                media: 0,
                total: 0
            },
            createdAt: dataAtual,
            updatedAt: dataAtual
        };
    }

    private static criarInstituicaoPadrao(address: AddressFormData) {
        return {
            id: 'inst-producer',
            nome: 'Sua Instituição',
            site: 'https://example.com',
            logoUrl: '/logo-default.png',
            descricao: 'Instituição cadastrada pelo produtor',
            estado: this.extrairEstado(address.rua) || 'SP',
            cidade: address.logradouro || 'São Paulo',
            tipo: 'privada' as const,
            credibilidade: 5,
            totalProgramas: 1,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
    }

    // Correção aplicada aqui
    private static mapearTipoParaArea(tipoEvento: string): AreaTecnologia {
        const mapeamento: Record<string, AreaTecnologia> = {
            'frontend': 'frontend',
            'backend': 'backend',
            'fullstack': 'fullstack',
            'mobile': 'mobile',
            'dados': 'dados',
            'ia': 'ia',
            'cloud': 'cloud',
            'devops': 'devops',
            'ux': 'ux'
        };

        const tipoNormalizado = tipoEvento.toLowerCase().trim();
        return mapeamento[tipoNormalizado] || 'fullstack';
    }

    private static extrairEstado(rua?: string): string | undefined {
        if (!rua) return undefined;

        // Lista de UFs brasileiras
        const ufs = [
            'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
            'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
            'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
        ];

        const ruaUpper = rua.toUpperCase();
        const ufEncontrada = ufs.find(uf => ruaUpper.includes(uf));

        return ufEncontrada;
    }

    private static gerarResumo(descricao?: string): string {
        if (!descricao) return '';

        const resumoMaximo = 100;
        if (descricao.length <= resumoMaximo) {
            return descricao;
        }

        return descricao.substring(0, resumoMaximo).trim() + '...';
    }
}