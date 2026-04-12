import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateProfileDto{
   @IsString()
   @IsOptional()
   @ApiProperty()
   fullName?: string;

   @IsOptional()
   @IsString()
   address?: string;

   @IsOptional()
   @IsString()
   city?: string;

   @IsOptional()
   @IsString()
   county?: string;

   @IsOptional()
   @IsString()
   zipCode?: string;

   @IsOptional()
   @IsString()
   country?: string;
  
   @IsOptional()
   @IsString()
   iban?: string;

   @IsOptional()
   @IsDateString()
   expiryDate?: string;

   @IsOptional()
   @IsString()
   isctCode?: string;
   
}
