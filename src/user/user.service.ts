import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { Role } from './enum/user.enum';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async findAll() {
    return 'find users';
  }

  async findOne(id: string) {
    return 'find user';
  }

  async checkUserIsAdmin(userId: string) {
    const user = await this.userRepository.findOneBy({ id: userId });
    return user.role === Role.Admin;
  }

  async create(email: string, password: string) {
    const user = this.userRepository.create({ email, password });
    await this.userRepository.save(user);
    return user;
  }

  async findOneByEmail(email: string) {
    return this.userRepository.findOneBy({ email });
  }
}
