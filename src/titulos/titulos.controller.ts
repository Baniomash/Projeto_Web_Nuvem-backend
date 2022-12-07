import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdicionarTituloDto } from './dto/adicionar-titulo.dto';
import { RetornaTituloDto } from './dto/retorna-titulo.dto';
import { Titulo } from './titulo.entity';
import { TitulosService } from './titulos.service';

@Controller('titulos/')
export class TitulosController {
    constructor(private titulosService: TitulosService){}

    
    @Post()
    async adicionarTitulo(
        @Body()adicionarTituloDto:AdicionarTituloDto,
    ): Promise<RetornaTituloDto> {
        const titulo = await this.titulosService.adicionarTituloDto(adicionarTituloDto);
        return {
            nome: titulo.nome,
            ano: titulo.ano,
            tipo: titulo.tipo,
            message: 'Titulo cadastrado com sucesso',
        }
    }

    @Get()
    async receberTitulos() : Promise<Titulo[]> {
        const titulos = await this.titulosService.receberTitulosDto();
        return titulos;
    }

    @Get('estaduais/')
    async receberTitulosEstaduais() : Promise<Titulo[]> {
        const titulos = await this.titulosService.receberTitulosEstaduais();
        return titulos;
    }
}
