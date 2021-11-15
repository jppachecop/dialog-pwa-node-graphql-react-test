export interface CardInterface {
    photo: string;
    name: string;
    company: string;
    age: number;
    eyeColor: string;
    email: string;
    onClick?: () => void;
}
