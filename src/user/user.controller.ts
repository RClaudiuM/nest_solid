import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { EmailsService } from '../emails/emails.service';
@Controller('user')

/**
 * The `UserController` is responsible for handling HTTP requests related to user operations. Its primary responsibility is to orchestrate the flow of data between the client and the server, and to
 * !  delegate the business logic to the appropriate services.
 * !  The logic to create a user and send a welcome email can be considered separate concerns, even though they are related.
 */
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
