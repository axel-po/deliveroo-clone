import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/Container/Container";
import { AuthContextProvider } from "../context/authContext";
import { CityContextProvider } from "../context/cityContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <AuthContextProvider>
        <CityContextProvider>
          <Component {...pageProps} />
        </CityContextProvider>
      </AuthContextProvider>
    </Container>
  );
}

export default MyApp;
