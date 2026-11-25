import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Partido } from './entities/partido.entity.js';
import { PartidosService } from './partidos.service.js';
import { PartidosController } from './partidos.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Partido])],
  controllers: [PartidosController],
  providers: [PartidosService],
})
export class PartidosModule {}