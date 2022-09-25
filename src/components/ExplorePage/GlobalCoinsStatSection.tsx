import { useEffect, useState } from 'react';
import { useEarnFreeCoins } from '../../hooks/useEarnFreeCoins';
import { useGlobalStats } from '../../hooks/useGlobalStats';
import { usePreveous } from '../../hooks/usePrevious';
import { GlobalCoinsStatsContainer } from './GlobalCoinsStatsContainer';

export const GlobalCoinsStatSection = () => {
  const { newestCoins, bestCoins } = useGlobalStats();
  const { earnCoinsArray } = useEarnFreeCoins();

  const [offset, setOffset] = useState(0);

  //Offset control
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  //Chaging container position to make a scroll effect
  const prev = usePreveous(offset);

  const offsetClass =
    prev < offset && window.innerHeight > 792
      ? 'sticky top-[-90px]'
      : prev > offset && window.innerHeight > 792
      ? 'sticky bottom-[-90px]'
      : prev < offset && window.innerHeight < 793
      ? 'sticky top-[-230px]'
      : prev > offset && window.innerHeight < 793
      ? 'sticky bottom-[-230px]'
      : '';

  const mtClass = prev < offset ? 'mt-0' : prev > offset ? 'mt-[3500px]' : '';
  const helpDivClass = ['xlm:hidden', mtClass];

  const containerInfoClass = [
    'xlm:flex xlm:justify-between xlm:border-y',
    offsetClass,
  ];

  return (
    <div className={containerInfoClass.join(' ')}>
      <div className={helpDivClass.join(' ')}></div>
      <GlobalCoinsStatsContainer
        coinsArray={newestCoins}
        sectionInfo={'Newest on Coinbase'}
        coinAdditionalInfo={'Recently added'}
      />
      <GlobalCoinsStatsContainer
        coinsArray={bestCoins}
        sectionInfo={'Best on Coinbase'}
        coinAdditionalInfo={'Recently added'}
      />
      <GlobalCoinsStatsContainer
        coinsArray={earnCoinsArray}
        sectionInfo={'Free crypto'}
        coinAdditionalInfo={'Earn 3$'}
        hidden={true}
      />
    </div>
  );
};
