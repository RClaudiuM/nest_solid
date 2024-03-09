import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto);
    return 'user created';
  }
}
