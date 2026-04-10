import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
constructor(private readonly prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({
      data: createProductDto
    })
  }

  async findAll(query) {
    const { search, categoryId} = query;

    return this.prisma.product.findMany({
      where: {
        name: search ? {
          contains: search,
          mode: 'insensitive'
        } : undefined,
        categoryId: categoryId ? Number(categoryId) : undefined
      },
      include: { category:true }
    });
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
      include: { category: true }
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({
      where: { id }
    });
  }

  update(id: number, dto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data: dto
    })
  }
}
