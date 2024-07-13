import { IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;

    @IsNumber()
    age: number

}