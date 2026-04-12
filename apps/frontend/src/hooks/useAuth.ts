export const useAuth = () => {
   const logout = () => {
      localStorage.removeItem('token')
      window.location.href = '/'
   }

   return { logout }
}