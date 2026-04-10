import { BadRequestException, ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService, private readonly jwtService: JwtService) {}

  async register(email: string, password: string, fullName: string) {
    try {
      const existingUser = await this.prisma.user.findUnique({
        where: {
        email,
        },
      });

      if (existingUser) {
        throw new BadRequestException('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await this.prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          fullName
        }
      })

      const payload = {
        id: user.id,
        email: user.email,
        isAdmin: user.isAdmin
      }

      return {
        token: this.jwtService.sign(payload),
        user: {
          email: user.email,
          fullName: user.fullName,
          isAdmin: user.isAdmin
        }
      }
    } catch (err) {
      console.error('REGISTER ERROR:', err)
      throw err
    }
    
  }

  async login (email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user)
      throw new BadRequestException("User does not exist")

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid)
      throw new ForbiddenException('Password not valid!')

    const payload = {
      id: user.id,
      email: user.email,
      isAdmin: user.isAdmin
    }

    return {
      token: this.jwtService.sign(payload),
      user: {
        email: user.email,
        isAdmin: user.isAdmin
      }
    }
  }
}
