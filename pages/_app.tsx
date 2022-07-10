import "../styles/globals.css";
import type { AppProps } from "next/app";
import Container from "../components/Container/Container";
import { AuthContextProvider } from "../context/authContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </Container>
  );
}

export default MyApp;
