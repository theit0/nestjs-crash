import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Settings {
    @Prop({ required: false })
    receiveNotifications?: boolean;

    //Receive emails
    @Prop({ required: false })
    receiveEmails?: boolean;

}

export const SettingsSchema = SchemaFactory.createForClass(Settings);