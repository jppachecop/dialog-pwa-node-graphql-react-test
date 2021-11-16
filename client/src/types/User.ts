import { PersonInterface } from "./Person";

export interface UserInterface extends PersonInterface {
    greeting?: string;
    friends?: PersonInterface[];
}
