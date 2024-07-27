import { Type } from "class-transformer";
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested } from "class-validator";

export class CreateSettingsDto {
    @IsBoolean()
    receiveNotifications: boolean;

    @IsBoolean()
    receiveEmails: boolean;
}


export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email?: string;

    @IsOptional()
    @ValidateNested()
    @Type(() => CreateSettingsDto)
    settings?: CreateSettingsDto;
}