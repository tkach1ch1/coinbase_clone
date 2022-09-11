import { CreatePortfolioInfo } from './CreatePortfolioInfo';

export const CreatePortfolioSection = () => {
  return (
    <section className='border-b-[1px] mb-10'>
      <div className='container max-w-mainWidth p-6 '>
        <div className='text-center text-[40px] font-bold mb-3'>
          Create your cryptocurrency portfolio today
        </div>
        <div className='text-center text-gray60 mb-16'>
          Coinbase has a variety of features that make it the best place to
          start trading
        </div>
        <div className='flex justify-between xl:flex-wrap-reverse xl:justify-center mb-12'>
          <CreatePortfolioInfo />

          <div>
            <img
              src='https://assets.coinbase.com/assets/coinbase-app.3b0bfd4cb6b7a7614c1e18472187f6b9.webp'
              alt='coinbase_app'
              className='w-full xl:w-[742px] sm:w-[327px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
