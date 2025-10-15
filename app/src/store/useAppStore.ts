import { create } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { Usuario, FiltrosPrograma, Programa } from '@/types/domain';

interface AppState {
    user: Usuario | null;
    filtros: FiltrosPrograma;
    favoritos: string[];
    resultados: Programa[];
    loading: boolean;
    error: string | null;
    currentPage: number;
    totalPages: number;
    totalResults: number;
    cursosCadastrados: Programa[];
    setUser: (user: Usuario | null) => void;
    updateFiltros: (filtros: Partial<FiltrosPrograma>) => void;
    resetFiltros: () => void;
    toggleFavorito: (programaId: string) => void;
    setResultados: (programas: Programa[], total: number) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setCurrentPage: (page: number) => void;
    hasFiltrosAtivos: () => boolean;
    adicionarCurso: (curso: Programa) => void;
    removerCurso: (cursoId: string) => void;
}

const initialFiltros: FiltrosPrograma = {
    busca: '',
    areas: new Set(),
    modalidades: new Set(),
    niveis: new Set(),
    estados: new Set(),
    ordenacao: 'relevancia'
};

export const useAppStore = create<AppState>()(
    subscribeWithSelector(
        persist(
            immer((set, get) => ({
                user: null,
                filtros: initialFiltros,
                favoritos: [],
                resultados: [],
                loading: false,
                error: null,
                currentPage: 1,
                totalPages: 0,
                totalResults: 0,
                cursosCadastrados: [],

                setUser: (user) => set({ user }),

                updateFiltros: (novosFiltros) => set((state) => {
                    Object.assign(state.filtros, novosFiltros);
                    state.currentPage = 1;
                }),

                resetFiltros: () => set((state) => {
                    state.filtros = { ...initialFiltros };
                    state.currentPage = 1;
                }),

                toggleFavorito: (programaId) => {
                    set((state) => {
                        const index = state.favoritos.indexOf(programaId);

                        if (index > -1) {
                            state.favoritos.splice(index, 1);
                        } else {
                            state.favoritos.push(programaId);
                        }

                        if (state.user) {
                            state.user.favoritos = state.favoritos;
                        }
                    });
                },

                setResultados: (programas, total) => set((state) => {
                    state.resultados = programas;
                    state.totalResults = total;
                    state.totalPages = Math.ceil(total / 12);
                }),

                setLoading: (loading) => set({ loading }),
                setError: (error) => set({ error }),
                setCurrentPage: (page) => set({ currentPage: page }),

                hasFiltrosAtivos: () => {
                    const { filtros } = get();
                    return !!(
                        filtros.busca ||
                        filtros.areas.size > 0 ||
                        filtros.modalidades.size > 0 ||
                        filtros.niveis.size > 0 ||
                        filtros.estados.size > 0 ||
                        filtros.investimentoMax ||
                        filtros.comBolsas ||
                        filtros.inscricoesAbertas
                    );
                },

                adicionarCurso: (curso) => set((state) => {
                    state.cursosCadastrados.push(curso);
                }),

                removerCurso: (cursoId) => set((state) => {
                    const index = state.cursosCadastrados.findIndex(c => c.id === cursoId);
                    if (index > -1) {
                        state.cursosCadastrados.splice(index, 1);
                    }
                })
            })),
            {
                name: 'talent-platform-store',
                skipHydration: false,
                partialize: (state) => ({
                    user: state.user,
                    favoritos: state.favoritos,
                    cursosCadastrados: state.cursosCadastrados,
                    filtros: {
                        ...state.filtros,
                        areas: Array.from(state.filtros.areas),
                        modalidades: Array.from(state.filtros.modalidades),
                        niveis: Array.from(state.filtros.niveis),
                        estados: Array.from(state.filtros.estados)
                    }
                }),
                onRehydrateStorage: () => (state) => {
                    if (state?.filtros) {
                        state.filtros.areas = new Set(state.filtros.areas as any);
                        state.filtros.modalidades = new Set(state.filtros.modalidades as any);
                        state.filtros.niveis = new Set(state.filtros.niveis as any);
                        state.filtros.estados = new Set(state.filtros.estados as any);
                    }
                }
            }
        )
    )
);

export const useFiltros = () => {
    const filtros = useAppStore((state) => state.filtros);
    const updateFiltros = useAppStore((state) => state.updateFiltros);
    const resetFiltros = useAppStore((state) => state.resetFiltros);
    const hasFiltrosAtivos = useAppStore((state) => state.hasFiltrosAtivos);

    return {
        filtros,
        updateFiltros,
        resetFiltros,
        hasFiltrosAtivos: hasFiltrosAtivos()
    };
};

export const useUser = () => {
    const user = useAppStore((state) => state.user);
    const setUser = useAppStore((state) => state.setUser);

    return {
        user,
        setUser
    };
};

export const useCursosCadastrados = () => {
    const cursosCadastrados = useAppStore((state) => state.cursosCadastrados);
    const adicionarCurso = useAppStore((state) => state.adicionarCurso);
    const removerCurso = useAppStore((state) => state.removerCurso);

    return {
        cursosCadastrados,
        adicionarCurso,
        removerCurso
    };
};
