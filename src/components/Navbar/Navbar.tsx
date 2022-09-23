import logo from '../../images/svg/Coinbase-logo.svg';
import { AuthButtons } from './AuthButtons';
import { BurgerMenu } from './BurgerMenu';
import { Categories } from './Categories';

export const Navbar = () => {
  return (
    <header className='w-full  top-0 left-0 bg-white h-[66px] lg:h-[57px] border-b-[1px] border-[rgb(236, 239, 241)] flex items-center z-[10000]'>
      <nav className='container max-w-mainWidth px-5 flex justify-between items-center text-sm text-black '>
        <a href='/'>
          <img src={logo} alt='coinbase_logo' className='w-[112px] h-[20px]' />
        </a>
        <Categories />
        <div className='flex items-center gap-12'>
          <AuthButtons />
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
};
