import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../utils/isAuth.util";
import { routes } from "./routes";

export function PublicRoute() {
   if (isAuthenticated()) {
      return <Navigate to={routes.HOME} replace />
   }

   return <Outlet />
}