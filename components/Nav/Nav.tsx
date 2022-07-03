import Image from "next/image";
import Logo from "/public/assets/logo-deliveroo.svg";
import IconCart from "/public/assets/icons/icon-cart.svg";

export default function Nav() {
  return (
    <nav className='absolute w-full py-[14px] '>
      <div className='flex justify-between container'>
        <Image src={Logo} alt='logo deliveroo' width='112' height='32' />
        <div>
          <button className='flex items-center gap-3 py-[8px] px-[16px] rounded bg-white'>
            <Image src={IconCart} width='18' height='18' alt='icon panier' />
            <span>0,00 €</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
