import { Body, Controller, Post } from '@nestjs/common';
import { AdicionarTituloDto } from './dto/adicionar-titulo.dto';
import { RetornaTituloDto } from './dto/retorna-titulo.dto';
import { TitulosService } from './titulos.service';

@Controller('titulos')
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
            message: 'Titulo cadastrado com sucesso',
        }
    }
}
