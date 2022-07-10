type Props = {
  children: string;
};

export const Button = ({ children }: Props) => {
  return <a className='block text-center bg-green  text-white font-semibold rounded py-[12px] px-[24px] font-plexSans cursor-pointer'>{children}</a>;
};
