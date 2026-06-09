import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CinemaModule } from './cinema/cinema.module';
import { SalasModule } from './salas/salas.module';
import { FilmesModule } from './filmes/filmes.module';
import { SessoesModule } from './sessoes/sessoes.module';
import { IngressosModule } from './ingressos/ingressos.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { LanchesModule } from './lanches/lanches.module';

@Module({
  imports: [PrismaModule, CinemaModule, SalasModule, FilmesModule, SessoesModule, IngressosModule, PedidosModule, LanchesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
