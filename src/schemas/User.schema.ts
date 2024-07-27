import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Settings } from "./Settings.schema";
import mongoose from "mongoose";


@Schema()
export class User {

    @Prop({ unique: true, required: true })
    username: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: false })
    avatarUrl?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Settings' })
    settings: Settings;
}
export const UserSchema = SchemaFactory.createForClass(User);