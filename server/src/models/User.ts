import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { Person } from "./Person";

@Entity()
@ObjectType()
export class User extends Person {
  @Field()
  @Column()
  greeting: string = "You are up to date with your messages ;)";

  @Field(() => [Person])
  friends: Person[] = [];
}
