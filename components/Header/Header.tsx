import React from "react";
import Nav from "../Nav/Nav";
import { Button } from "../Buttons/Buttons";

export default function Header() {
  return (
    <header className='h-[500px] bg-[#D0EB99]'>
      <Nav />
      <div className='flex items-center  h-full container'>
        <div className='w-6/12'>
          <h2 className='text-violet leading-[48px] text-[40px] font-semibold pb-[32px]'>Vos restaurants préférés, livrés chez vous en un clic</h2>
          <form className='bg-white p-[32px] rounded font-plexSans'>
            <label htmlFor='adress'>Entrez votre adresse pour trouver les restaurants à proximité</label>
            <div className='flex gap-3 mt-[10px]'>
              <input className='px-3 w-full border rounded' type='text' id='adress' placeholder='Saisissez votre adresse' />
              <Button>Chercher</Button>
            </div>
          </form>
        </div>

        <div className='w-6/12'></div>
      </div>
    </header>
  );
}


// AIzaSyCBrWS_rqVoTFR6DVl-8L7i1tq2lbNRVtc