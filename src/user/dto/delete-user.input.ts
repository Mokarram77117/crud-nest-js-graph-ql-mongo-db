import { Field, InputType, PartialType } from '@nestjs/graphql';

import { UpdateUserInput } from './update-user.input';

@InputType()
export class DeleteUserInput extends PartialType(UpdateUserInput) {
  @Field(() => String, { nullable: true })
  _id?: string;
}
