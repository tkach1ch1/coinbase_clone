import { MainButton } from '../MainButton';
import { EarnSectionCoins } from './EarnSectionCoins';

export const EarnSection = () => {
  return (
    <section className='max-w-[1198px] container p-[24px] flex justify-between mb-14 ms:flex-col ms:items-center ms:gap-6'>
      <div className='flex flex-col w-[350px] ms:w-full pt-20 text-center'>
        <span className='font-bold text-[32px] pb-4'>
          Earn up to $19 worth of crypto
        </span>
        <span className='text-sm pb-4'>
          Discover how specific cryptocurrencies work — and get a bit of each
          crypto to try out for yourself.
        </span>
        <div>
          <MainButton
            px={'px-[12px]'}
            py={'py-[10px]'}
            maxWidth={'max-w-[125px]'}
          >
            Start earning
          </MainButton>
        </div>
      </div>
      <EarnSectionCoins />
    </section>
  );
};
