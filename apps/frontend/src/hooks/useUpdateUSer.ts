import { useEffect, useState } from "react"

export const useUpdateUser = () => {
   const updateUser = async (payload: any) => {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:3000/users/me', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(payload)
      })
      return res.json()
   }

   return { updateUser }
}