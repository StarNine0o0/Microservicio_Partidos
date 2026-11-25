import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, In, Repository } from 'typeorm';
import { Partido } from './entities/partido.entity.js';
import type { CambiosPartido, DatosPartido, FiltroPartidos } from './partidos.types.js';

@Injectable()
export class PartidosService {
  constructor(
    @InjectRepository(Partido)
    private readonly repo: Repository<Partido>,
  ) {}

  create(data: DatosPartido): Promise<Partido> {
    const partido = this.repo.create({
      ...data,
      fechaHora: new Date(data.fechaHora),
    });
    return this.repo.save(partido);
  }

  findAll(f: FiltroPartidos = {}): Promise<Partido[]> {
    const base: FindOptionsWhere<Partido> = {};
    if (f.jornadaId) base.jornadaId = f.jornadaId;
    if (f.jornadaIds?.length) base.jornadaId = In(f.jornadaIds);
    if (f.serieId) base.serieId = f.serieId;
    if (f.arbitroId) base.arbitroId = f.arbitroId;

    const where = f.equipoId
      ? [
          { ...base, equipoLocalId: f.equipoId },
          { ...base, equipoVisitanteId: f.equipoId },
        ]
      : base;

    return this.repo.find({ where, order: { fechaHora: 'ASC' } });
  }

  findOne(id: number): Promise<Partido | null> {
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, data: CambiosPartido): Promise<Partido | null> {
    const { fechaHora, ...resto } = data;
    await this.repo.update(id, {
      ...resto,
      ...(fechaHora ? { fechaHora: new Date(fechaHora) } : {}),
    });
    return this.findOne(id);
  }

  async remove(id: number): Promise<{ deleted: boolean }> {
    const res = await this.repo.delete(id);
    return { deleted: (res.affected ?? 0) > 0 };
  }
}