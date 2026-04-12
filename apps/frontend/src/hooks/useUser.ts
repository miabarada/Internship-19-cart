import { useEffect, useState } from "react"

export const useUser = () => {
   const [user, setUser] = useState<User>()
   const [loading, setLoading] = useState(true)

   const fetchUser = async () => {
      try {
         const token = localStorage.getItem('token');
         const res = await fetch('http://localhost:3000/users/me', {
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