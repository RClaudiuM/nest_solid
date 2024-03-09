import { Injectable } from '@nestjs/common';
import { NotificationType, notificationGateways } from './notification.gateway';

// Open/Closed principle - Open for extension but closed for modifications
// The NotificationService class needs to be open for extension, as new notification types will need to be added without modifying the existing code.

//! HOW?
// by introducing a centralized way to manege notification types

//? PROS
// Promote code reusability and extensibility
// Reduces the risk of introducing bugs when modifying existing code/ extending functionality
// Encourages the use of interfaces and abstract classes ( inheritance and compositions as design patterns )

//! CONS
// Can be over-engineered and introduce unnecessary complexity for simple applications.
// Requires careful design to anticipate future changes and extensions.
// May lead to complex hierarchies if not applied carefully.

@Injectable()
export class NotificationService {
  constructor() {}

  //❌ Bad practice to handle new notifications
  public async badSendNotification(
    notificationType: NotificationType,
    message: string,
  ) {
    if (notificationType === NotificationType.EMAIL) {
      // handle email notification
    } else if (notificationType === NotificationType.SMS) {
      // handle sms notification
    } else if (notificationType === NotificationType.PUSH) {
      // handle push notification
    } else {
      throw new Error(`${message}`);
    }
  }

  //✅ Good practice to handle notifications
  public async sendNotification(
    notificationType: NotificationType,
    message: string,
  ) {
    // What does `notificationGateways` does?
    // Abstracts sending notifications, provides common interface for different channels, decouples application from specific implementation details.
    const gateway = notificationGateways[notificationType];
    if (!gateway) {
      throw new Error('Invalid notification type');
    }

    return gateway.sendNotification(message);
  }
}
