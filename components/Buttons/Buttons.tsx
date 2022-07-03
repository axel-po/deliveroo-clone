type Props = {
  children: string;
};

export const Button = ({ children }: Props) => {
  return <button className='bg-green  text-white font-semibold rounded py-[12px] px-[24px]'>{children}</button>;
};
