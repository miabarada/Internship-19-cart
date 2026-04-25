import { useEffect, useState } from "react"
const baseUrl = (import.meta as any).env.API_URL

export const useUser = () => {
   const [user, setUser] = useState<User>()
   const [loading, setLoading] = useState(true)

   const fetchUser = async () => {
      try {
         const token = localStorage.getItem('token');
         const res = await fetch(`${baseUrl}0/users/me`, {
            headers: {
               Authorization: `Bearer ${token}`,
            }
         })

         const data = await res.json()
         setUser(data.data)
      } catch (err) {
         console.error(err)
      } finally {
         setLoading(true)
      }
   }

   useEffect(() => {
      fetchUser()
   }, [])

   return {user, setUser, loading, refetch: fetchUser }
}