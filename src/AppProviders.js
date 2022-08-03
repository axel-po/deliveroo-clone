import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { AuthContextProvider } from "./context/authContext";
import { CityContextProvider } from "./context/cityContext";

export default function AppProviders({ children }) {
  return (
    <Router>
      <AuthContextProvider>
        <CityContextProvider>
          <ScrollToTop />
          {children}
        </CityContextProvider>
      </AuthContextProvider>
    </Router>
  );
}
