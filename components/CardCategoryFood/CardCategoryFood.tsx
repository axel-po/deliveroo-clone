import Link from "next/link";

type Props = {
  title: string;
  imageUrl: string;
  city: string;
};

export default function CardCategoryFood({ title, imageUrl, city }: Props) {
  return (
    <Link
      href={{
        pathname: `/restaurants/${city}`,
        query: { category: title },
      }}>
      <a>
        <div style={{ backgroundImage: `url(${imageUrl})` }} className={`flex w-[170px] h-[80px] rounded bg-cover cursor-pointer bg-center `}>
          <h5 className='text-white text-lg mt-auto mb-2 ml-2'>{title}</h5>
        </div>
      </a>
    </Link>
  );
}
