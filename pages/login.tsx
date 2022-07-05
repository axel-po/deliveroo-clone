/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Button } from "../components/Buttons/Buttons";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

export default function login() {
  const [click, setClick] = useState<boolean>(false);

  return (
    <>
      <Nav page={{ page: "login" }} />
      <section className='container font-plexSans h-full'>
        <div className='flex justify-enter  flex-col max-w-[500px] mx-auto py-[120px]'>
          <h2 className='font-bold text-2xl mb-6'>Inscription ou connexion</h2>

          {click == true ? (
            <form>
              <label htmlFor='email'>Adresse email</label>
              <div className='flex flex-col gap-3 my-[10px]'>
                <input
                  className='px-3 w-full border rounded h-[50px] mb-2 outline-black'
                  type='email'
                  id='email'
                  placeholder='par ex. elonmusk@aws.com'
                />
                <Button>Continuer</Button>
              </div>
            </form>
          ) : (
            <button onClick={() => setClick(true)} className='bg-green  text-white font-semibold rounded py-[12px] px-[24px]'>
              Continuer avec dune adresse e-mail
            </button>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
