import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  name: string;

  @Field(() => Number)
  age: number;

  @Field(() => String)
  title: string;
}
