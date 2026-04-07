import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes/routes"
import { WelcomePage } from "./pages/WelcomePage/WelcomePage"
import { PublicRoute } from "./routes/PublicRoute"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { Register } from "./pages/RegisterPage/RegisterPage"

export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={routes.WELCOME_PAGE} element={<WelcomePage />}/>

            <Route element={<PublicRoute />}>
               <Route path={routes.LOGIN_PAGE} element={<LoginPage />}/>
               <Route path={routes.REGISTER_PAGE} element={<Register />}/>
            </Route>
         </Routes>
      </BrowserRouter>
   )
}