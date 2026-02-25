import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";

export default function RouterApp() {
  return (
    <>
    
    
      <Routes>
       <Route path='/'element={<MainLayout/>}>
          <Route index element = {<HomePage/>}/>
          <Route path="shop" element = {<ShopPage/>}/>
          <Route path="contact" element = {<ContactPage/>}/>
          <Route path="about" element = {<AboutPage/>}/>
          <Route path="register" element = {<RegisterPage/>}/>
          <Route path="login" element = {<LoginPage/>}/>
       </Route>
          <Route path='*' element={<NotFoundPage/>}/>
     </Routes>
    
    </>
  )
}
