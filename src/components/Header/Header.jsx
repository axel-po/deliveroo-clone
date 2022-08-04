import Nav from "../Nav/Nav";
import HeaderIllustation from "../../assets/header-illustration.svg";
import { useCity } from "../../context/cityContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ cityData, errorCity, setErrorCity }) => {
  const { city, setCity } = useCity();
  let navigate = useNavigate();

  useEffect(() => {
    if (city) {
      setErrorCity(false);
    }
  }, [city, setErrorCity]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city) {
      // router.push({
      //   pathname: `restaurants/${city}`,
      //   query: { category: "Burgers" },
      // });
      navigate(`/restaurants/${city}`, { state: "Burgers" });
    } else {
      alert("Choisissez une ville ");
    }
  };

  return (
    <header className="pb-[20px] min-h-[500px] bg-[#D0EB99] before:content-[''] before:absolute before:right-0 before:top-[-10%] before:bg-[#00ccbc] before:w-full before:h-[297px] before:origin-center before:-skew-y-3">
      <Nav />
      <div className='flex flex-col items-center gap-8 h-full container md:flex-row'>
        <div className='w-full z-0 md:w-6/12 '>
          <h2 className='text-violet text-[30px] leading-[36px] font-semibold pb-[32px] sm:leading-[48px] sm:text-[40px] '>
            Vos restaurants préférés, livrés chez vous en un clic
          </h2>
          <form
            className={`bg-white  p-5 md:p-[32px] rounded font-plexSans z-20 shadow-overlay ${errorCity && "shadow-full"}`}
            onSubmit={handleSubmit}>
            <label htmlFor='adress'>Entrez votre ville pour trouver les restaurants à proximité</label>
            <div className='flex flex-col sm:flex-row gap-3 mt-[10px]'>
              <select value={city} className='px-3 w-full h-[50px] border rounded outline-black' onChange={(e) => setCity(e.target.value)}>
                <option value=''>-- Choisissez votre ville --</option>
                {cityData.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>

              <button className='block text-center bg-green  text-white font-semibold rounded py-[12px] px-[24px] font-plexSans cursor-pointer'>
                Chercher
              </button>
            </div>
          </form>
        </div>

        <div className='w-full flex items-end justify-center md:w-6/12'>
          <img src={HeaderIllustation} alt='header illustration' className='w-[426px] h-[410px]' />
          {/* width='426' height='410' */}
        </div>
      </div>
    </header>
  );
};

export default Header;
