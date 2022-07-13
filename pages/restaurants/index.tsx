import Nav from "../../components/Nav/Nav";
import { TitlePageMenu } from "../../components/Typography/Typography";
import CardRestaurants from "../../components/CardRestaurants/CardRestaurants";

export default function Restaurants() {
  return (
    <>
      <Nav page={{ page: "menu" }} />
      <div className='flex'>
        <aside className='w-[58vw] max-w-[340px] h-screen border-r  p-[60px] '>
          <p className='font-extrabold'>Livraison à : Reims Livraison</p>
        </aside>

        <main className='px-[30px]'>
          <TitlePageMenu>Livraison dans le quartier Reims - Centre Ville</TitlePageMenu>

          <div className='flex flex-wrap gap-3'></div>

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
