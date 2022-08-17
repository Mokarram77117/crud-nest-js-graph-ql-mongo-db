import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const newUser = new this.userModel(createUserInput);
    return await newUser.save();
  }

  async findAllUser(): Promise<User[]> {
    return await this.userModel.find({});
  }

  async findOneUser({ _id }: { _id: string }): Promise<User> {
    const user = await this.userModel.findOne({});
    if (user === null) return {};
    return user;
  }
  async updateUser(_id, data): Promise<User> {
    return await this.userModel.findByIdAndUpdate(_id, data, { new: true });
  }

  async deleteUser(_id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(_id);
  }
}
