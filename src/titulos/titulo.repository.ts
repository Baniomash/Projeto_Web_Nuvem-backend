import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { CustomRepository } from "src/typeorm-ex.decorator";
import { Repository } from "typeorm";
import { AdicionarTituloDto } from "./dto/adicionar-titulo.dto";
import { Titulo } from "./titulo.entity";


@CustomRepository(Titulo)
export class TituloRepository extends Repository<Titulo> {
    async receberTitulos(): Promise<Titulo[]> {
        const titulos = this.find();
        return titulos;
    }
    async adicionarTituloDto(
        adicionarTituloDto: AdicionarTituloDto,        
    ): Promise<Titulo> {
        const {nome, ano, tipo} = adicionarTituloDto;

        const titulo = this.create();
        titulo.nome = nome;
        titulo.ano = ano;
        titulo.tipo = tipo;
        try {
            await titulo.save();
            return titulo;
        } catch (error) {
            if (error.code.toString() === '23505') {
                throw new ConflictException('ERRO');
            } else {
                throw new InternalServerErrorException(
                    'Erro ao salvar o titulo no banco de dados',
                );
            }
        }    
    }

}