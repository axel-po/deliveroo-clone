import { useState } from "react";

const CardFood = ({ menu }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <button className='flex items-center justify-between gap-[20px] font-plexSans text-left py-[20px] px-[15px] border shadow '>
      <div>
        <h4 className='font-extrabold uppercase'>{menu?.name}</h4>
        <p className='pb-[18px] pt-[10px] txt-ellips'>{menu?.desc}</p>
        <p>{menu?.price} €</p>
      </div>
      <img className='w-[100px] h-[100px] border object-center object-cover p-2' src={menu?.imageUrl} alt='food' />
    </button>
  );
};

export default CardFood;
