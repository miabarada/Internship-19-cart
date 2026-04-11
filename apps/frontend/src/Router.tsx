import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes/routes"
import { WelcomePage } from "./pages/WelcomePage/WelcomePage"
import { PublicRoute } from "./components/Routes/PublicRoute"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { Register } from "./pages/RegisterPage/RegisterPage"
import { ProtectedRoute } from "./components/Routes/ProtectedRoute"
import { MobileLayout } from "./components/MobileLayout/MobileLayout"
import { HomePage } from "./pages/HomePage/HomePage"
import { SearchPage } from "./pages/SearchPage/SearchPage"
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage"
import { ProductDetailsPage } from "./pages/ProductDetailsPage/ProductDetailsPage"

export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={routes.WELCOME_PAGE} element={<WelcomePage />}/>

            <Route element={<PublicRoute />}>
               <Route path={routes.LOGIN_PAGE} element={<LoginPage />}/>
               <Route path={routes.REGISTER_PAGE} element={<Register />}/>
            </Route>

            <Route element={<ProtectedRoute />}>
               <Route element={<MobileLayout />}>
                  <Route path={routes.HOME} element={<HomePage />}/>
                  <Route path={routes.SEARCH_PAGE} element={<SearchPage />}/>
                  <Route path={routes.FAVORITES_PAGE} element={<FavoritesPage />}/>
                  <Route path={`products/:id`} element={<ProductDetailsPage />}/>
               </Route>   
            </Route>
         </Routes>
      </BrowserRouter>
   )
}