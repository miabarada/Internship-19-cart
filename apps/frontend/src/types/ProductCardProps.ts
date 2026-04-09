type ProductCard = {
   id: number
   name: string
   description: string
   price: number
   images: string[]
   colors: string[]
   isFavorite?: boolean
   onToggleFavorite?: (id:number) => void
}