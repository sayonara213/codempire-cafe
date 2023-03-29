import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { API } from 'src/constants/endpoints';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuthGuard';
import { RoleGuard } from './../auth/guard/roleGuard';
import { UserRole } from 'src/user/entity/user.entity';
import { Roles } from './../auth/roles/roles.decorator';

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

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Get(API.LIST)
  async getOrders() {
    return this.orderService.getAllOrders();
  }
}
