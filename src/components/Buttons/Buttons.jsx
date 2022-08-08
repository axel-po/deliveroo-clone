export const Button = ({ children }) => {
  return (
    <button className='block text-center bg-green  text-white font-semibold rounded py-[12px] px-[24px] font-plexSans cursor-pointer w-full'>
      {children}
    </button>
  );
};
