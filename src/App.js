import { Routes, Route } from "react-router-dom";
import AppProviders from "./AppProviders";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Restaurants from "./pages/Restaurants";

export default function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/auth/register' element={<Register />}></Route>
        <Route path='/restaurants/:city' element={<Restaurants />}></Route>
        <Route path='/menus/:restaurant' element={<Menus />}></Route>
      </Routes>
    </AppProviders>
  );
}
