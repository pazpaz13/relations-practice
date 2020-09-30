import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { Animal } from './animal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  providers: [AnimalService],
  controllers: [AnimalController],
  exports: [AnimalService]
})
export class AnimalModule {}
