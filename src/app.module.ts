import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AnimalModule } from './animal/animal.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
