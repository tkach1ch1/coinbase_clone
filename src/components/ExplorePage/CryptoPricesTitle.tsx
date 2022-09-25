import React from 'react';
import { useGlobalStats } from '../../hooks/useGlobalStats';
import { SelectButton } from '../SelectButton';
import { Skeleton } from '../Skeleton';

export const CryptoPricesTitle = () => {
  const { isLoading, totalCoins } = useGlobalStats();

  const currenciesArray = ['USD', 'EUR', 'UAH'];
  const timeArray = ['1H', '1D', '1W', '1M', '1Y'];

  return (
    <div className='flex justify-between'>
      <div className='flex gap-2 items-center ms:hidden'>
        <div className='text-[28px] font-bold top-[2px]'>Crypto prices</div>
        <div className='relative top-[5px]'>
          {isLoading ? (
            <Skeleton width={'w-[100px]'} />
          ) : (
            <div className='text-gray60 '>{totalCoins} assets</div>
          )}
        </div>
      </div>
      <div className='flex gap-4 items-center ms:gap-2'>
        <SelectButton
          listArray={currenciesArray}
          label={'USD'}
          itemPosition={'justify-around'}
          btnWidth={'w-[87px]'}
        />
        <SelectButton
          listArray={timeArray}
          label={'1D'}
          itemPosition={'justify-around'}
          btnWidth={'w-[75.5px]'}
        />
      </div>
    </div>
  );
};
