type Product = {
   id: number
   name: string
   description: string
   price: number
   images: string[]
   colors: string[]
   sizes: string[]
   category: {
      id: number
      name: string
   }
}