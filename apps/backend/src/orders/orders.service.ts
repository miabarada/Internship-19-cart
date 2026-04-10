import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private readonly prisma: PrismaService) {}

  async addToCart(userId: number, dto: CreateOrderDto) {
    const product = await this.prisma.product.findUnique({
      where: { id: dto.productId },
    })

    if (!product) {
      throw new NotFoundException('Product not found')
    }

    let order = await this.prisma.order.findFirst({
      where: {
        userId,
        status: 'PENDING'
      }
    })

    if(!order) {
      order = await this.prisma.order.create({
        data: {
          userId,
          status: 'PENDING',
          totalPrice: 0,

          shippingName: '',
          shippingAddress: '',
          shippingCity: '',
          shippingZip: '',
          billingName: '',
          billingAddress: '',
          billingCity: '',
          billingZip: '',
        },
      })
    }

    await this.prisma.orderItem.create({
      data: {
        orderId: order.id,
        productId: dto.productId,
        quantity: dto.quantity,
        size: dto.size,
        color: dto.color,
        price: product.price,
      },
    });

    return {
      statusCode: 200,
      message: 'Added to cart',
      data: null,
    };
  }

  async getCart(userId: number) {
    const cart = await this.prisma.order.findFirst({
      where: {
        userId,
        status: 'PENDING'
      },
      include: {
        items: {
          include:{
            product: true
          }
        }
      }
    })

    return {
      statusCode: 200,
      message: 'Cart fetched',
      data: cart
    }
  }

  async getMyOrders(userId: number) {
    const orders = await this.prisma.order.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    })

    return {
      statusCode: 200,
      message: 'Orders fetched',
      data: orders
    }
  }

  async checkout(orderId: number, userId: number) {
    const order = await this.prisma.order.findFirst({
      where: {
        id: orderId,
        userId,
        status: 'PENDING'
      },
      include: {
        items: true
      }
    })

    if (!order) {
      throw new NotFoundException('Cart not found')
    }

    if (order.items.length === 0) {
      throw new BadRequestException('Cart is empty')
    }

    const totalPrice = order.items.reduce((sum, item) => {
      return sum += item.price * item.quantity
    }, 0)

    const updated = await this.prisma.order.update({
      where: { id: orderId },
      data: {
        status: 'CONFIRMED',
        totalPrice
      }
    })

    return {
      statusCode: 200,
      message: 'Order confirmed',
      data: updated
    }
  }

  async getAllOrders() {
      return this.prisma.order.findMany({
        include: {
          items: {
            include: {
              product: true
            }
          },
          user: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      })
  }

  async updateStatus(orderId: number, status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED') {
    return this.prisma.order.update({
      where: { id: orderId },
      data: { status }
    })
  } 
}
