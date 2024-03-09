import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notifications.service';
import { NotificationType } from './notification.gateway';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('notification')
  async sendNotification(
    @Body() body: { message: string; notificationType: NotificationType },
  ): Promise<void> {
    const { message, notificationType } = body;
    await this.notificationService.sendNotification(notificationType, message);
  }

  // @Post('email')
  // async sendEmailNotification(
  //   @Body() body: { message: string },
  // ): Promise<void> {
  //   const { message } = body;
  //   await this.notificationService.sendEmailNotification(message);
  // }

  // @Post('sms')
  // async sendSMSNotification(@Body() body: { message: string }): Promise<void> {
  //   const { message } = body;
  //   await this.notificationService.sendSMSNotification(message);
  // }

  // @Post('push')
  // async sendPushNotification(@Body() body: { message: string }): Promise<void> {
  //   const { message } = body;
  //   await this.notificationService.sendPushNotification(message);
  // }

  // @Post('whatsapp')
  // async sendWhatsappNotification(
  //   @Body() body: { message: string },
  // ): Promise<void> {
  //   const { message } = body;
  //   await this.notificationService.sendWhatsappNotification(message);
  // }
}
