const baseUrl = (import.meta as any).env.API_URL

export const useUpdateUser = () => {
   const updateUser = async (payload: any) => {
      const token = localStorage.getItem('token');
      const res = await fetch(`${baseUrl}/users/me`, {
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