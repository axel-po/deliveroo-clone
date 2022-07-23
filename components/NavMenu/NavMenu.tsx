import Image from "next/image";
import LogoGreen from "/public/assets/logo-deliveroo-green.svg";
import IconCross from "/public/assets/icons/icon-cross-green.svg";
import { Button } from "../Buttons/Buttons";
import Link from "next/link";
import { useAuth } from "../../context/authContext";

type Props = {
  showMenu: boolean;
  setShowMenu: Function;
};

export default function NavMenu({ showMenu, setShowMenu }: Props) {
  const { isAuth } = useAuth();

  return (
    <div className='bg-overlayColor fixed inset-0 z-50 cursor-default'>
      <div className='fixed right-0 bg-white h-screen w-[5px] min-w-[370px] '>
        <div className='flex justify-between items-center h-[75px] px-5 border'>
          <Image src={LogoGreen} alt='logo deliveroo' width='112' height='32' />
          <button onClick={() => setShowMenu(!showMenu)} className='flex items-center'>
            <Image src={IconCross} width='25' height='25' alt='icon cross' />
          </button>
        </div>
        <div className='pt-12 px-5'>
          {isAuth ? (
            <p>yoooo </p>
          ) : (
            <Link href='/auth/login'>
              <a className='block text-center bg-green  text-white font-semibold rounded py-[12px] px-[24px] font-plexSans cursor-pointer'>
                Inscription ou connexion
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
