import { EarnSection } from '../components/HomePage/EarnSection';
import { TitleSection } from '../components/HomePage/TitleSection';
import { TopCurrenciesTable } from '../components/HomePage/TopCurrenciesTable';

export const Home = () => {
  return (
    <div>
      <TitleSection />
      <TopCurrenciesTable />
      <EarnSection />
    </div>
  );
};
