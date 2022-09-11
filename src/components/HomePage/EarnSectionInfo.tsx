import { MainButton } from '../MainButton';

export const EarnSectionInfo = () => {
  return (
    <div className='flex flex-col w-[350px] ms:w-full ms:text-center'>
      <span className='font-bold text-[32px] text-main_black pb-4'>
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
          maxWidth={'max-w-[125px]'}>
          Start earning
        </MainButton>
      </div>
    </div>
  );
};
