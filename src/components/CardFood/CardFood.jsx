import { useState } from "react";
import { Button } from "../Buttons/Buttons";

const CardFood = ({ menu }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className='flex items-center justify-between gap-[20px] font-plexSans text-left py-[20px] px-[15px] border shadow '>
        <div>
          <h4 className='font-extrabold uppercase'>{menu?.name}</h4>
          <p className='pb-[18px] pt-[10px] txt-ellips'>{menu?.desc}</p>
          <p>{menu?.price} €</p>
        </div>
        <img className='w-[100px] h-[100px] border object-center object-cover p-2' src={menu?.imageUrl} alt='food' />
      </button>
      {modalOpen && <FoodModal menu={menu} setModalOpen={setModalOpen} />}
    </>
  );
};

const FoodModal = ({ menu, setModalOpen }) => {
  const closeModal = (e) => {
    if (e.target.classList.contains("overlay")) {
      setModalOpen(false);
    }
  };

  return (
    <div
      onClick={closeModal}
      className='overlay bg-overlayColor fixed overflow-hidden h-screen inset-0 z-50 cursor-default flex items-center justify-center'>
      <div className='flex flex-col items-center rounded w-[90%] max-w-[500px] bg-white'>
        <img className='rounded p-[20px]' src={menu?.imageUrl} alt='food' />
        <div className='p-5'>
          <h3 className='text-[28px] font-stratos'>{menu?.name}</h3>
          <p className='py-[20px]'>{menu?.desc}</p>
          <Button>Ajouter pour {menu?.price} €</Button>
        </div>
      </div>
    </div>
  );
};

export default CardFood;
