import React from "react";
import CardFood from "../components/CardFood/CardFood";
import Nav from "../components/Nav/Nav";
import { TitlePageMenu } from "../components/Typography/Typography";

export default function menus() {
  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex'>
        <aside className='w-[330px] h-screen bg-lime-300 p-[60px]'>
          <p>Livraison à : Reims Livraison</p>
        </aside>

        <main className='p-[50px]'>
          <TitlePageMenu>Livraison dans le quartier Reims - Centre Ville</TitlePageMenu>

          <div className='flex'>

          </div>

          <TitlePageMenu>À la une</TitlePageMenu>

          <CardFood />
        </main>
      </div>
    </>
  );
}
