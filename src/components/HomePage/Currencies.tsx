import { useEffect, useState } from 'react';
import { useAllCryptCurrencies } from '../../hooks/useAllCryptCurrencies';

type coinsProps = {
  rank: string;
  iconUrl: string;
  name: string;
  price: string;
  change: string;
  uuid: string;
  symbol: string;
};

export const Currencies = () => {
   
  const {coins} = useAllCryptCurrencies()

  return (
    <>
      {coins.slice(0,4).map((elem: coinsProps) => (
        <div
          className='flex gap-[70px] py-4 border-t-[1px] border-[rgba(text-main_gray,0.2) hover:bg-gray-100 hover:duration-500 sm:gap-0'
          key={elem.uuid}
        >
          <div className='pr-10 pl-8 text-lg text-main_gray font-semibold flex items-center ls:hidden'>
            {elem.rank}
          </div>
          <a href='#' className='flex pr-12 w-full gap-3 items-center ls:pl-12'>
            <img
              className='w-[36px] h-[36px]'
              src={elem.iconUrl}
              alt={elem.name}
            />
            <div className='lsm:flex lsm:gap-2 '>
              <div className='text-lg font-semibold'>{elem.name}</div>
              <div className='text-lg font-semibold text-gray60 '>
                {elem.symbol}
              </div>
            </div>
          </a>
          <div className='flex ls:flex-col ls:items-end lsm:gap-12 '>
            <div className='flex gap-1 items-center justify-center'>
              <span className='text-xl font-semibold text-gray90'>$</span>
              <div className='pr-12 flex text-lg font-semibold text-gray90'>
                {(+elem.price).toFixed(2)}
              </div>
            </div>
            {+elem.change > 0 ? (
              <div className='flex items-center pr-10 ls:pr-12 s text-lg font-semibold text-green_positive'>
                +{elem.change}%
              </div>
            ) : (
              <div className=' flex items-center pr-10 ls:pr-12 text-lg font-semibold text-red_negative'>
                {elem.change}%
              </div>
            )}
          </div>
          <div className='pr-8 ls:hidden'>
            <button className='px-4 py-2 rounded text-white font-semibold bg-green_positive '>
              Buy
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
