import { IsBoolean } from "class-validator";

export class CreateSettingsDto {
    @IsBoolean()
    receiveNotifications: boolean;

    @IsBoolean()
    receiveEmails: boolean;
}