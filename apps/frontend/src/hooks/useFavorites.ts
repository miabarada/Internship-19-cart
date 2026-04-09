import { useEffect, useState } from "react";

export function useFavorites() {
   const [favorites, setFavorites] = useState<Favorite[]>([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchFavorites = async () => {
         const res = await fetch('http://localhost:3000/favorites', {
            headers: {
               Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
         })

         const data = await res.json()
         setFavorites(data.data)
         setLoading(false)
      }

      fetchFavorites()
   }, [])

   return { favorites, setFavorites, loading }
}