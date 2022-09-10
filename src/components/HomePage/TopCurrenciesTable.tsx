import { Currencies } from './Currencies';
import { CurrenciesTableSections } from './CurrenciesTableSections';

export const TopCurrenciesTable = () => {
  return (
    <section className='container max-w-[1198px] border-[1px] border-[rgba(gray60,0.2)] rounded z-10  '>
      <CurrenciesTableSections />
      <Currencies />
    </section>
  );
};
