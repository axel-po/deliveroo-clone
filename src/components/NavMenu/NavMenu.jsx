import LogoGreen from "../../assets/logo-deliveroo-green.svg";
import IconCross from "../../assets/icons/icon-cross-green.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

export default function NavMenu({ showMenu, setShowMenu }) {
  const { isAuth } = useAuth();
  const email = window.localStorage.getItem("email");

  return (
    <div className='bg-overlayColor fixed inset-0 z-50 cursor-default'>
      <div className='fixed right-0 bg-white h-screen w-[5px] min-w-[370px] '>
        <div className='flex justify-between items-center h-[75px] px-5 border'>
          <img src={LogoGreen} alt='logo deliveroo' />
          {/* width='112' height='32' */}
          <button onClick={() => setShowMenu(!showMenu)} className='flex items-center'>
            <img src={IconCross} alt='icon cross' />
            {/* width='25' height='25' */}
          </button>
        </div>
        <div className='pt-12 px-5'>
          {isAuth ? (
            <>
              <p>Votre comtpe : </p>
              <span className='block'>{email}</span>
              <button className='text-red-500'>Déconnexion</button>
            </>
          ) : (
            <Link
              to='/auth/login'
              className='block text-center bg-green  text-white font-semibold rounded py-[12px] px-[24px] font-plexSans cursor-pointer'>
              Inscription ou connexion
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
