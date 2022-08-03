import Nav from "../../components/Nav/Nav";
import { TitlePageMenu } from "../../components/Typography/Typography";
import CardRestaurants from "../../components/CardRestaurants/CardRestaurants";
import { URL_CATEGORY, URL_RESTAURANTS } from "../../config/config";
import CardCategoryFood from "../../components/CardCategoryFood/CardCategoryFood";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Restaurants() {
  const [foodCat, setFoodCat] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const { query } = useLocation();

  // Call API
  useEffect(() => {
    const foodCat = axios
      .get(URL_CATEGORY)
      .then((res) => res.data)
      .then((data) => {
        setFoodCat(data);
      });
  }, []);

  useEffect(() => {
    const restaurants = axios
      .get(URL_RESTAURANTS + query.category)
      .then((res) => res.data)
      .then((data) => {
        setRestaurants(data);
      });
  }, [query.category]);

  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex'>
        <aside className='w-[58vw] max-w-[340px] h-screen border-r  p-[60px] '>
          <p className='font-extrabold'>Livraison à : {query.city}</p>
        </aside>

        <main className='px-[30px]'>
          <h2 className='text-[22px] font-bold my-[20px]'>Livraison dans {query.city}</h2>

          <div className='flex flex-wrap gap-3'>
            {foodCat.map((foodCat) => (
              <CardCategoryFood key={foodCat?._id} title={foodCat?.title} imageUrl={foodCat?.imageUrl} city={query?.city} />
            ))}
          </div>

          <TitlePageMenu>À la une</TitlePageMenu>
          <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {restaurants.map((restaurant) => (
              <CardRestaurants key={restaurant?._id} id={restaurant?._id} title={restaurant?.title} imageUrl={restaurant?.imageUrl} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
