import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailsService } from '../emails/emails.service';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly emailsService: EmailsService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    const createdUser = this.userService.createUser(createUserDto);

    if (!createdUser) {
      // handle error
      throw new Error('User not created');
    }

    //✅ Good practice because we can share the logic to send emails with other parts of the application.
    this.emailsService.sendWelcomeEmail(createUserDto.email);

    return createdUser;
  }
}
