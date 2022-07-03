import { Button } from "../components/Buttons/Buttons";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

export default function login() {
  return (
    <>
      <Nav page={{ page: "login" }} />
      <section className='container font-plexSans h-full'>
        <div className='flex justify-center  flex-col max-w-[500px]'>
          <h2 className='font-bold text-2xl'>Inscription ou connexion</h2>

          <Button>Continuer avec une adresse e-mail</Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
