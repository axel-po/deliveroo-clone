import { useState, useEffect } from "react";
import IconCart from "../../assets/icons/icon-cart-gray.svg";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cartContext";
import { useAuth } from "../../context/authContext";

export default function Cart() {
  const {
    state: { cart },
  } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  const { isAuth } = useAuth();

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0));
  }, [cart]);

  return (
    <aside
      className={`row-[1] flex flex-col justify-between border font-plexSans p-[15px] ${
        cart.length !== 0 ? "h-max" : "h-[228px]"
      } md:sticky md:top-[30px] md:row-auto`}>
      <>
        {cart.length !== 0 ? (
          <div>
            <h5 className='text-[18px] font-bold mb-[20px]'>Votre commande</h5>
            {cart.map((item) => (
              <div key={item?._id} className='grid grid-cols-[2fr_1fr] mb-[20px]'>
                <p>
                  {item?.name} <span className='font-bold'>x{item?.quantity}</span>
                </p>
                <p className='justify-self-end'>{item?.price.toFixed(2) * item?.quantity} €</p>
              </div>
            ))}
            <div className='flex justify-between font-bold mt-[45px] mb-[15px]'>
              <p>Total</p>
              <span>{totalPrice.toFixed(2)} €</span>
            </div>
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
