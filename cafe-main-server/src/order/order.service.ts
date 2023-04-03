import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MenuService } from 'src/menu/menu.service';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CreateOrderDto, IOrderItem } from './dto/order.dto';
import { OrderMenu } from './entity/order-menu.entity';
import { OrderProduct } from './entity/order-product.entity';
import { Order, OrderStatus } from './entity/order.entity';
import { UserService } from 'src/user/user.service';
import { instanceToPlain } from 'class-transformer';
import { AddressService } from './../address/address.service';
import { Cron, CronExpression } from '@nestjs/schedule';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
    @InjectRepository(OrderProduct)
    private readonly orderProductRepository: Repository<OrderProduct>,
    @InjectRepository(OrderMenu)
    private readonly orderMenuRepository: Repository<OrderMenu>,
    private readonly userService: UserService,
    private readonly menuService: MenuService,
    private readonly productService: ProductService,
    private readonly addressService: AddressService,
    private readonly notificationsService: NotificationsService,
  ) {}

  async getOrderById(id: string) {
    return await this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.user', 'user')
      .leftJoinAndSelect('order.address', 'address')
      .leftJoinAndSelect('order.orderProducts', 'orderProducts')
      .leftJoinAndSelect('order.orderMenus', 'orderMenus')
      .leftJoinAndSelect('orderMenus.menu', 'menu')
      .leftJoinAndSelect('orderProducts.product', 'product')
      .select([
        'order',
        'address',
        'orderProducts',
        'orderMenus',
        'menu',
        'product',
        'user.id',
        'user.name',
        'user.email',
        'user.phone',
      ])
      .where('order.id = :id', { id: id })
      .getOne();
  }

  getOrdersByUserId(id: string) {
    return this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.user', 'user')
      .leftJoinAndSelect('order.address', 'address')
      .leftJoinAndSelect('order.orderProducts', 'orderProducts')
      .leftJoinAndSelect('order.orderMenus', 'orderMenus')
      .leftJoinAndSelect('orderMenus.menu', 'menu')
      .leftJoinAndSelect('orderProducts.product', 'product')
      .select([
        'order',
        'address',
        'orderProducts',
        'orderMenus',
        'menu',
        'product',
        'user.id',
      ])
      .where('user.id = :id', { id: id })
      .getMany();
  }

  async createOrder(order: CreateOrderDto) {
    const products = await this.addProductsToOrder(order.itemIds);
    const menus = await this.addMenusToOrder(order.itemIds);
    const user = instanceToPlain(await this.userService.findById(order.userId));
    const address = await this.addressService.getById(order.addressId);
    const newOrder = await this.orderRepository.save({
      user: user,
      address: address,
      orderProducts: products,
      orderMenus: menus,
      stars: order.stars,
      deliveryDate: order.deliveryDate,
      comment: order.comment,
    });
    await this.notificationsService.createNotification(newOrder);
    return newOrder;
  }

  async addProductsToOrder(itemIds: IOrderItem[]) {
    const filteredIds = itemIds.filter((item) => item.isProduct === true);
    const products = filteredIds.map(async (item) => {
      const productItem = await this.productService.getPlainProductById(
        item.itemId,
      );
      if (!productItem) {
        throw new HttpException('Product not found', HttpStatus.BAD_REQUEST);
      }
      return { product: productItem, quantity: item.quantity };
    });
    return await this.orderProductRepository.save(await Promise.all(products));
  }

  async addMenusToOrder(itemIds: IOrderItem[]) {
    const filteredIds = itemIds.filter((item) => item.isProduct === false);
    const menus = filteredIds.map(async (item) => {
      const menuItem = await this.menuService.getPlainById(item.itemId);
      if (!menuItem) {
        throw new HttpException('Menu not found', HttpStatus.BAD_REQUEST);
      }
      return { menu: menuItem, quantity: item.quantity };
    });
    return await this.orderMenuRepository.save(await Promise.all(menus));
  }

  async getOrdersByUser(id: string) {
    return await this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.user', 'user')
      .leftJoinAndSelect('order.address', 'address')
      .leftJoinAndSelect('order.orderProducts', 'orderProducts')
      .leftJoinAndSelect('order.orderMenus', 'orderMenus')
      .leftJoinAndSelect('orderMenus.menu', 'menu')
      .leftJoinAndSelect('orderProducts.product', 'product')
      .select([
        'order',
        'address',
        'orderProducts',
        'orderMenus',
        'menu',
        'product',
        'user.id',
      ])
      .where('user.id = :id', { id: id })
      .getMany();
  }

  async getAllOrders() {
    return await this.orderRepository
      .createQueryBuilder('order')
      .leftJoinAndSelect('order.user', 'user')
      .leftJoinAndSelect('order.address', 'address')
      .leftJoinAndSelect('order.orderProducts', 'orderProducts')
      .leftJoinAndSelect('order.orderMenus', 'orderMenus')
      .leftJoinAndSelect('orderMenus.menu', 'menu')
      .leftJoinAndSelect('orderProducts.product', 'product')
      .select([
        'order',
        'address',
        'orderProducts',
        'orderMenus',
        'menu',
        'product',
        'user.id',
      ])
      .getMany();
  }

  async setRating(id: string, stars: number) {
    const order = await this.getOrderById(id);
    order.stars = stars;
    return await this.orderRepository.save(order);
  }

  async confirmOrder(id: string, status: OrderStatus) {
    const order = await this.getOrderById(id);
    order.status = status;
    this.notificationsService.updateNotification(order);
    return await this.orderRepository.save(order);
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async updateOrderStatus() {
    const orders = await this.getAllOrders();
    const now = new Date();

    orders.forEach((order) => {
      const OneMinuteAgo = new Date(now.getTime() - 1 * 30 * 1000);

      if (
        order.status === OrderStatus.READY &&
        order.deliveryDate <= OneMinuteAgo
      ) {
        order.status = OrderStatus.ON_WAY;
        this.confirmOrder(order.id, order.status);
      } else if (
        order.status === OrderStatus.ON_WAY &&
        order.deliveryDate <= OneMinuteAgo
      ) {
        order.status = OrderStatus.DELIVERED;
        this.confirmOrder(order.id, order.status);
      }
    });
  }
}
