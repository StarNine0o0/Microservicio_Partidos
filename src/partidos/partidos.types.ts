import type { EstadoPartido } from './entities/partido.entity.js';

export interface DatosPartido {
  jornadaId: number;
  equipoLocalId: number;
  equipoVisitanteId: number;
  sedeId?: number | null;
  arbitroId?: number | null;
  serieId?: number | null;
  numeroPartido?: number | null;
  penalesLocal?: number | null;
  penalesVisitante?: number | null;
  fechaHora: string | Date;
  golesLocal?: number;
  golesVisitante?: number;
  estado?: EstadoPartido;
}

export type CambiosPartido = Partial<DatosPartido>;

export interface FiltroPartidos {
  jornadaId?: number;
  jornadaIds?: number[];
  serieId?: number;
  arbitroId?: number;
  /** partidos donde el equipo es local o visitante */
  equipoId?: number;
}