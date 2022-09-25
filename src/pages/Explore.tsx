import { CryptoCurrenciesAssetsTable } from '../components/ExplorePage/CryptoCurrenciesAssetsTable';
import { CryptoPricesContainer } from '../components/ExplorePage/CryptoPricesContainer';
import { GlobalCoinsStatSection } from '../components/ExplorePage/GlobalCoinsStatSection';
import { TitleExploreSection } from '../components/ExplorePage/TitleExploreSection';
import { useWindowSize } from 'usehooks-ts';
import { TabletViewGlobalCoinsStatSection } from '../components/ExplorePage/TabletViewGlobalCoinsStatSection';

export const Explore = () => {
  const { width } = useWindowSize();
  return (
    <div className='border-b-[1px]  pt-6 '>
      <div className='xxl:max-w-[1700px] xxl:container xxl:border-r xxl:border-l '>
        <TitleExploreSection />
        <div className='flex flex-row-reverse xlm:flex-col border-t-[1px] xlm:border-none'>
          <div className='w-[30%] xlm:w-full'>
            {width > 767 ? (
              <GlobalCoinsStatSection />
            ) : (
              <TabletViewGlobalCoinsStatSection />
            )}
          </div>
          <div className='w-[70%] border-r-[1px] ms:border-none xlm:w-full'>
            <CryptoPricesContainer />
            <CryptoCurrenciesAssetsTable />
          </div>
        </div>
      </div>
    </div>
  );
};
