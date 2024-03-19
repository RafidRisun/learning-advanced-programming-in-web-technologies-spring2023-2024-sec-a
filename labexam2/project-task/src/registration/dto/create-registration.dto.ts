import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateRegistrationDto {
    id: number;

    
    @IsString()
    @IsNotEmpty()
    fullname: string;

    @IsString()
    @IsNotEmpty()
    username: string;

    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    confirmpassword: string;

    @IsNotEmpty()
    address: string;
}


