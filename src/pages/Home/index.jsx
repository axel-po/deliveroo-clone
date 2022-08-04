import { useState } from "react";
import { useCity } from "../../context/cityContext";
import { cityData } from "../../utils/helpers";
import Header from "../../components/Header/Header";
import { Title } from "../../components/Typography/Typography";
import { useNavigate } from "react-router-dom";
import { FOOD_CATEGORIES } from "../../utils/helpers";

export default function Home() {
  /* Hooks */
  const [errorCity, setErrorCity] = useState(false);
  const { city } = useCity();

  let navigate = useNavigate();

  // Functions
  const redirectRestaurants = (category) => {
    if (city === "") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setErrorCity(true);
    } else {
      navigate(`/restaurants/${city}`, { state: category });
    }
  };

  return (
    <>
      <Header cityData={cityData} errorCity={errorCity} setErrorCity={setErrorCity} />
      <section className='container py-[50px] '>
        <Title>À la carte connectée : </Title>
        <div className='grid gap-[30px] grid-cols-1 sm:grid-cols-2 md:grid-cols-12'>
          <article className='md:col-span-5' onClick={() => redirectRestaurants(FOOD_CATEGORIES[1])}>
            <div className="flex justify-center items-center h-[150px] text-white text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/285/menu-tag-image.jpg?width=860&height=300&auto=webp&format=jpg&fit=crop&v=1653042905')]">
              <h3 className='text-center'>Repas d affaires</h3>
            </div>
            <p className='font-plexSans my-1'>
              Que vous planifiiez un événement ou que vous vouliez nourrir votre équipe, parcourez à notre sélection de plateaux faits pour le bureau.
            </p>
            <button className='text-green'>Voir Repas affaires</button>
          </article>

          <article className='md:col-start-6 md:col-end-13' onClick={() => redirectRestaurants(FOOD_CATEGORIES[0])}>
            <div className="flex justify-center items-center h-[150px] text-white text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/288/menu-tag-image.jpg?width=1320&height=300&auto=webp&format=jpg&fit=crop&v=1648802301')]">
              <h3 className='text-center text-clamp-lg'>Plats réconfortants</h3>
            </div>
            <p className='font-plexSans my-1'>De bons petits plats qui réchauffent le coeur.</p>
            <button className='text-green'>Voir Plats réconfortants</button>
          </article>

          <article className='md:col-span-8'>
            <div className="flex justify-center items-center h-[150px] text-white text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/796/menu-tag-image.jpg?width=1320&height=300&auto=webp&format=jpg&fit=crop&v=1625488297')]">
              <h3>Equilibré</h3>
            </div>
            <button className='text-green mt-1'>Voir Equilibré</button>
          </article>

          <article className='md:col-start-9 md:col-end-13'>
            <div className="flex justify-center items-center h-[150px] text-white text-center text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/331/menu-tag-image.jpg?width=860&height=300&auto=webp&format=jpg&fit=crop&v=1548761115')]">
              <h3>Grands plaisirs, petits prix</h3>
            </div>
            <p className='font-plexSans my-1'>Se régaler est une affaire de tous les jours. Une sélection validée par votre porte-monnaie.</p>
            <button className='text-green'>Voir Grands plaisirs, petits prix</button>
          </article>

          <article className='md:col-span-5' onClick={() => redirectRestaurants(FOOD_CATEGORIES[1])}>
            <div className="flex justify-center items-center h-[150px] text-white text-center text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/328/menu-tag-image.jpg?width=860&height=300&auto=webp&format=jpg&fit=crop&v=1548761261')]">
              <h3>Desserts et pauses sucrées</h3>
            </div>
            <p className='font-plexSans my-1'>Des petits plaisirs gourmands pour faire pétiller votre journée.</p>
            <button className='text-green'>Voir Desserts et pauses sucrées</button>
          </article>

          <article className='md:col-start-6 md:col-end-13'>
            <div className="flex justify-center items-center h-[150px] text-white text-center text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/289/menu-tag-image.jpg?width=1320&height=300&auto=webp&format=jpg&fit=crop&v=1548857690')]">
              <h3>Pépites de quartier</h3>
            </div>
            <p className='font-plexSans my-1'>Découvrez la sélection gourmande de notre équipe experte et passionnée.</p>
            <button className='text-green'>Voir Pépites de quartier</button>
          </article>

          <article className='md:col-span-12'>
            <div className="flex justify-center items-center h-[150px] text-white text-center text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/293/menu-tag-image.jpg?width=2240&height=300&auto=webp&format=jpg&fit=crop&v=1547125827')]">
              <h3>Exclusivement sur Deliveroo</h3>
            </div>
            <p className='font-plexSans my-1'>Du plus pointu au repaire de quartier, vous ne les trouverez nulle part ailleurs.</p>
            <button className='text-green'>Voir Exclusivement sur Deliveroo</button>
          </article>
        </div>
      </section>

      <section className=' bg-[#ffeae4] py-[50px]'>
        <div className='container'>
          <Title>Vous les aimez ? Faites-vous livrer.</Title>

          <div className='grid grid-cols-1  gap-8 sm:grid-cols-3'>
            <article>
              <img
                className='w-full'
                src='https://f.roocdn.com/images/menus/3644/header-image.jpg?width=706&height=354&auto=webp&format=jpg&fit=crop&v=1592415707'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Le Ruisseau</h3>
            </article>
            <article>
              <img
                className='w-full'
                src='https://f.roocdn.com/images/menus/20615/header-image.jpg?width=353&height=177&auto=webp&format=jpg&fit=crop&v=1593443059'
                alt='salade'
              />
              <h3 className='text-2xl my-1'>Eat Salad</h3>
            </article>
            <article>
              <img
                className='w-full'
                src='https://f.roocdn.com/images/menus/99369/header-image.jpg?width=353&height=177&auto=webp&format=jpg&fit=crop&v=1588697233'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Yaai Thai</h3>
            </article>
            <article>
              <img
                className='w-full'
                src='https://f.roocdn.com/images/menus/41204/header-image.jpg?width=353&height=177&auto=webp&format=jpg&fit=crop&v=1648460166'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Sushi Shop</h3>
            </article>
            <article>
              <img
                className='w-full'
                src='https://f.roocdn.com/images/menus/20818/header-image.jpg?width=353&height=177&auto=webp&format=jpg&fit=crop&v=1631263461'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Jour</h3>
            </article>
            <article>
              <img
                className='w-full'
                src='https://f.roocdn.com/images/menus/20218/header-image.jpg?width=353&height=177&auto=webp&format=jpg&fit=crop&v=1588062998'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Paris New York</h3>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
