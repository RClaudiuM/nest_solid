import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

// SINGLE RESPONSIBILITY PRINCIPLE
// The UserService class is responsible for handling the business logic for creating a user.
// Do not add methods responsible for any other logic other than the business logic needed for users.
// Anything else should be handled by a different service.

// Each class should focus on doing one thing and doing it well. This helps keep the codebase clean, maintainable, and easier to understand.

/** 
 *  PROS:
  Modularity: Classes with single responsibilities are more modular and easier to maintain, as changes in one responsibility do not affect others.
  Testability: Classes with single responsibilities are easier to test, as each test case focuses on a specific functionality.
  Readability: Code is easier to read and understand when each class has a clear and defined purpose.
 */

/** 
 *! CONS:
  Over-Modularization: Over-applying SRP can lead to an excessive number of small classes, making the codebase harder to navigate and understand.
  Potential for Duplication: Breaking down responsibilities into too many classes can lead to code duplication if not managed properly.
  Increased Complexity: Maintaining a larger number of smaller classes can introduce additional complexity, especially for smaller projects where simplicity might be preferred.
*/

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
