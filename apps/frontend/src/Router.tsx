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
import { CartPage } from "./pages/CartPage/CartPage"
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage"
import { SuccessPage } from "./pages/SuccessPage/SuccessPage"
import { ProfilePage } from "./pages/ProfilePage/ProfilePage"
import { AdminRoute } from "./components/Routes/AdminRoute"
import { AdminLayout } from "./components/Admin/AdminLayout/AdminLayout"
import { AdminHome } from "./pages/Admin/AdminHome/AdminHome"
import { AdminCategories } from "./pages/Admin/CategoriesPage/CategoriesPage"
import { AdminOrders } from "./pages/Admin/OrdersPage/OrdersPage"

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
                  <Route path={routes.PROFILE_PAGE} element={<ProfilePage />}/>
               </Route>   
               <Route path={routes.CART_PAGE} element={<CartPage />}/>
               <Route path={routes.CHECKOUT_PAGE} element={<CheckoutPage />}/>
               <Route path={routes.SUCCESS_PAGE} element={<SuccessPage />}/>
            </Route>

            <Route element={<AdminRoute />}>
               <Route element={<AdminLayout />}>
                  <Route path={routes.ADMIN_HOME} element={<AdminHome />}/>
                  <Route path={routes.ADMIN_CATEGORIES} element={<AdminCategories />}/>
                  <Route path={routes.ADMIN_ORDERS} element={<AdminOrders />}/>
               </Route>
            </Route>
         </Routes>
      </BrowserRouter>
   )
}