import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notification } from './entity/notifications.entity';
import { Order } from 'src/order/entity/order.entity';
import { MessageStream } from './MessageStream';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
    private readonly messageStream: MessageStream,
  ) {}

  async createNotification(order: Order) {
    const notification = await this.notificationRepository.save({
      userId: order.user.id,
      order: order,
      isAdmin: true,
    });
    this.messageStream.send({
      type: 'notification-created',
      data: notification,
    });
  }

  async updateNotification(order: Order) {
    const notification = await this.notificationRepository.save({
      userId: order.user.id,
      order: order,
      isAdmin: false,
    });
    this.messageStream.send({
      type: 'notification-updated',
      data: notification,
    });
  }

  async getNotifications(userId: string): Promise<Notification[]> {
    return await this.notificationRepository.find({
      where: { userId: userId, isAdmin: false },
      order: { createdAt: 'DESC' },
      relations: ['order', 'order.user'],
    });
  }

  async getAdminNotifications(): Promise<Notification[]> {
    const notifications = await this.notificationRepository.find({
      where: { isAdmin: true },
      order: { createdAt: 'DESC' },
      relations: ['order', 'order.user'],
    });
    return notifications;
  }

  async setNotificationAsRead(id: string) {
    const notification = await this.notificationRepository.findOne({
      where: { id: id },
    });
    notification.isSeen = true;
    return await this.notificationRepository.save(notification);
  }
}
