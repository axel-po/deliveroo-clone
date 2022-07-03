/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Header from "../components/Header/Header";
import DelivrooIllustration from "/public/assets/delivroo-illustration.svg";
import ApplePlayStore from "/public/assets/icons/app-store.svg";
import { Title } from "../components/Typography/Typography";
import { Button } from "../components/Buttons/Buttons";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <section className='container py-[50px] '>
        <Title>À la carte</Title>

        <div className='grid grid-cols-12  gap-[30px]'>
          <article className='col-span-5'>
            <div className="flex justify-center items-center h-[150px] text-white text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/285/menu-tag-image.jpg?width=860&height=300&auto=webp&format=jpg&fit=crop&v=1653042905')]">
              <h3>Repas d affaires</h3>
            </div>
            <p className='font-plexSans my-1'>
              Que vous planifiiez un événement ou que vous vouliez nourrir votre équipe, parcourez à notre sélection de plateaux faits pour le bureau.
            </p>
            <button className='text-green'>Voir Repas affaires</button>
          </article>

          <article className='col-start-6 col-end-13'>
            <div className="flex justify-center items-center h-[150px] text-white text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/288/menu-tag-image.jpg?width=1320&height=300&auto=webp&format=jpg&fit=crop&v=1648802301')]">
              <h3>Plats réconfortants</h3>
            </div>
            <p className='font-plexSans my-1'>De bons petits plats qui réchauffent le coeur.</p>
            <button className='text-green'>Voir Plats réconfortants</button>
          </article>

          <article className='col-span-8'>
            <div className="flex justify-center items-center h-[150px] text-white text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/796/menu-tag-image.jpg?width=1320&height=300&auto=webp&format=jpg&fit=crop&v=1625488297')]">
              <h3>Equilibré</h3>
            </div>
            <button className='text-green mt-1'>Voir Equilibré</button>
          </article>

          <article className='col-start-9 col-end-13'>
            <div className="flex justify-center items-center h-[150px] text-white text-center text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/331/menu-tag-image.jpg?width=860&height=300&auto=webp&format=jpg&fit=crop&v=1548761115')]">
              <h3>Grands plaisirs, petits prix</h3>
            </div>
            <p className='font-plexSans my-1'>Se régaler est une affaire de tous les jours. Une sélection validée par votre porte-monnaie.</p>
            <button className='text-green'>Voir Grands plaisirs, petits prix</button>
          </article>

          <article className='col-span-5'>
            <div className="flex justify-center items-center h-[150px] text-white text-center text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/328/menu-tag-image.jpg?width=860&height=300&auto=webp&format=jpg&fit=crop&v=1548761261')]">
              <h3>Desserts et pauses sucrées</h3>
            </div>
            <p className='font-plexSans my-1'>Des petits plaisirs gourmands pour faire pétiller votre journée.</p>
            <button className='text-green'>Voir Desserts et pauses sucrées</button>
          </article>

          <article className='col-start-6 col-end-13'>
            <div className="flex justify-center items-center h-[150px] text-white text-center text-4xl font-semibold cursor-pointer bg-cover bg-center bg-[url('https://f.roocdn.com/images/menu_tags/289/menu-tag-image.jpg?width=1320&height=300&auto=webp&format=jpg&fit=crop&v=1548857690')]">
              <h3>Pépites de quartier</h3>
            </div>
            <p className='font-plexSans my-1'>Découvrez la sélection gourmande de notre équipe experte et passionnée.</p>
            <button className='text-green'>Voir Pépites de quartier</button>
          </article>

          <article className='col-span-12'>
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

          <div className='grid grid-cols-3 gap-8'>
            <article>
              <img
                src='https://f.roocdn.com/images/menus/3644/header-image.jpg?width=706&height=354&auto=webp&format=jpg&fit=crop&v=1592415707'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Le Ruisseau</h3>
            </article>
            <article>
              <img
                src='https://f.roocdn.com/images/menus/3644/header-image.jpg?width=706&height=354&auto=webp&format=jpg&fit=crop&v=1592415707'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Le Ruisseau</h3>
            </article>
            <article>
              <img
                src='https://f.roocdn.com/images/menus/3644/header-image.jpg?width=706&height=354&auto=webp&format=jpg&fit=crop&v=1592415707'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Le Ruisseau</h3>
            </article>
            <article>
              <img
                src='https://f.roocdn.com/images/menus/3644/header-image.jpg?width=706&height=354&auto=webp&format=jpg&fit=crop&v=1592415707'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Le Ruisseau</h3>
            </article>
            <article>
              <img
                src='https://f.roocdn.com/images/menus/3644/header-image.jpg?width=706&height=354&auto=webp&format=jpg&fit=crop&v=1592415707'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Le Ruisseau</h3>
            </article>
            <article>
              <img
                src='https://f.roocdn.com/images/menus/3644/header-image.jpg?width=706&height=354&auto=webp&format=jpg&fit=crop&v=1592415707'
                alt='burger'
              />
              <h3 className='text-2xl my-1'>Le Ruisseau</h3>
            </article>
          </div>
        </div>
      </section>

      <section className='bg-[#F9FAFA] py-[50px]'>
        <div className='container'>
          <Title>Tout chaud !</Title>

          <div className='flex justify-center items-center h-[240px] bg-white rounded overflow-hidden mb-[30px]'>
            <div className='w-6/12 '>
              <img className='w-full h-full object-cover clip-img' src='https://cwa.roocdn.com/_next/static/business.4fa3b853.jpg' alt='' />
            </div>
            <div className=' w-6/12 pl-0 p-[40px]'>
              <h4 className='text-[28px] font-bold'>Deliveroo for Work</h4>
              <p className='my-3'>Employés ou clients affamés, notre équipe corporate est là pour vous aider.</p>
              <Button>Se renseigner</Button>
            </div>
          </div>

          <div className='flex justify-center items-center h-[240px]  bg-white rounded overflow-hidden'>
            <div className='w-6/12 order-2'>
              <Image className='w-full h-full object-cover clip-left-img' src={DelivrooIllustration} alt='' width='560' height='232' />
            </div>
            <div className=' w-6/12 p-[40px]'>
              <h4 className='text-[28px] font-bold'>Avez-vous l application ?</h4>
              <p className='my-3'>Employés ou clients affamés, notre équipe corporate est là pour vous aider.</p>
              <Image className='cursor-pointer' src={ApplePlayStore} alt='apple store play store' />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
