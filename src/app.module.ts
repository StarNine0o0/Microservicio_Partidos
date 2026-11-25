import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartidosModule } from './partidos/partidos.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'partidos',
      password: 'partidos123',
      database: 'liga_partidos',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PartidosModule,
  ],
})
export class AppModule {}