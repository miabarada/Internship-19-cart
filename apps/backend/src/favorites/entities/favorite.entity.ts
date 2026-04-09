import { ApiProperty } from "@nestjs/swagger";

export class Favorite {
   @ApiProperty()
   id: number

   @ApiProperty()
   productId: number
}
