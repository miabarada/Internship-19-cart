import { Controller, Get, Post, Param, Delete, Request, ParseIntPipe, UseGuards } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Favorite } from './entities/favorite.entity';
import { UserAuthGuard } from '../user/user-auth.guard';

@Controller('favorites')
@UseGuards(UserAuthGuard)
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post(':productId')
  @ApiCreatedResponse({ type: Favorite })
  create(@Param('productId', ParseIntPipe) productId: number, @Request() req) {
    const userId = req.user.id
    return this.favoritesService.create(productId, userId);
  }

  @Get()
  findAll(@Request() req) {
    console.log('REQ:USER:', req.user)
    const userId = req.user.id
    return this.favoritesService.findAll(userId);
  }

  @Delete(':productId')
  remove(@Param('productId', ParseIntPipe) id: number, @Request() req) {
    const userId = req.user.id
    return this.favoritesService.remove(+id, userId);
  }
}
