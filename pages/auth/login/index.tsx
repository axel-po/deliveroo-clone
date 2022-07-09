/* eslint-disable react-hooks/rules-of-hooks */
import Nav from "../../../components/Nav/Nav";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../../../config/types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../../hooks/useAuth";
import { URL_REGISTER } from "../../../config/config";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  /* Yup */
  const schema = yup.object({
    email: yup.string().email("Veuillez entrer un email valide").required("Ce champs est requis."),
    password: yup.string().required("Ce champs est requis."),
  });

  /* React Hook Form */
  const { register, handleSubmit, formState } = useForm<Inputs>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { isSubmitting, isValid, errors } = formState;

  /* hooks */
  const router = useRouter();
  const { sendAuth } = useAuth();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    try {
      await sendAuth(URL_REGISTER, formData);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav page={{ page: "login" }} />
      <section className='container font-plexSans h-full'>
        <div className='flex justify-enter flex-col max-w-[500px] mx-auto py-[120px]'>
          <h2 className='font-bold text-2xl mb-6'>Connexion</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid auto-rows-auto grid-cols-2 row-gap-[20px] gap-[30px]'>
              <div className='col-span-2'>
                <label htmlFor='email'>Adresse email</label>
                <input
                  className={`px-3 w-full border rounded h-[45px]  outline-black ${errors.email && "border-red-600 border-2"} `}
                  type='email'
                  id='email'
                  placeholder='par ex. elonmusk@aws.com'
                  {...register("email")}
                  defaultValue={"axelpo@free.fr"}
                />
                {errors.email && <span className=' text-red-600 text-xs'>{errors.email.message}</span>}
              </div>
              <div className='col-span-2'>
                <label htmlFor='password'>Mot de passe</label>
                <input
                  className={`px-3 w-full border rounded h-[45px]  outline-black ${errors.password && "border-red-600 border-2"}`}
                  type='password'
                  id='password'
                  placeholder='par ex. 123456 (ou pas)'
                  {...register("password")}
                  defaultValue={"123456"}
                />
                {errors.password && <span className=' text-red-600 text-xs'>{errors.password.message}</span>}
              </div>

              <button
                disabled={!isValid || isSubmitting}
                className={`${
                  !isValid && "cursor-not-allowed bg-[#E2E5E5] text-[#b5b8b8] hover:bg-[#E2E5E5]"
                }   col-span-2 bg-green  text-white font-semibold rounded py-[12px] px-[24px] hover:bg-[#29C2B3]`}>
                {isSubmitting ? "Chargement..." : "Se connecter"}
              </button>
            </div>
          </form>
          <p className='text-sm pt-3'>
            Pas de compte ? &nbsp;
            <Link href='/auth/login'>
              <a className='text-green'>S&apos;inscrire</a>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
