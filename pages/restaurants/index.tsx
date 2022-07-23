import Nav from "../../components/Nav/Nav";
import { TitlePageMenu } from "../../components/Typography/Typography";
import CardRestaurants from "../../components/CardRestaurants/CardRestaurants";
import { URL_GET_CATEGORY } from "../../config/config";
import CardCategoryFood from "../../components/CardCategoryFood/CardCategoryFood";
import { Key } from "react";
import { useRouter } from "next/router";
export default function Restaurants({ foodCategories }: any) {
  const path = useRouter();

  console.log(path);
  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex'>
        <aside className='w-[58vw] max-w-[340px] h-screen border-r  p-[60px] '>
          <p className='font-extrabold'>Livraison à : Reims Livraison</p>
        </aside>

        <main className='px-[30px]'>
          <TitlePageMenu>Livraison dans le quartier Reims - Centre Ville</TitlePageMenu>

          <div className='flex flex-wrap gap-3'>
            {foodCategories.map((foodCat: { _id: Key | null | undefined; title: string; imageUrl: string }) => (
              <CardCategoryFood key={foodCat?._id} title={foodCat?.title} imageUrl={foodCat?.imageUrl} />
            ))}
          </div>

          <TitlePageMenu>À la une</TitlePageMenu>
          <div className='grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
            <CardRestaurants />
            <CardRestaurants />
            <CardRestaurants />
            <CardRestaurants />
            <CardRestaurants />
            <CardRestaurants />
            <CardRestaurants />
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await fetch(URL_GET_CATEGORY);
  const foodCategories = await data.json();

  return {
    props: {
      foodCategories,
    },
  };
}
