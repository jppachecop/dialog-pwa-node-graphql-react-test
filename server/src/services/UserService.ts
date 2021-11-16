import { readDbFile } from "../database/readDbFile";
import { User } from "../models/User";
import { searchRegex } from "../utils/searchRegex";

export class UserService {
  static find = async (name?: string): Promise<User[]> => {
    const usersData = await readDbFile<User>("db");

    return name
      ? usersData.filter((user) => searchRegex(name).test(user.name))
      : usersData;
  };

  static findById = async (id: string): Promise<User | null> => {
    const usersData = await readDbFile<User>("db");

    const user = usersData.find((user) => user._id === id);

    return user ?? null;
  };
}
