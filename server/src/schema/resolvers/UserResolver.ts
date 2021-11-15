import { UserService } from "../../services/UserService";
import { Query, Resolver, Arg } from "type-graphql";
import { User } from "../../models/User";

@Resolver(() => User)
export class UserResolver {
  @Query(() => [User])
  async list(@Arg("name", { nullable: true }) name?: string) {
    return UserService.find(name);
  }

  @Query(() => User)
  async listById(@Arg("_id") _id: string) {
    return UserService.findById(_id);
  }
}
