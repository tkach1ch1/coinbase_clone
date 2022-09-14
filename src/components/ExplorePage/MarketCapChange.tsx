import { useEffect, useState } from 'react';
import { useMcapChange } from '../../hooks/useMcapChange';
import diagonal_arrow_down_red from '../../images/svg/diagonal_arrow_down_red.svg';
import diagonal_arrow_up_green from '../../images/svg/diagonal_arrow_up_green.svg';
import { Skeleton } from '../Skeleton';

export const MarketCapChange = () => {
  const { mcapChange, isLoading } = useMcapChange();

  return (
    <>
      {isLoading ? (
        <Skeleton width={'w-[52.8px]'} />
      ) : (
        <>
          {+mcapChange > 0 ? (
            <div className='flex gap-1'>
              <img src={diagonal_arrow_up_green} alt='diagonal_arrow_up' />
              <div className='text-green_positive'>{mcapChange}</div>
            </div>
          ) : +mcapChange < 0 ? (
            <div className='flex gap-1'>
              <img src={diagonal_arrow_down_red} alt='diagonal_arrow_up' />
              <div className='text-red_negative'>{mcapChange}</div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};
