import Nav from "../../components/Nav/Nav";
import { TitlePageMenu } from "../../components/Typography/Typography";
import CardRestaurants from "../../components/CardRestaurants/CardRestaurants";
import { URL_CATEGORY, URL_RESTAURANTS } from "../../config/config";
import CardCategoryFood from "../../components/CardCategoryFood/CardCategoryFood";
import { useEffect } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { clientApi } from "../../utils/api";
import { useLocation, useParams } from "react-router-dom";

export default function Restaurants() {
  /* Hooks */
  const { state: foodCategory } = useLocation();
  const { city } = useParams();

  /* Call API */
  const { data: foodCat, execute: executeFoodCat, status: statusFoodCat } = useFetchData();
  const { data: restaurants, execute: executeRestaurants, status: statusRestaurants } = useFetchData();

  useEffect(() => {
    executeFoodCat(clientApi(URL_CATEGORY));
    executeRestaurants(clientApi(URL_RESTAURANTS + foodCategory));
  }, [foodCategory, executeFoodCat, executeRestaurants]);
  console.log(restaurants);
  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex'>
        <aside className='w-[58vw] max-w-[340px] h-screen border-r  p-[60px] '>
          <p className='font-extrabold'>Livraison à : {city}</p>
        </aside>

        <main className='px-[30px]'>
          <h2 className='text-[22px] font-bold my-[20px]'>Livraison dans {city}</h2>

          <div className='flex flex-wrap gap-3'>
            {(statusFoodCat === "fetching") | (statusFoodCat === "error") ? (
              <p>...</p>
            ) : (
              <>
                {foodCat?.data.map((foodCat) => (
                  <CardCategoryFood key={foodCat?._id} title={foodCat?.title} imageUrl={foodCat?.imageUrl} city={city} />
                ))}
              </>
            )}
          </div>

          <TitlePageMenu>À la une dans {foodCategory} </TitlePageMenu>
          <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {(statusRestaurants === "fetching") | (statusRestaurants === "error") ? (
              <p>...</p>
            ) : (
              <>
                {restaurants?.data.map((restaurant) => (
                  <CardRestaurants key={restaurant?._id} id={restaurant?._id} title={restaurant?.title} imageUrl={restaurant?.imageUrl} />
                ))}
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
