import { useEarnFreeCoins } from "../../hooks/useEarnFreeCoins";



export const EarnSectionCoins = () => {
  
  const {earnCoinsArray} = useEarnFreeCoins()

  return (
    <div className='ms:w-full'>
      <div className='ms:border-[1px] ms:mb-4 mb-4'>
        {earnCoinsArray.map((elem) => (
          <div
            className='p-[24px] ms:p-4 flex justify-between items-center gap-20 hover:shadow-xl hover:scale-1.2 cursor-pointer hover:duration-500  ms:border-b-[1px] '
            key={elem.uuid}
          >
            <div className='flex items-center gap-3'>
              <img
                src={elem.iconUrl}
                alt={elem.name}
                className='w-[38px] h-[38px]'
              />
              <span className='font-bold text-[22px] whitespace-nowrap ms:w-[60px] ms:whitespace-normal'>
                {elem.name}
              </span>
              <span className='font-semibold text-[18px] ms:hidden'>
                {elem.symbol}
              </span>
            </div>
            <div className='text-green_positive font-semibold whitespace-nowrap'>
              Earn $3 {elem.symbol}
            </div>
          </div>
        ))}
      </div>
      <a href='#' className='ml-6  text-blue_primary font-semibold'>
        View more &gt;
      </a>
    </div>
  );
};
