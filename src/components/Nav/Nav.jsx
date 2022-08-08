import Logo from "../../assets/logo-deliveroo.svg";
import LogoGreen from "../../assets/logo-deliveroo-green.svg";
import IconCart from "../../assets/icons/icon-cart.svg";
import IconHome from "../../assets/icons/icon-home.svg";
import IconMenu from "../../assets/icons/icon-menu.svg";
import { Link } from "react-router-dom";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";
import { useAuth } from "../../context/authContext";

export default function Nav({ page }) {
  const [showMenu, setShowMenu] = useState(false);
  const { isAuth } = useAuth();

  return (
    <nav className={`${page?.page === "login" || page?.page === "menu" ? " py-[14px]  border-b" : "lg: w-full py-[14px]"}`}>
      <div className='flex justify-between container'>
        <Link to='/' className="z-[10]">
          {page?.page === "login" || page?.page === "menu" ? (
            <img src={LogoGreen} alt='logo deliveroo' className='w-[112px] h-[32px]' />
          ) : (
            <img src={Logo} alt='logo deliveroo' className='w-[112px] h-[32px]' />
          )}
        </Link>
        <div className='flex gap-3 z-10' role='button'>
          {page?.page !== "login" && (
            <button className='hidden md:flex items-center gap-3 py-[8px] px-[16px] rounded border bg-white'>
              <img src={IconCart} alt='icon panier' />
              {/* width='18' height='18'  */}
              <span>0,00 €</span>
            </button>
          )}

          {page?.page !== "login" && !isAuth && (
            <Link to='/auth/login' className='hidden md:flex items-center gap-3 py-[8px] px-[16px] rounded border bg-white'>
              <img src={IconHome} alt='icon panier' />
              <span>Inscription ou connexion</span>
            </Link>
          )}
          <button onClick={() => setShowMenu(!showMenu)} className='flex items-center gap-3 py-[8px] px-[16px] rounded border bg-white'>
            <img src={IconMenu} alt='icon menu' />
            <span>Menu</span>
          </button>
          {showMenu && <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />}
        </div>
      </div>
    </nav>
  );
}
