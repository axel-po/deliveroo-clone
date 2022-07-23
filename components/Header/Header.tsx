import Image from "next/image";
import Nav from "../Nav/Nav";
import { Button } from "../Buttons/Buttons";
import HeaderIllustation from "/public/assets/header-illustration.svg";
import { useCity } from "../../context/cityContext";
import { useEffect, useRef } from "react";

export default function Header() {
  const { city, setCity, cityFormAlert, setCityFormAlert } = useCity();

  const refInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (cityFormAlert == true) {
      refInput?.current?.focus();
    }
  }, [cityFormAlert]);

  return (
    <header className="pb-[20px] min-h-[500px] bg-[#D0EB99] before:content-[''] before:absolute before:right-0 before:top-[-10%] before:bg-[#00ccbc] before:w-full before:h-[297px] before:origin-center before:-skew-y-3">
      <Nav />
      <div className='flex flex-col items-center gap-8 h-full container md:flex-row'>
        <div className='w-full z-0 md:w-6/12 '>
          <h2 className='text-violet text-[30px] leading-[36px] font-semibold pb-[32px] sm:leading-[48px] sm:text-[40px] '>
            Vos restaurants préférés, livrés chez vous en un clic
          </h2>
          <form className='bg-white p-5 md:p-[32px] rounded font-plexSans z-0'>
            <label htmlFor='adress'>Entrez votre adresse pour trouver les restaurants à proximité</label>
            <div className='flex flex-col sm:flex-row gap-3 mt-[10px]'>
              <input
                className='px-3 w-full h-[50px] border rounded outline-black'
                type='text'
                id='adress'
                placeholder='Saisissez votre adresse'
                onChange={(e) => setCity(e.target.value)}
                value={city}
                ref={refInput}
              />
              <Button>Chercher</Button>
            </div>
          </form>
        </div>

        <div className='w-full flex items-end justify-center md:w-6/12'>
          <Image src={HeaderIllustation} alt='header illustration' width='426' height='410' />
        </div>
      </div>
    </header>
  );
}
