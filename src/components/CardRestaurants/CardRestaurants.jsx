import React from "react";
import IconStar from "../../assets/icons/icon-star.svg";
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
      <img src={process.env.REACT_APP_API_URL + imageUrl} alt='restaurant' className='w-full' />
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

export const CardRestaurantsSkeletons = () => {
  return <div className='border rounded shadow cursor-pointer  bg-gray-200 animate-pulse w-full min-h-[210px]'></div>;
};
