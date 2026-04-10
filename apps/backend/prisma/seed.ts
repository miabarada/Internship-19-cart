import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";
import "dotenv/config"

const adapter = new PrismaPg({
   connectionString: process.env.DATABASE_URL
})

const prisma = new PrismaClient({ adapter })

async function main() {
   await prisma.category.createMany({
      data: [
         { name: 'Streetwear' },
         { name: 'Formal' },
         { name: 'Casual' },
         { name: 'Sport' }
      ]
   })

   await prisma.product.create({
      data: {
         name: 'ONITSUKA TIGER MEXICO 66',
         description: 'Streetwear tenisice',
         price: 89.90,
         brand: 'Onitsuka',
         images: ['http://localhost:3000/images/crvenePatike.png', 'http://localhost:3000/images/zutePatike.png'],
         sizes: ['44', '45', '46', '47'],
         colors: ['#FDBB04', '#57191A'],
         categoryId: 1
      }
   })

   await prisma.product.create({
      data: {
         name: 'ADIDAS SPEZIAL',
         description: 'Streetwear tenisice',
         price: 79.90,
         brand: 'Adidas',
         images: ['http://localhost:3000/images/plavePatike.png', 'http://localhost:3000/images/crveneSpezialPatike.png'],
         sizes: ['44', '45', '46', '47'],
         colors: ['#33404B', '#4B261C'],
         categoryId: 1
      }
   })

   await prisma.product.create({
      data: {
         name: 'ACNE STUDIOS YOYOGI 2021F JEANS',
         description: 'Streetwear farmerice',
         price: 299.90,
         brand: 'Yoyogi',
         images: ['http://localhost:3000/images/plaveRebe.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#121E35'],
         categoryId: 1
      }
   })

   await prisma.product.create({
      data: {
         name: 'BERSHKA SPIDER_MAN LONG SLEEVE',
         description: 'Streetwear majica',
         price: 29.90,
         brand: 'Bershka',
         images: ['http://localhost:3000/images/spiderManMajica.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#4A4B50'],
         categoryId: 1
      }
   })

   await prisma.product.create({
      data: {
         name: 'ZARA BLACK SHIRT',
         description: 'Formalna košulja',
         price: 19.90,
         brand: 'Zara',
         images: ['http://localhost:3000/images/crnaKosulja.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#000000'],
         categoryId: 2
      }
   })

   await prisma.product.create({
      data: {
         name: 'SINSAY BLACK PANTS',
         description: 'Formalne hlače',
         price: 29.90,
         brand: 'Sinsay',
         images: ['http://localhost:3000/images/crneHlace.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#000000'],
         categoryId: 2
      }
   })

   await prisma.product.create({
      data: {
         name: 'ZARA DRESS SHOES',
         description: 'Formalne cipele',
         price: 49.90,
         brand: 'Zara',
         images: ['http://localhost:3000/images/crneCipele.png'],
         sizes: ['44', '45', '46', '47'],
         colors: ['#000000'],
         categoryId: 2
      }
   })

   await prisma.product.create({
      data: {
         name: 'BERSHKA BLUE SHIRT',
         description: 'Formalna košulja',
         price: 29.90,
         brand: 'Bershka',
         images: ['http://localhost:3000/images/plavaKosulja.png', 'http://localhost:3000/images/kariranaKosulja.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#C5CBD9', '#A39886'],
         categoryId: 2
      }
   })

   await prisma.product.create({
      data: {
         name: 'BERSHA SWATPANTS',
         description: 'Casual trenerka',
         price: 19.90,
         brand: '',
         images: ['http://localhost:3000/images/sivaTuta.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#cbcaca'],
         categoryId: 3
      }
   })

   await prisma.product.create({
      data: {
         name: 'RESERVED T-SHIRT',
         description: 'Casual majica',
         price: 9.90,
         brand: 'Reserved',
         images: ['http://localhost:3000/images/crnaMajica.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#000000'],
         categoryId: 3
      }
   })

   await prisma.product.create({
      data: {
         name: 'PULL&BEAR HOODIE',
         description: 'Casual hoodica',
         price: 19.90,
         brand: 'Pull&Bear',
         images: ['http://localhost:3000/images/sivaHoodica.png', 'http://localhost:3000/images/crnaHoodica.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#666666', '#000000'],
         categoryId: 3
      }
   })

   await prisma.product.create({
      data: {
         name: 'ZARA SWEATSHIRT',
         description: 'Casual majica dugih rukava',
         price: 19.90,
         brand: 'Zara',
         images: ['http://localhost:3000/images/crniSwater.png', 'http://localhost:3000/images/zeleniSweatShirt.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#000000', '#008000'],
         categoryId: 3
      }
   })

   await prisma.product.create({
      data: {
         name: 'NIKE SPORTSKA JAKNA',
         description: 'Sportska jakna',
         price: 104.95,
         brand: 'Nike',
         images: ['http://localhost:3000/images/NikeSportskaJakna.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#000000'],
         categoryId: 4
      }
   })

   await prisma.product.create({
      data: {
         name: 'NIKE REGULAR SPORTSKE HLAČE',
         description: 'Sportske hlače',
         price: 20,
         brand: 'Nike',
         images: ['http://localhost:3000/images/nikeHlaceZelene.png', 'http://localhost:3000/images/nikeHlaceRoze.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#1D6F3F', '#DA3F44'],
         categoryId: 4
      }
   })

   await prisma.product.create({
      data: {
         name: 'ADIDAS PERFORMANCE DRES',
         description: 'Sportska majica',
         price: 59.90,
         brand: 'Adidas',
         images: ['http://localhost:3000/images/adidasDres.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#2E2E30'],
         categoryId: 4
      }
   })

   await prisma.product.create({
      data: {
         name: 'PUMA SPORTSKE HLAČE',
         description: 'Sportske hlače',
         price: 39.90,
         brand: 'Puma',
         images: ['http://localhost:3000/images/sivaTutaPuma.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#7b7b7b'],
         categoryId: 4
      }
   })

   await prisma.product.create({
      data: {
         name: 'PUMA SPORTSKA JAKNA',
         description: 'Sportska jakna',
         price: 50.90,
         brand: 'Puma',
         images: ['http://localhost:3000/images/pumaSportskaJakna.png.png'],
         sizes: ['S', 'M', 'L', 'XL'],
         colors: ['#33314A'],
         categoryId: 4
      }
   })

   console.log('Seed successful!')
}

main()
   .catch((e) => {
      console.error(e);
      process.exit(1)
   })
   .finally(async () => {
      await prisma.$disconnect();
   })