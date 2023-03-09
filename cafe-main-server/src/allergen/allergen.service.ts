import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Allergen } from './allergen.entity';

@Injectable()
export class AllergenService {
  constructor(
    @InjectRepository(Allergen)
    private allergenRepository: Repository<Allergen>,
  ) {}

  async getAllergenById(id: string): Promise<Allergen> {
    return await this.allergenRepository.findOne({
      where: { id: id },
    });
  }

  async getAllAllergens(): Promise<Allergen[]> {
    return this.allergenRepository.find();
  }
}
