import { Controller, Get, Post, Query, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AnimalService } from '../animal/animal.service';
import { Animal } from 'src/animal/animal.entity';


@Controller('user')
export class UserController {
     constructor(
          private readonly userService: UserService,
          private readonly animalService: AnimalService
     ) { }
     @Get('/getUsers')
     async getUsers(): Promise<User[]> {
          return await this.userService.getUsers();
     }

     @Post('/createUser')
     async createUser(@Query('name') name: string) {
          await
               this.userService.createUser(name);
     }

     @Post('/addFavAnimal')
     async addFavoriteAnimal(@Query('animalName') animalName: string, @Query('userId') uid: number) {
          const user = await this.userService.findById(uid);
          const animal = await this.animalService.findFavoriteAnimal(animalName);
          if (animal && user) {
               if (user.animals) {
                    user.animals.push(animal);
               }
               else {
                    user.animals = [animal];
               }
          }
          console.log("userrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr ", user, uid)
          await this.userService.update(user);
     }


} 
