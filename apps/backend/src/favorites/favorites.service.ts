import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async create(productId: number, userId: number) {
    const existing = await this.prisma.favorite.findFirst({
      where: { userId, productId: productId }
    })

    if (existing)
      throw new BadRequestException('Product is already in favorites')

    return this.prisma.favorite.create({
      data: {
        productId,
        userId
      }
    })
  }

  findAll(userId: number) {
    return this.prisma.favorite.findMany({
      where: { userId },
      include: {product: true }
    });
  }

  async remove(id: number, userId: number) {
    const favorite = await this.prisma.favorite.findFirst({
      where: { 
        userId: userId,
        productId: id
       }
    });

    if (!favorite) {
      throw new BadRequestException("Favorite not found or you don't have permission to delete it");
    }

    return this.prisma.favorite.delete({
      where: { id: favorite.id }
    });
  }
}
