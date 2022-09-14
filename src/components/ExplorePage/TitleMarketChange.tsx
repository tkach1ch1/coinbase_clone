import { useEffect, useState } from 'react';
import { useMcapChange } from '../../hooks/useMcapChange';
import { MarketCapChange } from './MarketCapChange';

export const TitleMarketChange = () => {
  const [isDesktop, setDesktop] = useState(false);

  const { isLoading, mcapChange } = useMcapChange();

  //Changes the text that is displayed on the screen dependes on a screen width
  useEffect(() => {
    if (window.innerWidth > 767) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 767) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <>
      <div>
        {isDesktop ? (
          <div className='flex gap-1'>
            <div className='text-main_gray font-medium'>
              In the past 24 hours the market is up
            </div>
            <MarketCapChange />
          </div>
        ) : (
          <div className='flex gap-1'>
            <div className='text-main_gray font-medium'>Market is up</div>
            <MarketCapChange />
            <div>(24h)</div>
          </div>
        )}
      </div>
    </>
  );
};
