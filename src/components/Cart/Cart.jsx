import React from "react";
import IconCart from "../../assets/icons/icon-cart-gray.svg";
import { Button } from "../../components/Buttons/Buttons";
import { useCart } from "../../context/cartContext";

export default function Cart() {
  const {
    state: { cart },
  } = useCart();

  return (
    <aside className='sticky top-[30px] flex flex-col justify-between border font-plexSans p-[15px] h-[228px]'>
      <div className='flex items-center flex-col py-5'>
        {cart.length !== 0 ? (
          <>
            {cart.map((item) => (
              <p>
                {item?.name} x{item?.quantity}
              </p>
            ))}
          </>
        ) : (
          <>
            <img className='w-[55px] mb-[10px]' src={IconCart} alt='icon-cart' />
            <p className='text-[#abadad]'>Votre panier est vide</p>
          </>
        )}
      </div>
      <button className='block text-center bg-green  text-white font-semibold rounded py-[12px] px-[24px] font-plexSans cursor-pointer w-full'>
        Finaliser la commande
      </button>
    </aside>
  );
}
