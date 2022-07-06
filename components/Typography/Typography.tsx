type Props = {
  children: string;
};

export const Title = ({ children }: Props) => {
  return <h2 className='text-4xl font-bold mb-[35px]'>{children}</h2>;
};

export const TitlePageMenu = ({ children }: Props) => {
  return <h2 className='text-[22px] font-bold mb-[20px]'>{children}</h2>;
};
