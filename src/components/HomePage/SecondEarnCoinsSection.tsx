import { EarnSectionInfo } from './EarnSectionInfo';

export const SecondEarnCoinsSection = () => {
  const style = {
    backgroundImage: `url(
      'https://assets.coinbase.com/assets/earn-upsell-desktop.969a983ce74a462a68ba618b798a8cfa.webp'
    )`,
  };

  return (
    <div className=' bg-light_gray h-[460px] flex ms:block ms:h-[320px]'>
      <div className='basis-2/3 flex justify-center items-center pl-10 ms:pl-0 ms:w-[320px] ms:mx-auto pt-12'>
        <EarnSectionInfo />
      </div>
      <div className='w-full bg-cover ms:hidden ' style={style}></div>
    </div>
  );
};
