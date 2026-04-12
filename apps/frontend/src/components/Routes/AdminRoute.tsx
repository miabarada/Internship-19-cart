import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../utils/isAuth.util";
import { routes } from "../../routes/routes";
import { getUser } from "../../utils/getUser";

export function AdminRoute() {
   if (!isAuthenticated()) {
      return <Navigate to={routes.LOGIN_PAGE} replace />
   }

   const user = getUser()
   console.log('USER:', user)

   if (!user?.isAdmin) {
      return <Navigate to={routes.HOME} replace />
   }

   return <Outlet />
}