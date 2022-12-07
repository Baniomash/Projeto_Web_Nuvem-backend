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
    
    async receberTitulosDto():Promise<Titulo[]> {
        const titulos = await this.tituloRepository.receberTitulos();
        console.log(titulos);
        if(titulos.length === 0){
            return await this.adicionaTodosTitulos();
        } else {
            return titulos;
        }
    }
    async adicionarTituloDto(adicionarTituloDto:AdicionarTituloDto):Promise<Titulo> {
        return this.tituloRepository.adicionarTituloDto(adicionarTituloDto);
    }
    async adicionaTodosTitulos():Promise<Titulo[]> {
        const titulos: AdicionarTituloDto[] = [{nome: "Copa do Mundo de Clubes da FIFA", ano: 2005, tipo: "Internacional"}, {nome: "Copa Intercontinental", ano: 1992, tipo: "Internacional"}, {nome: "Copa Intercontinental", ano: 1993, tipo: "Internacional"}, {nome: "Copa Libertadores da América", ano: 1992, tipo: "Internacional"}, {nome: "Copa Libertadores da América", ano: 1993, tipo: "Internacional"}, {nome: "Copa Libertadores da América", ano: 2005, tipo: "Internacional"}, {nome: "Copa Sul-Americana", ano: 2012, tipo: "Internacional"}, {nome: "Supercopa Libertadores", ano: 1993, tipo: "Internacional"}, {nome: "Copa CONMEBOL", ano: 1994, tipo: "Internacional"}, {nome: "Recopa Sul-Americana", ano: 1993, tipo: "Internacional"}, {nome: "Recopa Sul-Americana", ano: 1994, tipo: "Internacional"}, {nome: "Copa Master da CONMEBOL", ano: 1996, tipo: "Internacional"}, {nome: "Campeonato Brasileiro", ano: 1977, tipo: "Nacional"}, {nome: "Campeonato Brasileiro", ano: 1986, tipo: "Nacional"}, {nome: "Campeonato Brasileiro", ano: 1991, tipo: "Nacional"}, {nome: "Campeonato Brasileiro", ano: 2006, tipo: "Nacional"}, {nome: "Campeonato Brasileiro", ano: 2007, tipo: "Nacional"}, {nome: "Campeonato Brasileiro", ano: 2008, tipo: "Nacional"}, {nome: "Torneio Rio–São Paulo", ano: 2001, tipo: "Estadual"}, 
                                                {nome: "Taça dos Campeões Rio–São Paulo", ano: 1931, tipo: "Estadual"}, {nome: "Taça dos Campeões Rio–São Paulo", ano: 1943, tipo: "Estadual"}, {nome: "Taça dos Campeões Rio–São Paulo", ano: 1945, tipo: "Estadual"}, {nome: "Taça dos Campeões Rio–São Paulo", ano: 1946, tipo: "Estadual"}, {nome: "Taça dos Campeões Rio–São Paulo", ano: 1948, tipo: "Estadual"}, {nome: "Taça dos Campeões Rio–São Paulo", ano: 1953, tipo: "Estadual"}, {nome: "Taça dos Campeões Rio–São Paulo", ano: 1957, tipo: "Estadual"}, {nome: "Taça dos Campeões Rio–São Paulo", ano: 1975, tipo: "Estadual"}, {nome: "Taça dos Campeões Rio–São Paulo", ano: 1980, tipo: "Estadual"}, {nome: "Taça dos Campeões Rio–São Paulo", ano: 1985, tipo: "Estadual"}, {nome: "Taça dos Campeões Rio–São Paulo", ano: 1987, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1931, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1943, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1945, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1946, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1948, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1949, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1953, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1957, tipo: "Estadual"}, 
                                                {nome: "Campeonato Paulista", ano: 1970, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1971, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1975, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1980, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1981, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1985, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1987, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1989, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1991, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1992, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 1998, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 2000, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 2005, tipo: "Estadual"}, {nome: "Campeonato Paulista", ano: 2021, tipo: "Estadual"}, {nome: "Supercampeonato Paulista", ano: 2002, tipo: "Estadual"}
                                              ];

        for(var i = 0; i < titulos.length; i++) {
            this.adicionarTituloDto(titulos[i]);
        }

        return this.receberTitulosDto();
    }
    criarTitulo(nome:string, ano:number, tipo:string){
        return {nome: nome, ano: ano, tipo: tipo};
    }
}