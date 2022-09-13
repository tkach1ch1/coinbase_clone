import { CreatePortfolioSection } from '../components/HomePage/CreatePortfolioSection';
import { FirstEarnCoinsSection } from '../components/HomePage/FirstEarnCoinsSection';
import { GetStartedSection } from '../components/HomePage/GetStartedSection';
import { SecondEarnCoinsSection } from '../components/HomePage/SecondEarnCoinsSection';
import { StatisticSection } from '../components/HomePage/StatisticSection';
import { TitleHomeSection } from '../components/HomePage/TitleHomeSection';
import { TopCurrenciesTable } from '../components/HomePage/TopCurrenciesTable';
import { WhyCoinbaseSection } from '../components/HomePage/WhyCoinbaseSection';

export const Home = () => {
  return (
    <div>
      <TitleHomeSection />
      <TopCurrenciesTable />
      <FirstEarnCoinsSection />
      <CreatePortfolioSection />
      <WhyCoinbaseSection />
      <StatisticSection />
      <GetStartedSection />
      <SecondEarnCoinsSection />
    </div>
  );
};
