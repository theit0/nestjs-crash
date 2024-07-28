import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateSettingsDto } from "./CreateSettings.dto";



export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email?: string;

    @IsNotEmpty()
    password?: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateSettingsDto)
    settings?: CreateSettingsDto;
}