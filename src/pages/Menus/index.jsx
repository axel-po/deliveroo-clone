import React, { useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import { Title } from "../../components/Typography/Typography";
import IconStar from "../../assets/icons/icon-star.svg";
import { URL_ONE_RESTAURANT, URL_MENUS } from "../../config/config";
import { useFetchData } from "../../hooks/useFetchData";
import { clientApi } from "../../utils/api";
import { useLocation } from "react-router-dom";

export default function Menus({ restaurantMenu }) {
  /* Hooks */
  const { state: idRestaurant } = useLocation();

  const { data: restaurant, execute: executeRestaurant, status: statusRestaurant } = useFetchData();
  const { data: menus, execute: executeMenus, status: statusMenus } = useFetchData();

  useEffect(() => {
    executeRestaurant(clientApi(URL_ONE_RESTAURANT + idRestaurant));
    executeMenus(clientApi(URL_MENUS + idRestaurant));
  }, [executeRestaurant, idRestaurant]);
  console.log(menus);
  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex gap-[20px] py-[30px] container'>
        <img className='w-[390px] h-[220px]' src={restaurant?.data?.imageUrl} alt='' />
        <div>
          {statusRestaurant === "done" ? (
            <h3 className='text-4xl font-bold'>{restaurant?.data?.title}</h3>
          ) : (
            <h3 className='text-4xl font-bold'>...</h3>
          )}

          <p className='text pt-2'>10 - 20 min</p>
          <div className='flex items-center'>
            <img src={IconStar} alt='icon étoiles' className='w-[15px] h-[15px]' />
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
