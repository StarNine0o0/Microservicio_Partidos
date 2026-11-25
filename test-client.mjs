import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

const c = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: { host: 'localhost', port: 3001 },
});

const nuevo = await firstValueFrom(
  c.send('partidos.create', {
    jornadaId: 1,
    equipoLocalId: 1,
    equipoVisitanteId: 2,
    fechaHora: '2026-12-01T10:00:00',
  }),
);
console.log('creado:', nuevo);
console.log('lista:', await firstValueFrom(c.send('partidos.findAll', {})));
await c.close();