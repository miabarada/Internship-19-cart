import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/isAuth.util";
import { routes } from "./routes";

export function ProtectedRoute() {
   if (!isAuthenticated()) {
      return <Navigate to={routes.LOGIN_PAGE} replace />
   }

   return <Outlet />
}