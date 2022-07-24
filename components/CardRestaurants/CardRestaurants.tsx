/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import IconStar from "/public/assets/icons/icon-star.svg";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  imageUrl: string;
};

export default function CardRestaurants({ id, title, imageUrl }: Props) {
  return (
    <Link
      href={{
        pathname: `/menu/${title}`,
        query: { id },
      }}>
      <a>
        <article className='border rounded shadow cursor-pointer'>
          <img src={imageUrl} alt='restaurant' />
          <div className='p-3'>
            <h6 className='font-bold text-[16px] mb-2'>{title}</h6>
            <div className='flex '>
              <Image src={IconStar} width='15' height='15' alt='icon étoiles' />
              <p className='ml-1 text-[#007E8A] text-xs'>4.5 Très bien</p>
            </div>
          </div>
        </article>
      </a>
    </Link>
  );
}
