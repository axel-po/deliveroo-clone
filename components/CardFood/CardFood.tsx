/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import IconStar from "/public/assets/icons/icon-star.svg";

export default function CardFood() {
  return (
    <article className='border shadow cursor-pointer'>
      <img
        src="https://rs-menus-api.roocdn.com/images/2f376562-2cd9-45b4-991b-7b3c2d418ef1/image.jpeg?width=524&height=294&auto=webp&format=jpg&fit=crop&v='"
        alt='food'
      />
      <div className='p-3'>
        <h6 className='font-bold text-[16px] mb-2'>G LA DALLE</h6>
        <div className='flex '>
          <Image src={IconStar} width='15' height='15' alt='icon étoiles' />
          <p className='ml-1 text-[#007E8A] text-xs'>4.5 Très bien</p>
        </div>
      </div>
    </article>
  );
}
