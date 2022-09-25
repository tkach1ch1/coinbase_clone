import { CryptoPricesTitle } from './CryptoPricesTitle';
import { TableFilterCategories } from './TableFilterCategories';
import { useWindowSize } from 'usehooks-ts';
import { TabletViewTableFilterCategories } from './TabletViewTableFilterCategories';

export const CryptoPricesContainer = () => {
  const { width } = useWindowSize();
  return (
    <main>
      <div className='px-8 pt-8 ms:px-6 ms:pt-4 ms:flex ms:flex-row-reverse ms:justify-between ms:gap-4'>
        <CryptoPricesTitle />
        {width > 767 ? (
          <TableFilterCategories />
        ) : (
          <TabletViewTableFilterCategories />
        )}
      </div>
    </main>
  );
};
