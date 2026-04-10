import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateOrderDto {
   @IsInt()
   @ApiProperty()
   productId: number;

   @IsInt()
   @ApiProperty()
   quantity: number;

   @IsString()
   @ApiProperty()
   size: string;

   @IsString()
   @ApiProperty()
   color: string;
}
