import { IsNotEmpty, IsString } from "class-validator";

//create post dto
export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    userId: string;
}