import { useEarnFreeCoins } from '../../hooks/useEarnFreeCoins';
import { useGlobalStats } from '../../hooks/useGlobalStats';
import { TabletViewGlobalCoinsStatsContainer } from './TabletViewGlobalCoinsStatsContainer';

export const TabletViewGlobalCoinsStatSection = () => {
  const { newestCoins, bestCoins } = useGlobalStats();
  const { earnCoinsArray } = useEarnFreeCoins();

  return (
    <div>
      <TabletViewGlobalCoinsStatsContainer
        coinsArray={newestCoins}
        sectionInfo={'Newest on Coinbase'}
        coinAdditionalInfo={'Recently added'}
      />
      <TabletViewGlobalCoinsStatsContainer
        coinsArray={bestCoins}
        sectionInfo={'Best on Coinbase'}
        coinAdditionalInfo={'Recently added'}
      />
      <TabletViewGlobalCoinsStatsContainer
        coinsArray={earnCoinsArray}
        sectionInfo={'Free crypto'}
        coinAdditionalInfo={'Earn $3'}
      />
    </div>
  );
};
