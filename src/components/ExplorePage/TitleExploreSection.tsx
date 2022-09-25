import { SearchBar } from './SearchBar';
import { TitleMarketChange } from './TitleMarketChange';

export const TitleExploreSection = () => {
  return (
    <section className='flex flex-col gap-4 items-center py-16 ms:pb-2 ms:pt-0 ms:px-6 ms:items-start xxl:border-b'>
      <div className='flex flex-col items-center text-center ms:text-left ms:items-start'>
        <h1 className='text-[40px] font-medium ms:font-semibold ms:text-[28px]'>
          Explore the cryptoeconomy
        </h1>
        <TitleMarketChange />
      </div>
      <SearchBar />
    </section>
  );
};
