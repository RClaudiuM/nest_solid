import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

// SINGLE RESPONSIBILITY PRINCIPLE
// The UserService class is responsible for handling the business logic for creating a user.
// Do not add methods responsible for any other logic other than the business logic needed for users.
// Anything else should be handled by a different service.

@Injectable()
export class UserService {
  // a repository is used for CRUD operations / we can also use a DAL ( Data Access Layer )
  constructor(private readonly userRepository: UserRepository) {}

  createUser(createUserDto: CreateUserDto) {
    // business logic to create an user
    return this.userRepository.createUser(createUserDto);
  }

  //❌ Bad practice because it's not the responsibility of the UserService to send emails. We need to create a new service for this.
  sendWelcomeEmail() {
    // business logic to send an email to the user
    // implementation goes here
  }
}
