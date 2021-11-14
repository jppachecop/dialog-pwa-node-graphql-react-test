import { readFile } from "../utils/file";
import { User } from "../models/User";
import { searchRegex } from "../utils/searchRegex";

export class UserService {
  static find = async (name?: string): Promise<User[]> => {
    const users = await readFile<User>("db");

    return name
      ? users.filter((user) => searchRegex(name).test(user.name))
      : users;
  };
}
