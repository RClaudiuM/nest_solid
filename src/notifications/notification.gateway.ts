// Open/Closed principle

// Define an abstract class to serve as the contract for sending notifications.
export abstract class NotificationGateway {
  abstract sendNotification(message: string): Promise<string>;
}

// Concrete notification gateways extend the abstract class to provide specific implementations for different notification channels.

class EmailNotification implements NotificationGateway {
  async sendNotification(message: string): Promise<string> {
    // Send email notification
    return message;
  }
}

class SMSNotification implements NotificationGateway {
  async sendNotification(message: string): Promise<string> {
    // Send SMS notification
    return message;
  }
}

class PushNotification implements NotificationGateway {
  async sendNotification(message: string): Promise<string> {
    // Send push notification
    return message;
  }
}

// Centralized management of notification types is facilitated through an enum.
export enum NotificationType {
  EMAIL = 'email',
  SMS = 'sms',
  PUSH = 'push',
  // TODO: add WhatsappNotification
  // WHATSAPP = 'whatsapp',
}

// TODO: add WhatsappNotification

// export class WhatsappNotification implements Notification {
//   async send(message: string): Promise<string> {
//     // Send WhatsApp notification
//     return message;
//   }
// }

// A dictionary maps each notification type to its corresponding concrete notification gateway instance.
export const notificationGateways: Record<
  NotificationType,
  NotificationGateway
> = {
  [NotificationType.EMAIL]: new EmailNotification(),
  [NotificationType.SMS]: new SMSNotification(),
  [NotificationType.PUSH]: new PushNotification(),
};
