import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes/routes"
import { WelcomePage } from "./pages/WelcomePage/WelcomePage"
import { PublicRoute } from "./routes/PublicRoute"
import { LoginPage } from "./pages/LoginPage/LoginPage"

export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={routes.WELCOME_PAGE} element={<WelcomePage />}/>

            <Route element={<PublicRoute />}>
               <Route path={routes.LOGIN_PAGE} element={<LoginPage />}/>
            </Route>
         </Routes>
      </BrowserRouter>
   )
}