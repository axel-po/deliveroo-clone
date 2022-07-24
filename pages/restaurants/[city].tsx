import Nav from "../../components/Nav/Nav";
import { TitlePageMenu } from "../../components/Typography/Typography";
import CardRestaurants from "../../components/CardRestaurants/CardRestaurants";
import { URL_GET_CATEGORY, URL_GET_RESTAURANTS } from "../../config/config";
import CardCategoryFood from "../../components/CardCategoryFood/CardCategoryFood";
import { Key } from "react";
import { useRouter } from "next/router";

export default function Restaurants({ foodCategories, restaurants }: any) {
  const router = useRouter();
  const { city } = router.query;

  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex'>
        <aside className='w-[58vw] max-w-[340px] h-screen border-r  p-[60px] '>
          <p className='font-extrabold'>Livraison à : {city}</p>
        </aside>

        <main className='px-[30px]'>
          <TitlePageMenu>Livraison dans </TitlePageMenu>

          <div className='flex flex-wrap gap-3'>
            {foodCategories.map((foodCat: { _id: Key | null | undefined; title: string; imageUrl: string }) => (
              <CardCategoryFood key={foodCat?._id} title={foodCat?.title} imageUrl={foodCat?.imageUrl} city={city} />
            ))}
          </div>

          <TitlePageMenu>À la une</TitlePageMenu>
          <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            {restaurants.map((restaurant: { _id: any; title: string; imageUrl: string }) => (
              <CardRestaurants key={restaurant?._id} id={restaurant?._id} title={restaurant?.title} imageUrl={restaurant?.imageUrl} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps(context: { query: { category: string } }) {
  const footCatData = await fetch(URL_GET_CATEGORY);
  const restaurantsData = await fetch(URL_GET_RESTAURANTS + context.query.category);

  const foodCategories = await footCatData.json();
  const restaurants = await restaurantsData.json();

  return {
    props: {
      foodCategories,
      restaurants,
    },
  };
}
