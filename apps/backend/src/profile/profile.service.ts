import { Injectable } from '@nestjs/common';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}
  
  async findMe(userId: number) {
    return this.prisma.user.findUnique({
      where: {
        id: userId
      },
      select: {
        id: true,
        email: true,
        fullName: true,
        address: true,
        city: true,
        county: true,
        zipCode: true,
        country: true,
        expiryDate: true,
        isctCode: true,
        isAdmin: true
      }
    })
  }

  async updateMe(userId: number, dto: UpdateProfileDto) {
    console.log('USER ID:', userId)
    console.log('DTO:', dto)
    return this.prisma.user.update({
      where: {
        id: userId
      },
      data: dto
    })
  }
}
