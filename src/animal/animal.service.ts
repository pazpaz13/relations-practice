import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animal.entity';


@Injectable()
export class AnimalService {
    constructor(@InjectRepository(Animal) private readonly AnimalRepository: Repository<Animal>) { }
    
    async getAnimals(): Promise<Animal[]> {
        return await this.AnimalRepository.find();
    }

    async createAnimals(name : string){
        await this.AnimalRepository.save({name});
    }

    async findFavoriteAnimal(name: string): Promise<Animal>{
       const animal =  await this.AnimalRepository.findOne({where: {name}});
       return animal;
    }
}
