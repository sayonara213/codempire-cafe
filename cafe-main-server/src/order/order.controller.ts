import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateOrderDto } from './dto/order.dto';
import { OrderService } from './order.service';
import { API } from 'src/constants/endpoints';
import { JwtAuthGuard } from 'src/auth/guard/jwtAuthGuard';
import { RoleGuard } from './../auth/guard/roleGuard';
import { UserRole } from 'src/user/entity/user.entity';
import { Roles } from './../auth/roles/roles.decorator';
import { OrderStatus } from './entity/order.entity';
import { Cron, CronExpression } from '@nestjs/schedule';

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

  @Put(API.RATING + API.ID_PARAM)
  async rateOrder(@Param('id') id: string, @Body() rating: { stars: number }) {
    return this.orderService.setRating(id, rating.stars);
  }

  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RoleGuard)
  @Put(API.ORDER_STATUS + API.ID_PARAM)
  async confirmOrder(
    @Param('id') id: string,
    @Body() status: { status: OrderStatus },
  ) {
    return this.orderService.confirmOrder(id, status.status);
  }
}
