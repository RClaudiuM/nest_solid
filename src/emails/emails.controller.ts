import { Controller, Post } from '@nestjs/common';
import { EmailsService } from './emails.service';

@Controller('emails')
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @Post()
  sendWelcomeEmail() {
    return this.emailsService.sendWelcomeEmail();
  }
}
