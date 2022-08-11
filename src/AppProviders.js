import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthContextProvider } from "./context/authContext";
import { CartContextProvider } from "./context/cartContext";
import { CityContextProvider } from "./context/cityContext";

export default function AppProviders({ children }) {
  return (
    <Router>
      <AuthContextProvider>
        <CityContextProvider>
          <CartContextProvider>
            <ScrollToTop />
            {children}
          </CartContextProvider>
        </CityContextProvider>
      </AuthContextProvider>
    </Router>
  );
}
