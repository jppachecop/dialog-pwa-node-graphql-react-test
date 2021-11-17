import { Field, ObjectType } from "type-graphql";
import { Person } from "./Person";

@ObjectType()
export class User extends Person {
  @Field()
  greeting: string = "You are up to date with your messages ;)";

  @Field(() => [Person])
  friends: Person[] = [];
}
