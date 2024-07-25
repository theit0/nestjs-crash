import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

/**
 * Esquema de usuario para la base de datos MongoDB.
 */
@Schema()
export class User {
    /**
     * Nombre de usuario único del usuario.
     * @prop {string} username - Debe ser único y es requerido.
     */
    @Prop({ unique: true, required: true })
    username: string;

    /**
     * Dirección de correo electrónico del usuario.
     * @prop {string} email - Es requerido.
     */
    @Prop({ required: true })
    email: string;

    /**
     * URL del avatar del usuario.
     * @prop {string} avatarUrl - Es opcional.
     */
    @Prop({ required: false })
    avatarUrl?: string;
}

/**
 * Esquema de Mongoose generado a partir de la clase User.
 */
export const UserSchema = SchemaFactory.createForClass(User);