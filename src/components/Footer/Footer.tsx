import logo from '../../images/svg/Coinbase-logo.svg';
import { CustomTooltip } from '../CustomTooltip';

export const Footer = () => {
  const linkClass = 'hover:text-blue_primary hover:underline';

  return (
    <div className='container max-w-mainWidth px-6 py-[100px]'>
      <div className='flex flex-col gap-5'>
        <img src={logo} alt='coinbase_logo' className='w-[112px] h-[20px]' />
        <span className='text-gray60 font-medium'>@ 2022 Coinbase</span>
        <div className='flex font-medium text-gray60 gap-1'>
          <CustomTooltip content='The Coinbase blog'>
            <a href='https://blog.coinbase.com/' className={linkClass}>
              Blog
            </a>
          </CustomTooltip>
          <span>•</span>
          <CustomTooltip content='Coinbase Twitter account'>
            <a href='https://twitter.com/coinbase' className={linkClass}>
              Twitter
            </a>
          </CustomTooltip>
          <span>•</span>
          <CustomTooltip content='Coinbase Facebook page'>
            <a href='https://www.facebook.com/Coinbase' className={linkClass}>
              Facebook
            </a>
          </CustomTooltip>
        </div>
      </div>
    </div>
  );
};
