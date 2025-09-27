import { mockProgramas } from '../mocks/programas';
import type { Programa, AreaTecnologia } from '../types/domain';

export async function getProgramasDestaque(): Promise<Programa[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockProgramas.filter(p => p.destaque).slice(0, 8);
}

export async function getProgramasPopulares(): Promise<Programa[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockProgramas
        .sort((a, b) => (b.avaliacoes?.total || 0) - (a.avaliacoes?.total || 0))
        .slice(0, 8);
}

export async function getProgramasPorCategoria(area: AreaTecnologia): Promise<Programa[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockProgramas
        .filter(p => p.area === area)
        .slice(0, 8);
}

export async function getProgramaById(id: string): Promise<Programa | null> {
    await new Promise(resolve => setTimeout(resolve, 100));
    return mockProgramas.find(p => p.id === id) || null;
}
