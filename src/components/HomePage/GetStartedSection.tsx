import men from '../../images/svg/men.svg';
import bank from '../../images/svg/bank.svg';
import hand from '../../images/svg/hand.svg';

export const GetStartedSection = () => {
  const cardContainer = 'flex flex-col items-center gap-10';

  const cardTitle = 'text-[20px] font-bold';

  return (
    <div className='container max-w-mainWidth p-6 mb-28'>
      <div className='text-center mt-16 mb-16'>
        <div className='text-[40px] font-bold mb-3'>
          Get started in a few minutes
        </div>
        <div className='text-gray60'>
          Coinbase supports a variety of the most popular digital currencies.
        </div>
      </div>
      <div className='flex justify-center ls:text-center sm:flex-col sm:gap-12'>
        <div className={cardContainer}>
          <div>
            <img src={men} alt='sign' />
          </div>
          <div className={cardTitle}>Create an account</div>
        </div>

        <div className='h-[1px] w-[130px] mt-10 bg-gray60 sm:hidden'></div>

        <div className={cardContainer}>
          <div>
            <img src={bank} alt='sign' />
          </div>
          <div className={cardTitle}>Link your bank account</div>
        </div>

        <div className='h-[1px] w-[130px] mt-10 bg-gray60 sm:hidden'></div>

        <div className={cardContainer}>
          <div>
            <img src={hand} alt='sign' />
          </div>
          <div className={cardTitle}>Start buying &amp; selling</div>
        </div>
      </div>
    </div>
  );
};
