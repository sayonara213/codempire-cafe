import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { API } from 'src/constants/endpoints';

@Controller(API.ORDER)
export class OrderController {
  @Inject()
  private readonly orderService: OrderService;

  @Get(API.ID_PARAM)
  async getOrder(@Param('id') id: string) {
    return this.orderService.getOrderById(id);
  }

  @Post(API.ADD)
  async createOrder(@Body() order: CreateOrderDto) {
    return this.orderService.createOrder(order);
  }
}
