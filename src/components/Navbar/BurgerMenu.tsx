import { useState } from 'react';
import { MainButton } from '../MainButton';
import arrow_down from '../../images/svg/arrow_down.svg';
import arrow_up from '../../images/svg/arrow_up.svg';

export const BurgerMenu = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [section, setSection] = useState(false);

  const topLineClickedStyle = isNavOpen
    ? 'flex w-[18px] h-[2px] bg-black absolute top-0 left-0  transition-all delay-[50] translate-y-[8px] rotate-45 '
    : 'flex w-[18px] h-[2px] bg-black absolute top-0 left-0 transition-all delay-75';

  const middleLineClickedStyle = isNavOpen
    ? 'flex w-[18px] h-[2px] bg-black absolute opacity-0 transition-easy delay-75 '
    : 'flex w-[18px] h-[2px] bg-black absolute top-[8px] left-0 transition-all delay-75';

  const bottomLineClickedStyle = isNavOpen
    ? 'flex w-[18px] h-[2px] bg-black absolute bottom-0 left-0 transition-all delay-[50] translate-y-[-8px] -rotate-45'
    : 'flex w-[18px] h-[2px] bg-black absolute bottom-0 left-0 transition-all delay-75 ';

  return (
    <>
      <div
        onClick={() => setIsNavOpen(!isNavOpen)}
        className='w-[18px] h-[18px] relative lgm:hidden cursor-pointer'
      >
        <span className={topLineClickedStyle}></span>
        <span className={middleLineClickedStyle}></span>
        <span className={bottomLineClickedStyle}></span>
      </div>
      {isNavOpen && (
        <>
          <div className='fixed flex flex-col left-0 top-14 w-full h-full px-5 py-6 gap-8 font-bold text-base bg-white overflow-auto z-[1000]'>
            <a href='/'>Explore</a>

            <div className='flex justify-between'>
              <div className='cursor-default'>Learn</div>
              {section ? (
                <img src={arrow_up} alt='arrow_up' />
              ) : (
                <img src={arrow_down} alt='arrow_down' />
              )}
            </div>
            <div className='flex justify-between'>
              <div className='cursor-default'>Explore</div>
              {section ? (
                <img src={arrow_up} alt='arrow_up' />
              ) : (
                <img src={arrow_down} alt='arrow_down' />
              )}
            </div>
            <div className='flex justify-between'>
              <div className='cursor-default'>Individuals</div>
              {section ? (
                <img src={arrow_up} alt='arrow_up' />
              ) : (
                <img src={arrow_down} alt='arrow_down' />
              )}
            </div>
            <div className='flex justify-between'>
              <div className='cursor-default'>Businesses</div>
              {section ? (
                <img src={arrow_up} alt='arrow_up' />
              ) : (
                <img src={arrow_down} alt='arrow_down' />
              )}
            </div>
            <div className='flex justify-between'>
              <div className='cursor-default'>Developers</div>
              {section ? (
                <img src={arrow_up} alt='arrow_up' />
              ) : (
                <img src={arrow_down} alt='arrow_down' />
              )}
            </div>
            <div className='flex justify-between'>
              <div className='cursor-default'>Company</div>
              {section ? (
                <img src={arrow_up} alt='arrow_up' />
              ) : (
                <img src={arrow_down} alt='arrow_down' />
              )}
            </div>
            <div className='flex flex-col gap-3'>
              <MainButton
                px={'px-4'}
                py={'py-4'}
                maxWidth={'msm:max-w-[300px]'}
                fontSize={'text-base'}
              >
                Get started
              </MainButton>
              <button className='msm:max-w-[300px] p-4 text-base text-blue_primary hover:border-white duration-100 border-2 border-blue_primary rounded mb-16'>
                Sign in
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
