import React from "react";
import Nav from "../components/Nav/Nav";
import { Title } from "../components/Typography/Typography";
import Image from "next/image";
import IconStar from "/public/assets/icons/icon-star.svg";

export default function Food() {
  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex gap-[20px]  py-[30px] container'>
        <img
          className='w-[390px] h-[220px]'
          src='https://rs-menus-api.roocdn.com/images/79b8815c-d00c-4238-9c73-7cb971b3cdf9/image.jpeg?width=778&height=438&auto=webp&format=jpg&fit=crop'
          alt=''
        />
        <div>
          <h3 className='text-4xl font-bold'>Maison Dumont</h3>
          <p className='text pt-2'>10 - 20 min</p>
          <div className='flex '>
            <Image src={IconStar} width='15' height='15' alt='icon étoiles' />
            <p className='ml-1 text-[#007E8A] text'>4.5 Très bien</p>
          </div>
        </div>
      </div>
      <nav className='flex'>
        <a href='#'>Entrées</a>
        <a href='#'>Accompagnements</a>
        <a href='#'>Sauces</a>
        <a href='#'>Dessert</a>
        <a href='#'>Boissons</a>
      </nav>
      <main>
        <div></div>
      </main>
    </>
  );
}
