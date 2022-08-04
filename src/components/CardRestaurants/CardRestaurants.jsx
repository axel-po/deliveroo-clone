import React from "react";
import IconStar from "../../assets/icons/icon-star.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CardRestaurants({ id, title, imageUrl }) {
  let navigate = useNavigate();

  const goToRestaurant = () => {
    navigate(
      `/menus/${title
        .split(" ")
        .filter((e) => e.trim().length)
        .join("-")
        .toLocaleLowerCase()}`,
      { state: id }
    );
  };
  return (
    <button onClick={goToRestaurant} className='border rounded shadow cursor-pointer'>
      <img src={imageUrl} alt='restaurant' />
      <div className='p-3'>
        <h6 className='text-left text-[16px] mb-2'>{title}</h6>
        <div className='flex items-center'>
          <img src={IconStar} alt='icon étoiles' className='w-[15px] h-[15px]' />
          <p className='ml-1 text-[#007E8A] text-xs'>4.5 Très bien</p>
        </div>
      </div>
    </button>
  );
}
