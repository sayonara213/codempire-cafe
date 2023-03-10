import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from 'src/product/entity/product.entity';
import { CreateProductDto } from './dto/product.dto';
import { API } from './../constants/endpoints';
import { Allergen } from 'src/allergen/allergen.entity';

@Controller('product')
export class ProductController {
  @Inject(ProductService)
  private readonly service: ProductService;

  @Get(API.LIST_ALL)
  getProducts(): Promise<Product[] | undefined> {
    return this.service.getAllProduct();
  }

  @Get(API.LIST_ALL + '/:id/allergens')
  getProductAllergens(@Param('id') id: string): Promise<Allergen[]> {
    return this.service.findProductAllergens(id);
  }

  @Post(API.ADD)
  addProduct(@Body() product: CreateProductDto): Promise<Product | undefined> {
    return this.service.addProduct(product);
  }

  @Delete(API.DELETE)
  deleteProduct(@Body() id: string): Promise<Product> {
    return this.service.deleteProduct(id);
  }

  @Put(API.UPDATE)
  updateProduct(
    @Body('id') id: string,
    @Body() product: CreateProductDto,
  ): Promise<Product> {
    return this.service.updateProduct(id, product);
  }

  @Get(API.GET)
  getProduct(@Param('id') id: string): Promise<Product> {
    return this.service.getProductById(id);
  }
}
