import { useNavigate } from "react-router-dom";

export default function CardCategoryFood({ title, imageUrl, city }) {
  let navigate = useNavigate();

  const changeFoodCategory = () => {
    navigate(`/restaurants/${city}`, { state: title });
  };

  const buildBackgroundImage = (imageUrl) => {
    return process.env.REACT_APP_API_URL + imageUrl;
  };

  return (
    <button
      onClick={changeFoodCategory}
      style={{ backgroundImage: `url(${buildBackgroundImage(imageUrl)})` }}
      className='flex w-[170px] h-[80px] rounded bg-cover cursor-pointer bg-center '>
      <h5 className='text-white text-lg mt-auto mb-2 ml-2'>{title}</h5>
    </button>
  );
}

export const CardCategoryFoodSkeletons = () => {
  return (
    <button className='flex w-[170px] h-[80px] rounded bg-cover cursor-pointer bg-center'>
      <h5 className='text-white text-lg mt-auto mb-2 ml-2'>t</h5>
    </button>
  );
};
