import React from "react";
import IconCart from "../../assets/icons/icon-cart-gray.svg";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";

export default function Cart() {
  const {
    state: { cart },
  } = useCart();

  const { isAuth } = useAuth();

  return (
    <aside className={`sticky top-[30px] flex flex-col justify-between border font-plexSans p-[15px] ${cart.length !== 0 ? "h-max" : "h-[228px]"} `}>
      <>
        {cart.length !== 0 ? (
          <div className=''>
            <h5 className='text-[18px] font-bold mb-[20px]'>Votre commande</h5>
            {cart.map((item) => (
              <div key={item?._id} className='grid grid-cols-[2fr_1fr] mb-[20px]'>
                <p>
                  {item?.name} <span className='font-bold'>x{item?.quantity}</span>
                </p>
                <p className='justify-self-end'>{item?.price.toFixed(2) * item?.quantity} €</p>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex items-center flex-col py-5'>
            <img className='w-[55px] mb-[10px]' src={IconCart} alt='icon-cart' />
            <p className='text-[#abadad]'>Votre panier est vide</p>
          </div>
        )}
      </>
      <Link
        to={isAuth ? "/checkout" : "/auth/login"}
        disabled={cart.length === 0 && true}
        className={`${
          cart.length === 0 && true
            ? "text-center col-span-2 font-semibold rounded py-[12px] px-[24px] cursor-not-allowed bg-[#E2E5E5] text-[#b5b8b8]"
            : "text-center col-span-2 bg-green  text-white font-semibold rounded py-[12px] px-[24px] hover:bg-[#29C2B3]"
        }`}>
        Finaliser la commande
      </Link>
    </aside>
  );
}
