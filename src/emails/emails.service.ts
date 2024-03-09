import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailsService {
  sendWelcomeEmail(user: any) {
    console.log(user);
    return 'This action sends an email';
  }
}
