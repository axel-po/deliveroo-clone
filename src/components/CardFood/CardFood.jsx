import { useState } from "react";
import { useCart } from "../../context/cartContext";
import IconAdd from "../../assets/icons/icon-add.svg";
import IconRemove from "../../assets/icons/icon-remove.svg";
import { formatPrice } from "../../utils/helpers";

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
          <p>{menu?.price.toFixed(2)} €</p>
        </div>
        <img className='w-[100px] h-[100px] border object-center object-cover p-2' src={process.env.REACT_APP_API_URL + menu?.imageUrl} alt='food' />
      </button>
      {modalOpen && <FoodModal menu={menu} setModalOpen={setModalOpen} />}
    </>
  );
};

const FoodModal = ({ menu, setModalOpen }) => {
  const [quantity, setQuantity] = useState(1);

  /* Hooks */
  const { addToCart } = useCart();

  /* Functions */
  const closeModal = (e) => {
    if (e.target.classList.contains("overlay")) {
      setModalOpen(false);
    }
  };

  const addToCartState = () => {
    const itemAdded = {
      ...menu,
      quantity,
    };

    addToCart(itemAdded);
    setModalOpen(false);
  };

  const updateQuantity = (action) => {
    if (action === "ADD") {
      if (quantity <= 0) {
        setQuantity(1);
      } else {
        setQuantity(quantity + 1);
      }
    } else if (action === "SUPP") {
      if (quantity <= 1) {
        setQuantity(1);
      } else {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <div
      onClick={closeModal}
      className='overlay bg-overlayColor fixed overflow-hidden h-screen inset-0 z-50 cursor-default flex items-center justify-center'>
      <div className='flex flex-col items-center rounded w-[90%] max-w-[500px] bg-white'>
        <img className='rounded' src={process.env.REACT_APP_API_URL + menu?.imageUrl} alt='food' />
        <div className='w-full p-5'>
          <h3 className='text-[28px] font-stratos'>{menu?.name}</h3>
          <p className='py-[20px]'>{menu?.desc}</p>
          <div className='flex items-center justify-center mb-3'>
            <button className='text-xl' onClick={() => updateQuantity("SUPP")}>
              <img className='w-[24px]' src={IconRemove} alt='icon remove' />
            </button>
            <span className='font-bold text-[24px] mx-12'>{quantity}</span>
            <button onClick={() => updateQuantity("ADD")}>
              <img className='w-[24px]' src={IconAdd} alt='icon add' />
            </button>
          </div>
          <button
            className='block text-center bg-green  text-white font-semibold rounded py-[12px] px-[24px] font-plexSans cursor-pointer w-full'
            onClick={addToCartState}>
            Ajouter pour {formatPrice(menu?.price * quantity)} €
          </button>
        </div>
      </div>
    </div>
  );
};

export const CardFoodSkeletons = () => {
  return <div className='w-[480] h-[144px] bg-gray-200 animate-pulse'></div>;
};
export default CardFood;
