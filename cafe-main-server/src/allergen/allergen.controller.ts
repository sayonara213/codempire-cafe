import { Controller, Get, Inject } from '@nestjs/common';
import { AllergenService } from 'src/allergen/allergen.service';
import { API } from 'src/constants/endpoints';

@Controller('allergen')
export class AllergenController {
  @Inject(AllergenService)
  private readonly service: AllergenService;

  @Get(API.LIST_ALL)
  getAllergens() {
    return this.service.getAllAllergens();
  }
}
