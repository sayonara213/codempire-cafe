import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notification } from './entity/notifications.entity';
import { MessageStream } from './MessageStream';

@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  controllers: [NotificationsController],
  providers: [NotificationsService, MessageStream],
  exports: [NotificationsService, MessageStream],
})
export class NotificationsModule {}
