import { Field, InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  age: number;

  @Field(() => String)
  title: string;
}
