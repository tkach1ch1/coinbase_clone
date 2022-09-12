import { MainButton } from '../MainButton';
import { LinkToPortfolio } from './LinkToPortfolio';
import coinbase_app from '../../images/jpeg_png/coinbase_app.png';

export const TitleSection = () => {
  return (
    <section className='flex justify-between container mt-20 max-w-mainWidth sm:px-6 smm:px-14 py-6 '>
      <div className='flex flex-col py-[100px] mdm:max-w-[480px]'>
        <LinkToPortfolio />
        <div className='font-bold leading-tight sm:text-[34px] smm:text-[62px] sm:pt-3'>
          Jump start your crypto portfolio
        </div>
        <div className='pt-4 smm:text-xl sm:font-semibold smm:font-bold'>
          Coinbase is the easiest place to buy and sell cryptocurrency. Sign up
          and get started today.
        </div>
        <div className='flex gap-3 pt-8 sm:flex-col'>
          <input
            type='email'
            placeholder='Email address'
            className='border-[1px] border-gray-300 text-lg rounded py-4 px-5 font-medium md:w-full mdm:w-[275px]'
          />
          <MainButton
            px={'px-[50px]'}
            py={'py-[20px]'}
            fontSize={'text-[16px]'}
          >
            Get started
          </MainButton>
        </div>
      </div>
      <div className='relative py-[40px] pl-[30px] lg:overflow-hidden md:hidden z-[-10]'>
        <img
          src={coinbase_app}
          alt='coinbase_app'
          className='relative h-[600px] max-w-[400px]'
        />
        <div className='absolute'>
        <svg
          width='400'
          height='600'
          viewBox='0 0 680 956'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='absolute bottom-0 left-[-7px] z-[-10] max-w-[400px]'
        >       
            
          <circle cx='340' cy='428' r='340' fill='#F1F5FE'></circle>
        </svg>
        </div>
      </div>
    </section>
  );
};
