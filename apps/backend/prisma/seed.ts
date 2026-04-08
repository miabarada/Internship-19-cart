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
         { name: 'Sport' },
         { name: 'Niske tenisice' }
      ]
   })

   await prisma.user.create({
      data: {
         email: 'mia.barada@gmail.com',
         password: '12345678',
         fullName: 'Mia Barada',
         address: 'Kneza Trpimira 199',
         city: 'Trogir',
         county: 'Splitsko-dalmatinska zupanija',
         zipCode: '21220',
         country: 'Hrvatska',
         iban: '1234567891011',
         expiryDate: new Date('01-11-2032'),
         isctCode: '123',
         isAdmin: true
      }
   })

   await prisma.user.create({
      data: {
         email: 'andrea.barada@gmail.com',
         password: '12345678',
         fullName: 'Andrea Barada',
         address: 'Kneza Trpimira 199',
         city: 'Trogir',
         county: 'Splitsko-dalmatinska zupanija',
         zipCode: '21220',
         country: 'Hrvatska',
         iban: '1234567891011',
         expiryDate: new Date('01-11-2032'),
         isctCode: '123',
         isAdmin: false
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