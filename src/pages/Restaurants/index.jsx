import Nav from "../../components/Nav/Nav";
import { TitlePageMenu } from "../../components/Typography/Typography";
import CardRestaurants, { CardRestaurantsSkeletons } from "../../components/CardRestaurants/CardRestaurants";
import { URL_CATEGORY, URL_RESTAURANTS } from "../../config/config";
import CardCategoryFood, { CardCategoryFoodSkeletons } from "../../components/CardCategoryFood/CardCategoryFood";
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

  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex'>
        <aside className='hidden h-screen border-r p-[60px] w-[58vw] max-w-[340px] sm:block'>
          <p className='font-extrabold'>Livraison à : {city}</p>
        </aside>
        <main className='w-full px-[30px]'>
          <h2 className='text-[22px] font-bold my-[20px]'>Livraison dans {city}</h2>
          <div className='flex flex-wrap gap-3'>
            {statusFoodCat === "done" ? (
              <>
                {foodCat?.data.map((foodCat) => (
                  <CardCategoryFood key={foodCat?._id} title={foodCat?.title} imageUrl={foodCat?.imageUrl} city={city} />
                ))}
              </>
            ) : (
              <>
                <CardCategoryFoodSkeletons />
                <CardCategoryFoodSkeletons />
                <CardCategoryFoodSkeletons />
                <CardCategoryFoodSkeletons />
              </>
            )}
          </div>
          <TitlePageMenu>À la une dans {foodCategory} </TitlePageMenu>
          <div className='grid mb-12 gap-3 grid-cols-restaurants'>
            {statusRestaurants === "done" ? (
              <>
                {restaurants?.data.map((restaurant) => (
                  <CardRestaurants key={restaurant?._id} id={restaurant?._id} title={restaurant?.title} imageUrl={restaurant?.imageUrl} />
                ))}
              </>
            ) : (
              <>
                <CardRestaurantsSkeletons />
                <CardRestaurantsSkeletons />
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
