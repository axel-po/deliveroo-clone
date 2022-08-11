import { Routes, Route } from "react-router-dom";
import AppProviders from "./AppProviders";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Restaurants from "./pages/Restaurants";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error404/Error404";
import { Checkout } from "./pages/Checkout";

export default function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/auth/register' element={<Register />}></Route>
        <Route path='/restaurants/:city' element={<Restaurants />}></Route>
        <Route path='/menus/:restaurant' element={<Menus />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='*' element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </AppProviders>
  );
}
