type Props = {
  title: string;
  imageUrl: string;
};

export default function CardCategoryFood({ title, imageUrl }: Props) {
  return (
    <div style={{ backgroundImage: `url(${imageUrl})` }} className={`flex w-[170px] h-[80px] rounded bg-cover cursor-pointer bg-center `}>
      <h5 className='text-white text-lg mt-auto mb-2 ml-2'>{title}</h5>
    </div>
  );
}
