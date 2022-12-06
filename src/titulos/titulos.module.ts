import { Module } from '@nestjs/common';
import { TitulosService } from './titulos.service';
import { TitulosController } from './titulos.controller';
import { TituloRepository } from './titulo.repository';

@Module({
  providers: [TitulosService, TituloRepository],
  controllers: [TitulosController]
})
export class TitulosModule {}
