import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
import { Animal } from '../animal/animal.entity';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id?: number

    @Column({
        nullable: false,
        length: 35,
        unique: true
    })
    name: string

    @ManyToMany(type => Animal, {
        cascade: true
    })
    @JoinTable({
        name: "user_animal",
         
    })
    animals: Animal[];

}