import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { FavoritesModule } from './favorites/favorites.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, UserModule, ProductsModule, CategoriesModule, FavoritesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
