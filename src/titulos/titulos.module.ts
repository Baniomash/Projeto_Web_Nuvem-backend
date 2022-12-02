import { Module } from '@nestjs/common';
import { TitulosService } from './titulos.service';
import { TitulosController } from './titulos.controller';

@Module({
  providers: [TitulosService],
  controllers: [TitulosController]
})
export class TitulosModule {}
