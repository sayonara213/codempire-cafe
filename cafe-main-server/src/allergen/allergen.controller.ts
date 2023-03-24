import { Controller, Get, Inject } from '@nestjs/common';
import { AllergenService } from 'src/allergen/allergen.service';
import { API } from 'src/constants/endpoints';

@Controller(API.ALLERGEN)
export class AllergenController {
  @Inject(AllergenService)
  private readonly service: AllergenService;

  @Get(API.LIST)
  getAllergens() {
    return this.service.getAll();
  }
}
