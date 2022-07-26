/* eslint-disable @next/next/no-img-element */
import React from "react";
import Nav from "../../components/Nav/Nav";
import { Title } from "../../components/Typography/Typography";
import Image from "next/image";
import IconStar from "/public/assets/icons/icon-star.svg";
import { URL_ONE_RESTAURANT } from "../../config/config";

export default function Menu({ restaurantMenu }: any) {
  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex gap-[20px] py-[30px] container'>
        <img className='w-[390px] h-[220px]' src={restaurantMenu?.imageUrl} alt='' />
        <div>
          <h3 className='text-4xl font-bold'>{restaurantMenu?.title}</h3>
          <p className='text pt-2'>10 - 20 min</p>
          <div className='flex '>
            <Image src={IconStar} width='15' height='15' alt='icon étoiles' />
            <p className='ml-1 text-[#007E8A] text'>4.5 Très bien</p>
          </div>
        </div>
      </div>
      <nav className='flex  py-[20px] border-t shadow'>
        <div className='container'>
          <a className='text-green uppercase mr-7 ' href='#'>
            Entrées
          </a>
          <a className='text-green uppercase mr-7' href='#'>
            Accompagnements
          </a>
          <a className='text-green uppercase mr-7' href='#'>
            Sauces
          </a>
          <a className='text-green uppercase mr-7' href='#'>
            Dessert
          </a>
          <a className='text-green uppercase mr-7' href='#'>
            Boissons
          </a>
        </div>
      </nav>
      <main className='container'>
        <div className='py-[40px]'>
          <Title>Menus</Title>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: { query: { id: string } }) {
  const restaurantMenuData = await fetch(URL_ONE_RESTAURANT + context.query.id);
  const restaurantMenu = await restaurantMenuData.json();

  return {
    props: {
      restaurantMenu,
    },
  };
}
