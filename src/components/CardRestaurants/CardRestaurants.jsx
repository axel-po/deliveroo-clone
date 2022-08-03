import React from "react";
import IconStar from "../../assets/icons/icon-star.svg";
import { Link } from "react-router-dom";

export default function CardRestaurants({ id, title, imageUrl }) {
  return (
    <Link
      to={{
        pathname: `/menu/${title
          .split(" ")
          .filter((e) => e.trim().length)
          .join("-")
          .toLocaleLowerCase()}`,
        query: { id },
      }}>
      <article className='border rounded shadow cursor-pointer'>
        <img src={imageUrl} alt='restaurant' />
        <div className='p-3'>
          <h6 className='font-bold text-[16px] mb-2'>{title}</h6>
          <div className='flex '>
            <img src={IconStar} alt='icon étoiles' />
            {/* width='15' height='15' */}
            <p className='ml-1 text-[#007E8A] text-xs'>4.5 Très bien</p>
          </div>
        </div>
      </article>
    </Link>
  );
}
