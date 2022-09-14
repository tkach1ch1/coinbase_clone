import React from 'react';
import { useGlobalStats } from '../../hooks/useGlobalStats';
import { SelectButton } from '../SelectButton';
import { Skeleton } from '../Skeleton';

export const CryptoPricesTitle = () => {
  const { isLoading, totalCoins } = useGlobalStats();

  const currenciesArray = ['USD', 'EUR', 'UAH'];
  const timeArray = ['1H', '1D', '1W', '1M', '1Y'];

  return (
    <div className='flex justify-between mb-3'>
      <div className='flex gap-2 items-center'>
        <div className='text-[28px] font-bold top-[2px]'>Crypto prices</div>
        <div className='relative top-[5px]'>
          {isLoading ? (
            <Skeleton width={'w-[100px]'} />
          ) : (
            <div className='text-gray60 '>{totalCoins} assets</div>
          )}
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <SelectButton listArray={currenciesArray} label={'USD'} />
        <SelectButton listArray={timeArray} label={'1D'} />
      </div>
    </div>
  );
};
