import diagramm from '../../images/svg/diagramm.svg';
import calendar from '../../images/svg/calendar.svg';
import key from '../../images/svg/key.svg';
import mobile from '../../images/svg/mobile.svg';

export const CreatePortfolioInfo = () => {
  const infoPartClass = 'flex gap-4 sm:flex-col sm:items-center';

  const imageClass =
    'w-[72px] h-[72px] rounded-full shadow-xl flex items-center justify-center';

  const textContainerClass =
    'flex flex-col gap-2 justify-center w-[320px] xl:w-full sm:text-center';

  return (
    <div className='flex flex-col gap-10 mb-8'>
      <div>
        <div className={infoPartClass}>
          <div className={imageClass}>
            <img src={diagramm} alt='sign' />
          </div>
          <div className={textContainerClass}>
            <span className='text-xl font-bold'>Manage your portfolio</span>
            <span className='text-main_gray'>
              Buy and sell popular digital currencies, keep track of them in the
              one place.
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className={infoPartClass}>
          <div className={imageClass}>
            <img src={calendar} alt='sign' />
          </div>
          <div className={textContainerClass}>
            <span className='text-xl font-bold'>Recurring buys</span>
            <span className='text-gray60'>
              Invest in cryptocurrency slowly over time by scheduling buys
              daily, weekly, or monthly.
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className={infoPartClass}>
          <div className={imageClass}>
            <img src={key} alt='sign' />
          </div>
          <div className={textContainerClass}>
            <span className='text-xl font-bold'>Vault protection</span>
            <span className='text-gray60'>
              For added security, store your funds in a vault with time delayed
              withdrawals.
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className={infoPartClass}>
          <div className={imageClass}>
            <img src={mobile} alt='sign' />
          </div>
          <div className={textContainerClass}>
            <span className='text-xl font-bold'>Mobile apps</span>
            <span className='text-gray60'>
              Stay on top of the markets with the Coinbase app for{' '}
              <a
                href='https://play.google.com/store/apps/details?id=com.coinbase.android'
                className='text-blue_primary'
              >
                Android
              </a>{' '}
              or{' '}
              <a
                href='https://apps.apple.com/us/app/coinbase-buy-sell-bitcoin/id886427730'
                className='text-blue_primary'
              >
                IOS
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
