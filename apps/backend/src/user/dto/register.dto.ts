import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto {
   @ApiProperty({ example: 'user@example.com '})
   @IsEmail({}, { message: 'Email address is not valid' })
   @IsNotEmpty({ message: 'This field can not be empty' })
   email: string
   
   @ApiProperty({ example: 'password123' })
   @IsNotEmpty({ message: 'This field can not be empty' })
   @MinLength(8, { message: 'Password must be at least 8 characters long' })
   password: string

   @ApiProperty()
   @IsNotEmpty({ message: 'This field can not be empty' })
   fullName: string
}