import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly UserRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.UserRepository.find();
    }
    findById(id: number) : Promise<User>{
         console.log(id)
        return this.UserRepository.findOne({where: {id}});
    }
    async createUser(name : string){
        await this.UserRepository.save({name});
    }

    async update(user: User){
        await this.UserRepository.save(user);
    }

}
