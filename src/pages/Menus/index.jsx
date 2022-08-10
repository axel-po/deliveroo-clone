import React, { useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import { Title } from "../../components/Typography/Typography";
import IconStar from "../../assets/icons/icon-star.svg";
import { URL_ONE_RESTAURANT, URL_MENUS } from "../../config/config";
import { useFetchData } from "../../hooks/useFetchData";
import { clientApi } from "../../utils/api";
import { useLocation } from "react-router-dom";
import CardFood from "../../components/CardFood/CardFood";
import Cart from "../../components/Cart/Cart";

export default function Menus({ restaurantMenu }) {
  /* Hooks */
  const { state: idRestaurant } = useLocation();

  const { data: restaurant, execute: executeRestaurant, status: statusRestaurant } = useFetchData();
  const { data: menus, execute: executeMenus, status: statusMenus } = useFetchData();

  useEffect(() => {
    executeRestaurant(clientApi(URL_ONE_RESTAURANT + idRestaurant));
    executeMenus(clientApi(URL_MENUS + idRestaurant));
  }, [executeMenus, executeRestaurant, idRestaurant]);

  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex  gap-[20px] py-[30px] container--small'>
        <img className='w-[390px] h-[220px]' src={restaurant?.data?.imageUrl} alt='poster restaurant' />
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
        <div className='container--small'>
          <a className='text-green uppercase mr-7 ' href='/'>
            Entrées
          </a>
          <a className='text-green uppercase mr-7' href='/'>
            Accompagnements
          </a>
          <a className='text-green uppercase mr-7' href='/'>
            Sauces
          </a>
          <a className='text-green uppercase mr-7' href='/'>
            Dessert
          </a>
          <a className='text-green uppercase mr-7' href='/'>
            Boissons
          </a>
        </div>
      </nav>
      <main className='grid grid-cols-1fr md:grid-cols-[1fr_420px] gap-[25px] container--small py-[40px] '>
        <div>
          <Title>Menus</Title>
          <div className='grid grid-cols-menus gap-4'>
            {statusMenus === "done" ? (
              <>
                {menus?.data.map((menu) => (
                  <CardFood key={menu?._id} menu={menu} />
                ))}
              </>
            ) : (
              <div role='status' className='flex items-center justify-between gap-[20px]   bg-gray-00 shadow animate-pulse '>
                <span className='sr-only'>Loading...</span>
                <div>
                  <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] mb-4'></div>
                  <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] mb-4'></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Cart />
      </main>
    </>
  );
}
