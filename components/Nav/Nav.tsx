import Image from "next/image";
import Logo from "/public/assets/logo-deliveroo.svg";
import LogoGreen from "/public/assets/logo-deliveroo-green.svg";
import IconCart from "/public/assets/icons/icon-cart.svg";
import IconHome from "/public/assets/icons/icon-home.svg";
import IconMenu from "/public/assets/icons/icon-menu.svg";
import Link from "next/link";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";
import { useAuth } from "../../context/authContext";

type Props = {
  page?: { page: Object };
};

export default function Nav({ page }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { isAuth } = useAuth();

  return (
    <nav className={`${page?.page == "login" || page?.page == "menu" ? " py-[14px]  border-b" : "lg: w-full py-[14px]"}`}>
      <div className='flex justify-between container'>
        <Link href='/'>
          <a>
            {page?.page == "login" || page?.page == "menu" ? (
              <Image src={LogoGreen} alt='logo deliveroo' width='112' height='32' />
            ) : (
              <Image src={Logo} alt='logo deliveroo' width='112' height='32' />
            )}
          </a>
        </Link>
        <div className='flex gap-3 z-10' role='button'>
          {page?.page !== "login" && (
            <button className='hidden md:flex items-center gap-3 py-[8px] px-[16px] rounded border bg-white'>
              <Image src={IconCart} width='18' height='18' alt='icon panier' />
              <span>0,00 €</span>
            </button>
          )}
          {page?.page !== "login" && (
            <Link href='/auth/login'>
              <a className='hidden md:flex items-center gap-3 py-[8px] px-[16px] rounded border bg-white'>
                <Image src={IconHome} width='18' height='18' alt='icon panier' />
                <span>Inscription ou connexion</span>
              </a>
            </Link>
          )}
          <button onClick={() => setShowMenu(!showMenu)} className='flex items-center gap-3 py-[8px] px-[16px] rounded border bg-white'>
            <Image src={IconMenu} width='18' height='18' alt='icon panier' />
            <span>Menu</span>
          </button>
          {showMenu && <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
        </div>
      </div>
    </nav>
  );
}
