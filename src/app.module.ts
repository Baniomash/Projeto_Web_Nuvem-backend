import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './typeorm.config';
import { TitulosModule } from './titulos/titulos.module';
import { TypeOrmExModule } from './typeorm-ex.module';
import { TituloRepository } from './titulos/titulo.repository';
import { TitulosService } from './titulos/titulos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig), TitulosModule,
    TypeOrmExModule.forCustomRepository([TituloRepository]),
  ],
  controllers: [AppController],
  providers: [AppService, TitulosService],
})
export class AppModule {}
