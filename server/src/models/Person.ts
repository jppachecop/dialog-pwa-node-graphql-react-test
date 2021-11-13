import { Field, ID, Int, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";

@Entity()
@ObjectType()
export class Person {
  @Field(() => ID)
  @Column()
  _id!: string;

  @Field(() => Int)
  @Column()
  index!: number;

  @Field()
  @Column()
  picture: string =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJhvWpQrh3nIxmjLBQSyH5uu7OKpprR2b4-g&usqp=CAU";

  @Field(() => Int)
  @Column()
  age!: number;

  @Field()
  @Column()
  eyeColor!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  company!: string;

  @Field()
  @Column()
  email!: string;

  @Field()
  @Column()
  phone!: string;
}
