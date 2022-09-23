import { CryptoCurrenciesAssetsTable } from '../components/ExplorePage/CryptoCurrenciesAssetsTable';
import { CryptoPricesContainer } from '../components/ExplorePage/CryptoPricesContainer';
import { GlobalCoinsStatSection } from '../components/ExplorePage/GlobalCoinsStatSection';
import { TitleExploreSection } from '../components/ExplorePage/TitleExploreSection';

export const Explore = () => {
  
  return (
    <div className='border-b-[1px] '>
      <div className=' ms:p-6 xxl:max-w-[1700px] xxl:container xxl:border-r xxl:border-l '>
        <TitleExploreSection />
        <div className='flex'>
          <div className='w-[70%] border-r-[1px]'>
            <CryptoPricesContainer />
            <CryptoCurrenciesAssetsTable />
          </div>
          <div className='w-[30%]'>
            <GlobalCoinsStatSection />
          </div>
        </div>
      </div>
    </div>
  );
};
