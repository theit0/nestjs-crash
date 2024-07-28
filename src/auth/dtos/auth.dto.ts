import { IsNotEmpty, IsString } from "class-validator";

export class AuthPayloadDto {

    @IsString()
    username: string;

    @IsString()
    pass: string;
}