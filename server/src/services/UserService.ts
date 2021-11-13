import { readFile } from "../utils/file";
import { User } from "../models/User";

export class UserService {
  static find = async (name?: string): Promise<User[]> => {
    const users = await readFile<User>("db");

    return name ? users.filter((user) => user.name === name) : users;
  };
}
