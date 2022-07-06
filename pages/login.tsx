/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { Button } from "../components/Buttons/Buttons";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  exampleRequired: string;
};

export default function login() {
  const [click, setClick] = useState<boolean>(false);

  const { register, handleSubmit, formState, setError } = useForm<Inputs>({
    mode: "onTouched",
  });

  const { isSubmitting, isValid } = formState;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data, isValid);
  };

  return (
    <>
      <Nav page={{ page: "login" }} />
      <section className='container font-plexSans h-full'>
        <div className='flex justify-enter  flex-col max-w-[500px] mx-auto py-[120px]'>
          <h2 className='font-bold text-2xl mb-6'>Inscription ou connexion</h2>

          {click == true ? (
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='email'>Adresse email</label>
              <div className='flex flex-col gap-3 my-[10px]'>
                <input
                  className='px-3 w-full border rounded h-[50px] mb-2 outline-black'
                  type='email'
                  id='email'
                  placeholder='par ex. elonmusk@aws.com'
                  {...register("email")}
                />
                <button disabled={isValid == true ? false : true} className='bg-green  text-white font-semibold rounded py-[12px] px-[24px]'>
                  Continuer
                </button>
              </div>
            </form>
          ) : (
            <button onClick={() => setClick(true)} className='bg-green  text-white font-semibold rounded py-[12px] px-[24px]'>
              Continuer avec une adresse e-mail
            </button>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
