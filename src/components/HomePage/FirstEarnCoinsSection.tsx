import { EarnSectionCoins } from './EarnSectionCoins';
import { EarnSectionInfo } from './EarnSectionInfo';

export const FirstEarnCoinsSection = () => {
  return (
    <section className='max-w-mainWidth container p-[24px] flex justify-between mb-14 ms:flex-col ms:items-center ms:gap-6'>
      <div className='mt-20'>
        <EarnSectionInfo />
      </div>
      <EarnSectionCoins />
    </section>
  );
};
