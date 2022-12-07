import { Module } from '@nestjs/common';
import { TitulosService } from './titulos.service';
import { TitulosController } from './titulos.controller';
import { TituloRepository } from './titulo.repository';

import { TypeOrmExModule } from 'src/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([TituloRepository])],
  providers: [TitulosService],
  controllers: [TitulosController],
})
export class TitulosModule {}
