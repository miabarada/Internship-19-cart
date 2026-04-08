import { ApiProperty } from "@nestjs/swagger";
import { isString } from "class-validator";

export class Category {
   @ApiProperty()
   id: number

   @ApiProperty()
   name: string
}
