import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { hashSync } from 'bcryptjs';

import { User, UserDocument } from './user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(name: string, email: string, password: string) {
    const existingUser = await this.userModel.findOne({ email });

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    return this.userModel.create({
      name,
      email,
      password: await this.hashPassword(password),
    });
  }

  async getUserById(id: string) {
    return this.userModel.findById(id).select('-password');
  }

  findAll() {
    return this.userModel.find();
  }

  private async hashPassword(password: string) {
    return hashSync(password, 10);
  }
}
