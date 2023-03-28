import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { API } from 'src/constants/endpoints';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuthGuard';

@Controller(API.ORDER)
export class OrderController {
  @Inject()
  private readonly orderService: OrderService;

  @Get(API.GET + API.ID_PARAM)
  async getOrder(@Param('id') id: string) {
    return this.orderService.getOrderById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(API.ADD)
  async createOrder(@Body() order: CreateOrderDto) {
    return this.orderService.createOrder(order);
  }

  @UseGuards(JwtAuthGuard)
  @Get(API.LIST + API.ID_PARAM)
  async getOrderByJwt(@Param('id') id: string) {
    return this.orderService.getOrdersByUser(id);
  }
}
