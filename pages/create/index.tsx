import { useState } from "react";
import Nav from "../../components/Nav/Nav";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../../config/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import * as yup from "yup";

export default function Create() {
  /* func */
  const [file, setFile] = useState(null);

  // const onFile = (e: Event) => {
  //   setFile(e.target.files[0]);
  // };

  /* Yup */
  const schema = yup.object({
    name: yup.string().required("Ce champs est requis.").max(20, "20 caractères max"),
  });

  /* React Hook Form */
  const { register, handleSubmit, formState } = useForm<Inputs>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const { isSubmitting, isValid, errors } = formState;

  /* hooks */
  const router = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    console.log(formData);

    try {
      // await sendAuth(URL_REGISTER, formData);
      // router.push("/");
      console.log("send");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Nav page={{ page: "login" }} />
      <section className='container h-screen font-plexSans'>
        <div className='flex justify-enter flex-col max-w-[500px] mx-auto py-[120px]'>
          <h2 className='font-bold text-2xl mb-6'>Créer votre Restaurant</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid auto-rows-auto grid-cols-1 row-gap-[20px] gap-[30px]'>
              <div>
                <label htmlFor='name'>Nom du restaurant</label>
                <input
                  className={`px-3 w-full border rounded h-[45px]  outline-black ${errors.name && "border-red-600 border-2"} `}
                  type='text'
                  id='name'
                  {...register("name")}
                />
                {errors.firstName && <span className=' text-red-600 text-xs'>{errors.firstName.message}</span>}
              </div>

              {/* <div>
                <label
                  htmlFor='image'
                  className='flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer '>
                  <div className='flex flex-col justify-center items-center pt-5 pb-6'>
                    <svg
                      aria-hidden='true'
                      className='mb-3 w-10 h-10 text-gray-400'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'></path>
                    </svg>
                    <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
                      <span className='font-semibold'>Click to upload</span> or drag and drop
                    </p>
                    <p className='text-xs text-gray-500 dark:text-gray-400'>SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                  </div>
                  <input onChange={onFile} id='image' type='file' className='hidden' />
                </label>
              </div> */}

              <div>
                <label htmlFor='foodCat'>Catégorie de restaurant</label>
                <select name='' id=''>
                  <option value=''></option>
                </select>
              </div>
              <button
                disabled={!isValid || isSubmitting}
                className={`${
                  !isValid
                    ? " font-semibold rounded py-[12px] px-[24px] cursor-not-allowed bg-[#E2E5E5] text-[#b5b8b8]"
                    : " bg-green  text-white font-semibold rounded py-[12px] px-[24px] hover:bg-[#29C2B3]"
                }`}>
                {isSubmitting ? "Chargement..." : "Créer un restaurant"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

