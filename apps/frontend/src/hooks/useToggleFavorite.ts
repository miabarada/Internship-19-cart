const baseUrl = (import.meta as any).env.VITE_API_URL

export const useToggleFavorite = (favorites: any[], setFavorites: React.Dispatch<React.SetStateAction<any[]>>) => {
   const toggleFavorite = async (productId: number) => {
      const isFavorite = favorites.some(f => f.productId === productId)

      if (isFavorite) {
         setFavorites(prev => prev.filter(f => f.productId !== productId))
      } else {
         setFavorites(prev => [...prev, { productId }])
      }

      try {
         if (isFavorite) {
            await fetch(`${baseUrl}/favorites/${productId}`, {
               method: 'DELETE', 
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
               }
            })
         } else {
            await fetch(`${baseUrl}/favorites/${productId}`, {
               method: 'POST', 
               headers: {
                  Authorization: `Bearer ${localStorage.getItem('token')}`
               }
            })
         }
      } catch (err) {
         console.error(err)
      }
   }

   return { toggleFavorite }
}