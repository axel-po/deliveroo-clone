import { Routes, Route } from "react-router-dom";
import AppProviders from "./AppProviders";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";

export default function App() {
  return (
    <AppProviders>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/auth/login' element={<Login />}></Route>
        <Route path='/restaurant/:city' element={<Restaurants />}></Route>
      </Routes>
    </AppProviders>
  );
}
