import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { AnimalModule } from '../animal/animal.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AnimalModule],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
