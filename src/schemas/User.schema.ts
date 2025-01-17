import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Settings } from "./Settings.schema";
import * as mongoose from "mongoose";
import { Post } from "./Post.schema";


@Schema()
export class User {

    @Prop({ unique: true })
    username: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: false })
    avatarUrl?: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Settings' })
    settings: Settings;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
    posts: Post[];
}
export const UserSchema = SchemaFactory.createForClass(User);