import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateProductDto {
   @IsString()
   @ApiProperty()
   name: string;

   @IsString()
   @ApiProperty()
   description: string;

   @IsNumber()
   @ApiProperty()
   price: number;

   @IsString()
   @ApiProperty()
   brand?: string

   @ApiProperty({ type: [String] })
   @IsArray()
   images: string[]

   @ApiProperty()
   @IsArray()
   sizes: string[]

   @ApiProperty({ type: [String] })
   @IsArray()
   colors: string[];

   @ApiProperty()
   @IsBoolean()
   inStock: boolean;

   @ApiProperty()
   @IsNumber()
   categoryId: number;
}
