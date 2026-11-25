import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export type EstadoPartido = 'PROGRAMADO' | 'EN_JUEGO' | 'FINALIZADO' | 'SUSPENDIDO';

@Entity('partidos')
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  jornadaId: number;

  @Column({ type: 'int' })
  equipoLocalId: number;

  @Column({ type: 'int' })
  equipoVisitanteId: number;

  @Column({ type: 'int', nullable: true })
  sedeId: number | null;

  @Column({ type: 'int', nullable: true })
  arbitroId: number | null;

  @Column({ type: 'int', nullable: true })
  serieId: number | null;

  @Column({ type: 'int', nullable: true })
  numeroPartido: number | null;

  @Column({ type: 'int', nullable: true })
  penalesLocal: number | null;

  @Column({ type: 'int', nullable: true })
  penalesVisitante: number | null;

  @Column({ type: 'datetime' })
  fechaHora: Date;

  @Column({ type: 'int', default: 0 })
  golesLocal: number;

  @Column({ type: 'int', default: 0 })
  golesVisitante: number;

  @Column({
    type: 'enum',
    enum: ['PROGRAMADO', 'EN_JUEGO', 'FINALIZADO', 'SUSPENDIDO'],
    default: 'PROGRAMADO',
  })
  estado: EstadoPartido;

  @CreateDateColumn()
  createdAt: Date;
}