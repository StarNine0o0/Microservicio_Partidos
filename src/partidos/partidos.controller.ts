import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PartidosService } from './partidos.service.js';
import type { CambiosPartido, DatosPartido, FiltroPartidos } from './partidos.types.js';

@Controller()
export class PartidosController {
  constructor(private readonly service: PartidosService) {}

  @MessagePattern('partidos.create')
  create(@Payload() data: DatosPartido) {
    return this.service.create(data);
  }

  @MessagePattern('partidos.findAll')
  findAll(@Payload() filtro: FiltroPartidos) {
    return this.service.findAll(filtro);
  }

  @MessagePattern('partidos.findOne')
  findOne(@Payload() id: number) {
    return this.service.findOne(id);
  }

  @MessagePattern('partidos.update')
  update(@Payload() p: { id: number; data: CambiosPartido }) {
    return this.service.update(p.id, p.data);
  }

  @MessagePattern('partidos.remove')
  remove(@Payload() id: number) {
    return this.service.remove(id);
  }
}