import React from "react";
import IconMobile from "../../assets/icons/app-store.svg";

export default function Footer() {
  return (
    <footer className='bg-[#2D3333] font-plexSans py-12'>
      <div className='grid grid-cols-1  gap-6 container  sm:grid-cols-2 lg:grid-cols-4'>
        <div className='bg-[#424848] text-white rounded  p-[24px]'>
          <h5 className='font-bold text-[18px] mb-2'>Découvir Deliveroo</h5>
          <ul className='text-sm leading-7'>
            <li>Investisseurs</li>
            <li>A propos</li>
            <li>Vente à emporter</li>
            <li>Voir plus</li>
            <li>Espace presse</li>
            <li>Investisseurs</li>
            <li>Blog Foodscene</li>
            <li>Blog Tech</li>
            <li>Nous rejoindre</li>
            <li>Inscription restaurant</li>
          </ul>
        </div>

        <div className='bg-[#424848] text-white rounded  p-[24px]'>
          <h5 className='font-bold text-xl mb-2'>Mentions légales</h5>
          <ul className='text-sm leading-7'>
            <li>Mentions légales</li>
            <li>Confidentialité</li>
            <li>Cookies</li>
          </ul>
        </div>

        <div className='bg-[#424848] text-white rounded  p-[24px]'>
          <h5 className='font-bold text-xl mb-2'>Aide </h5>
          <ul className='text-sm leading-7'>
            <li>Nous contacter</li>
            <li>FAQ</li>
            <li>Types de cuisine</li>
            <li>Plan du site</li>
          </ul>
        </div>

        <div className='bg-[#424848] text-white rounded  p-[24px]'>
          <h5 className='font-bold text-xl mb-5'>Gardez Deliveroo dans votre poche</h5>
          <ul className='text-sm leading-7'>
            <img src={IconMobile} alt='apple store play sotre' />
          </ul>
        </div>
        <p className='text-[#585c5c]'>
          &copy; 2022 - Deliveroo Clone by{" "}
          <a className='font-bold text-green' href='https://www.axel-pointud.fr/' target='_blank' rel='noreferrer'>
            Axel Po
          </a>
        </p>
      </div>
    </footer>
  );
}
