import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Person {
  @Field(() => ID)
  _id!: string;

  @Field(() => Int)
  index!: number;

  @Field({ nullable: true })
  picture?: string;

  @Field(() => Int)
  age!: number;

  @Field()
  eyeColor!: string;

  @Field()
  name!: string;

  @Field()
  company!: string;

  @Field()
  email!: string;

  @Field()
  phone!: string;
}
