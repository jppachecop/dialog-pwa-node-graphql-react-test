import fs from "fs";
import path from "path";
import { promisify } from "util";

export const readDbFile = async <T>(identifier = "db"): Promise<T[]> => {
  try {
    const data = await promisify(fs.readFile)(
      path.resolve(__dirname, "../..", "db", `${identifier}.json`),
      { encoding: "utf-8" }
    );

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  } catch (err) {
    console.log(err);
    throw new Error(`Path not found: ${identifier}`);
  }
};
