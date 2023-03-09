import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Allergen } from './allergen.entity';
import { AllergenController } from './allergen.controller';
import { AllergenService } from './allergen.service';

@Module({
  imports: [TypeOrmModule.forFeature([Allergen])],
  controllers: [AllergenController],
  providers: [AllergenService],
})
export class AllergenModule {}
