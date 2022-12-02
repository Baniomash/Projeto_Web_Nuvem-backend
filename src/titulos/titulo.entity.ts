import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Titulo extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false, type: 'varchar', length: 200})
    nome: string;

    @Column({nullable: false, type: 'integer'})
    ano: number;

    @Column({nullable: false, type: 'varchar', length: 20})
    tipo: string;
}