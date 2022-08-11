import React, { useEffect } from "react";
import Nav from "../../components/Nav/Nav";
import { Title } from "../../components/Typography/Typography";
import IconStar from "../../assets/icons/icon-star.svg";
import { URL_ONE_RESTAURANT, URL_MENUS } from "../../config/config";
import { useFetchData } from "../../hooks/useFetchData";
import { clientApi } from "../../utils/api";
import { useLocation } from "react-router-dom";
import CardFood, { CardFoodSkeletons } from "../../components/CardFood/CardFood";
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
      <div className='flex flex-col gap-[20px] py-[30px] container--small md:flex-row'>
        {statusRestaurant === "done" ? (
          <img
            className='w-full md:w-[390px] md:h-[220px]'
            src={process.env.REACT_APP_API_URL + restaurant?.data?.imageUrl}
            alt='poster restaurant'
          />
        ) : (
          <div className='border rounded shadow cursor-pointer  bg-gray-200 animate-pulse w-full max-w-[390px] min-h-[210px] h-[80%]'></div>
        )}
        <div>
          {statusRestaurant === "done" ? (
            <h3 className='text-4xl font-bold'>{restaurant?.data?.title}</h3>
          ) : (
            <p className='w-[200px] h-[30px] rounded bg-gray-200 animate-pulse'></p>
          )}
          <p className='text pt-2'>10 - 20 min</p>
          <div className='flex items-center'>
            <img src={IconStar} alt='icon étoiles' className='w-[15px] h-[15px]' />
            <p className='ml-1 text-[#007E8A] text'>4.5 Très bien</p>
          </div>
        </div>
      </div>
      <nav className='flex py-[20px] border-t shadow'>
        <div className='container--small'>
          <button className='text-green uppercase mr-7'>Entrées</button>
          <button className='text-green uppercase mr-7'>Accompagnements</button>
          <button className='text-green uppercase mr-7'>Sauces</button>
          <button className='text-green uppercase mr-7'>Dessert</button>
          <button className='text-green uppercase mr-7'>Boissons</button>
        </div>
      </nav>
      <main className='grid grid-cols-1fr gap-[25px] container--small py-[40px] md:grid-cols-[1fr_420px]'>
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
              <>
                <CardFoodSkeletons />
                <CardFoodSkeletons />
                <CardFoodSkeletons />
                <CardFoodSkeletons />
              </>
            )}
          </div>
        </div>
        <Cart />
      </main>
    </>
  );
}
