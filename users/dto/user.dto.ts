import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class UserDTO {

    @IsOptional()
    @IsPositive()
    @IsNumber()
    id?: number;

    @IsNotEmpty()
    @IsString()
    firstName!: string;

    @IsNotEmpty()
    @IsString()
    lastName!: string;

    @IsNotEmpty()
    @IsString()
    position!: string;

    @IsNotEmpty()
    @IsString()
    username!: string;

    @IsNotEmpty()
    @IsString()
    password!: string;

    @IsPositive()
    @IsNumber()
    status!: number
}