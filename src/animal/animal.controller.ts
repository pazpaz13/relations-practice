import { Controller, Get, Query, Post } from '@nestjs/common';
import { Animal } from './animal.entity';
import { AnimalService } from './animal.service';

@Controller('animal')
export class AnimalController {
     constructor(private readonly AnimalService: AnimalService) {}

    @Get('/getAnimals')
     async getAnimals(): Promise<Animal[]> {
      return await this.AnimalService.getAnimals();
     }

     @Post('/createAnimal')
     async createAnimals(@Query('name') name: string){
          await this.AnimalService.createAnimals(name);
     } 
}
