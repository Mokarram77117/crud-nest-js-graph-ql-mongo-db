import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAllUser() {
    return this.userService.findAllUser();
  }

  @Query(() => User, { name: 'user' })
  findOneUser(@Args('_id') _id: string) {
    return this.userService.findOneUser({ _id });
  }

  @Mutation(() => User, { name: 'updateUser' })
  async updateUser(
    @Args('_id') _id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return await this.userService.updateUser(_id, updateUserInput);
  }

  @Mutation(() => User, { name: 'deleteUser' })
  async deleteUser(@Args('_id') _id: string): Promise<User> {
    return await this.userService.deleteUser(_id);
  }
}
