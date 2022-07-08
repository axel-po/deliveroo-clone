import React from "react";

import CardCategoryFood from "../components/CardCategoryFood/CardCategoryFood";
import Nav from "../components/Nav/Nav";
import { TitlePageMenu } from "../components/Typography/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import CardFood from "../components/CardFood/CardFood";
import "swiper/css";
export default function menus() {
  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex'>
        <aside className='w-[58vw] max-w-[340px] h-screen border-r  p-[60px] '>
          <p className="font-extrabold">Livraison à : Reims Livraison</p>
        </aside>

        <main className='px-[30px]'>
          <TitlePageMenu>Livraison dans le quartier Reims - Centre Ville</TitlePageMenu>

          <div className='flex flex-wrap gap-3'>
            <CardCategoryFood />
            <CardCategoryFood />
            <CardCategoryFood />
            <CardCategoryFood />
          </div>

          <TitlePageMenu>À la une</TitlePageMenu>
          <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
          </div>
        </main>
      </div>
    </>
  );
}
