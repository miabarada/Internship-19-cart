import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, ParseIntPipe } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UserAuthGuard } from '../user/user-auth.guard';
import { AdminAuthGuard } from '../user/admin-auth.guard';

@Controller('orders')
@UseGuards(UserAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  addToCart(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    return this.ordersService.addToCart(req.user.id, createOrderDto);
  }

  @Get('cart')
  getCart(@Request() req) {
    return this.ordersService.getCart(req.user.id);
  }

  @Get('my')
  getMyOrders(@Request() req) {
    return this.ordersService.getMyOrders(req.user.id)
  }

  @Patch(':id/checkout')
  update(@Param('id', ParseIntPipe) id: number, @Request() req) {
    return this.ordersService.checkout(+id, req.user.id);
  }

  @UseGuards(AdminAuthGuard)
  @Get()
  gettAllOrders() {
    return this.ordersService.getAllOrders()
  }

  @UseGuards(AdminAuthGuard)
  @Patch(':id/status')
  updateStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: { status: 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' }
  ) {
    return this.ordersService.updateStatus(id, body.status)
  }
}
