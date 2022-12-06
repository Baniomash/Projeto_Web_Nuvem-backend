import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdicionarTituloDto } from './dto/adicionar-titulo.dto';
import { Titulo } from './titulo.entity';
import { TituloRepository } from './titulo.repository';

@Injectable()
export class TitulosService {
    constructor(@InjectRepository(TituloRepository)
    private tituloRepository: TituloRepository,
    ) {}
    
    async receberTitulosDto() {
        const titulos = this.tituloRepository.receberTitulos();
        return titulos;
    }

    async adicionarTituloDto(adicionarTituloDto:AdicionarTituloDto):Promise<Titulo> {
        return this.tituloRepository.adicionarTituloDto(adicionarTituloDto);
    }
}