import safe from '../../images/svg/safe.svg';
import list from '../../images/svg/list.svg';
import shield from '../../images/svg/shield.svg';
import { CustomTooltip } from '../CustomTooltip';
export const WhyCoinbaseSection = () => {
  const cardClass = 'flex flex-col items-center gap-5 w-[353px]';
  return (
    <section className='container max-w-mainWidth p-6 '>
      <div className='p-6'>
        <div className='mb-12 mt-8'>
          <div className='text-[40px] font-bold text-center mb-4'>
            The most trusted cryptocurrency platform
          </div>
          <div className='text-gray60 text-center text-lg'>
            Here are a few reasons why you should choose Coinbase
          </div>
        </div>
      </div>
      <div className='flex justify-between gap-8 mb-28 ls:flex-col ls:items-center text-center '>
        <div className={cardClass}>
          <div>
            <img src={safe} alt='sign' />
          </div>
          <span className='text-[20px] font-semibold'>Secure storage</span>
          <span className='text-gray60'>
            We store the vast majority of the digital assets in secure offline
            storage.
          </span>
          <CustomTooltip content='Learn how Coinbase keeps your funds safe and secure'>
            <a href='#' className='text-blue_primary font-semibold'>
              Learn how Coinbase keeps your funds safe and secure &gt;{' '}
            </a>
          </CustomTooltip>
        </div>
        <div className={cardClass}>
          <div>
            <img src={list} alt='sign' />
          </div>
          <span className='text-[20px] font-semibold'>
            Protected by insurance
          </span>
          <span className='text-gray60'>
            Coinbase maintains crypto insurance and all USD cash balances are
            covered by FDIC insurance, up to a maximum of $250,000.
          </span>
          <CustomTooltip content='Learn how your crypto is covered by our insurance policy'>
            <a href='#' className='text-blue_primary font-semibold'>
              Learn how your crypto is covered by our insurance policy &gt;{' '}
            </a>
          </CustomTooltip>
        </div>
        <div className={cardClass}>
          <div>
            <img src={shield} alt='sign' />
          </div>
          <span className='text-[20px] font-semibold '>
            Industry best practices
          </span>
          <span className='text-gray60'>
            Coinbase supports a variety of the most popular digital currencies.
          </span>
          <CustomTooltip content='Learn how your crypto is covered by our insurance policy'>
            <a href='#' className='text-blue_primary font-semibold'>
              Learn how we implement industry best practices for account
              security &gt;{' '}
            </a>
          </CustomTooltip>
        </div>
      </div>
    </section>
  );
};
