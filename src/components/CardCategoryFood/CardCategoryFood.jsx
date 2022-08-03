import { Link } from "react-router-dom";

export default function CardCategoryFood({ title, imageUrl, city }) {
  return (
    <Link
      to={{
        pathname: `/restaurants/${city}`,
        query: { category: title },
      }}>
      <div style={{ backgroundImage: `url(${imageUrl})` }} className={`flex w-[170px] h-[80px] rounded bg-cover cursor-pointer bg-center `}>
        <h5 className='text-white text-lg mt-auto mb-2 ml-2'>{title}</h5>
      </div>
    </Link>
  );
}
