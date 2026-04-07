import { BrowserRouter, Route, Routes } from "react-router-dom"
import { routes } from "./routes/routes"
import { WelcomePage } from "./pages/WelcomePage/WelcomePage"

export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path={routes.WELCOME_PAGE} element={<WelcomePage />}/>
         </Routes>
      </BrowserRouter>
   )
}