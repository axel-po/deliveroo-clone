import LogoGreen from "../../assets/logo-deliveroo-green.svg";
import IconCross from "../../assets/icons/icon-cross-green.svg";
import IconAcount from "../../assets/icons/icon-account.svg";
import IconLogout from "../../assets/icons/icon-logout.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { logout } from "../../utils/api";

export default function NavMenu({ showMenu, setShowMenu }) {
  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();
  const email = window.localStorage.getItem("email");

  const closeMenu = (e) => {
    if (e.target.classList.contains("overlay")) {
      setShowMenu(false);
    }
  };

  const handleLogout = () => {
    logout();
    setIsAuth(false);
    setShowMenu(false);
    navigate("/");
  };

  return (
    <div onClick={closeMenu} className='overlay bg-overlayColor fixed inset-0 z-50 cursor-default'>
      <div className='fixed right-0 bg-white h-screen w-full sm:max-w-[370px]'>
        <div className='flex justify-between items-center h-[75px] px-5 border'>
          <img className='w-[112px] h-[32px]' src={LogoGreen} alt='logo deliveroo' />
          <button onClick={() => setShowMenu(!showMenu)} className='flex items-center'>
            <img className='w-[25px] h-[25px]' src={IconCross} alt='icon cross' />
          </button>
        </div>
        <div className='pt-12 px-5'>
          {isAuth ? (
            <>
              <div className='flex items-center gap-3'>
                <img className='w-[30px] h-[30px]' src={IconAcount} alt='icon profile' />
                <div>
                  <p>Votre comtpe : </p>
                  <span className='text-sm text-gray-600'>{email}</span>
                </div>
              </div>

              <button onClick={handleLogout} className='flex items-center gap-3 mt-12 text-red-500'>
                <img className='w-[30px] h-[30px]' src={IconLogout} alt='icon logout' />
                <span>Déconnexion</span>
              </button>
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
