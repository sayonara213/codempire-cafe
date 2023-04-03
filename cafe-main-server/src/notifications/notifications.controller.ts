import { Controller, Get, Param, Put, Query, Sse } from '@nestjs/common';
import { Observable, filter, map } from 'rxjs';
import { MessageStream } from './MessageStream';
import { API } from 'src/constants/endpoints';
import { Notification } from './entity/notifications.entity';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private readonly messageStream: MessageStream,
    private readonly notificationsService: NotificationsService,
  ) {}

  @Sse(API.SSE_ADMIN)
  sseAdmin(@Query('lastEventDate') lastEventDate: string): Observable<any> {
    const lastEventDateObj = new Date(lastEventDate);
    const stream = this.messageStream.getStream();
    return stream.pipe(
      filter((message) => new Date(message.data.createdAt) > lastEventDateObj),
      filter((message) => message.type === 'notification-created'),
      map((message) => {
        return `${JSON.stringify(message.data)}\n\n`;
      }),
    );
  }

  @Sse(API.SSE_USER + API.ID_PARAM)
  sseUser(
    @Param('id') id: string,
    @Query('lastEventDate') lastEventDate: string,
  ): Observable<any> {
    const lastEventDateObj = new Date(lastEventDate);
    const stream = this.messageStream.getStream();
    return stream.pipe(
      filter(
        (message) =>
          message.type === 'notification-updated' &&
          message.data.order.user.id === id,
      ),
      filter((message) => new Date(message.data.createdAt) > lastEventDateObj),
      map((message) => {
        return `${JSON.stringify(message.data)}\n\n`;
      }),
    );
  }

  @Get(API.LIST + '/user' + API.ID_PARAM)
  async getNotifications(@Param('id') id: string): Promise<Notification[]> {
    return this.notificationsService.getNotifications(id);
  }

  @Get(API.LIST + '/admin')
  async getAdminNotifications(): Promise<Notification[]> {
    return await this.notificationsService.getAdminNotifications();
  }

  @Put(API.UPDATE + API.ID_PARAM)
  async updateNotification(@Param('id') id: string): Promise<Notification> {
    return await this.notificationsService.setNotificationAsRead(id);
  }
}
