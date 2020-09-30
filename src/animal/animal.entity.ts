import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Animal {

    @PrimaryGeneratedColumn()
    id?: number

    @Column({
        nullable: false,
        length: 43,
        unique: true
    })
    name: string

}