import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class LoginDTO {

    @IsNotEmpty()
    @IsString()
    username!: string;

    @IsNotEmpty()
    @IsString()
    password!: string;

}