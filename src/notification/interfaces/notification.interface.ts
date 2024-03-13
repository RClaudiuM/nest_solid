//? Interface segregation principle

// We should define fine grained interfaces instead of defining a single interface with all the properties

// PROS
// 1. We reduce coupling: Client-specific interfaces reduce coupling between components by only exposing relevant methods, leading to a more modular and maintainable system.
// 2. We avoid fat interfaces: By having smaller, more specific interfaces, we avoid the problem of fat interfaces that contain too many methods.
// 3. We avoid the need to implement unnecessary methods: By having smaller interfaces, we avoid the need to implement unnecessary methods in the client class.
// 4. We have a more clearer intent: By having smaller, more specific interfaces, we make the intent of the interface clearer, leading to a more understandable and maintainable system.

//! CONS
// 1. Increased number of interfaces
// 2. Maintenance Overhead - If we have a large number of interfaces, it can be difficult to manage and maintain them.

//! bad approach as it is not scalable and is not separating the concerns
export interface Notification {
  to: string; // for email
  subject: string; // for email
  body: string; // for email && push
  phoneNumber: string; // for sms
  message: string; // for sms
  userId: number; // for push
  title: string; // for push
  id: number; // for push
  read: boolean; // for push
  from: string; // for email
}

// Good approach
export interface EmailNotification {
  to: string;
  subject: string;
  body: string;
}

export interface SmsNotification {
  phoneNumber: string;
  message: string;
}

// .... other interfaces
