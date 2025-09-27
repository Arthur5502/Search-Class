import { create } from 'zustand';
import { persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { Usuario, FiltrosPrograma, Programa } from '@/types/domain';

interface AppState {
    // Estado da aplicação
    user: Usuario | null;
    filtros: FiltrosPrograma;
    favoritos: Set<string>;
    resultados: Programa[];
    loading: boolean;
    error: string | null;

    // Paginação
    currentPage: number;
    totalPages: number;
    totalResults: number;

    // Actions
    setUser: (user: Usuario | null) => void;
    updateFiltros: (filtros: Partial<FiltrosPrograma>) => void;
    resetFiltros: () => void;
    toggleFavorito: (programaId: string) => void;
    setResultados: (programas: Programa[], total: number) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setCurrentPage: (page: number) => void;

    // Computed getters
    favoritosArray: () => string[];
    hasFiltrosAtivos: () => boolean;
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
                // Estado inicial
                user: null,
                filtros: initialFiltros,
                favoritos: new Set(),
                resultados: [],
                loading: false,
                error: null,
                currentPage: 1,
                totalPages: 0,
                totalResults: 0,

                // Actions
                setUser: (user) => set({ user }),

                updateFiltros: (novosFiltros) => set((state) => {
                    Object.assign(state.filtros, novosFiltros);
                    state.currentPage = 1; // Reset página ao filtrar
                }),

                resetFiltros: () => set((state) => {
                    state.filtros = { ...initialFiltros };
                    state.currentPage = 1;
                }),

                toggleFavorito: (programaId) => set((state) => {
                    if (state.favoritos.has(programaId)) {
                        state.favoritos.delete(programaId);
                    } else {
                        state.favoritos.add(programaId);
                    }

                    // Sincroniza com o usuário se logado
                    if (state.user) {
                        state.user.favoritos = Array.from(state.favoritos);
                    }
                }),

                setResultados: (programas, total) => set((state) => {
                    state.resultados = programas;
                    state.totalResults = total;
                    state.totalPages = Math.ceil(total / 12); // 12 items por página
                }),

                setLoading: (loading) => set({ loading }),
                setError: (error) => set({ error }),
                setCurrentPage: (page) => set({ currentPage: page }),

                // Computed getters
                favoritosArray: () => Array.from(get().favoritos),
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
                }
            })),
            {
                name: 'talent-platform-store',
                // Serialização customizada para Sets
                partialize: (state) => ({
                    user: state.user,
                    favoritos: Array.from(state.favoritos),
                    filtros: {
                        ...state.filtros,
                        areas: Array.from(state.filtros.areas),
                        modalidades: Array.from(state.filtros.modalidades),
                        niveis: Array.from(state.filtros.niveis),
                        estados: Array.from(state.filtros.estados)
                    }
                }),
                // Reidratação customizada para Sets
                onRehydrateStorage: () => (state) => {
                    if (state?.filtros) {
                        // Reconstrói os Sets após hidratação
                        state.filtros.areas = new Set(state.filtros.areas as any);
                        state.filtros.modalidades = new Set(state.filtros.modalidades as any);
                        state.filtros.niveis = new Set(state.filtros.niveis as any);
                        state.filtros.estados = new Set(state.filtros.estados as any);
                    }
                    if (state?.favoritos) {
                        state.favoritos = new Set(state.favoritos as any);
                    }
                }
            }
        )
    )
);

// Hooks utilitários para usar partes específicas do store
export const useFiltros = () => useAppStore((state) => ({
    filtros: state.filtros,
    updateFiltros: state.updateFiltros,
    resetFiltros: state.resetFiltros,
    hasFiltrosAtivos: state.hasFiltrosAtivos()
}));

export const useFavoritos = () => useAppStore((state) => ({
    favoritos: state.favoritos,
    favoritosArray: state.favoritosArray(),
    toggleFavorito: state.toggleFavorito
}));

export const useUser = () => useAppStore((state) => ({
    user: state.user,
    setUser: state.setUser
}));
