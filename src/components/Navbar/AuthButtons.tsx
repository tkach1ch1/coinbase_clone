import { MainButton } from '../MainButton';

export const AuthButtons = () => {
  return (
    <div>
      <span className='p-4 font-bold hover:text-blue_primary cursor-pointer transition-all delay-75 lg:hidden'>
        Sign in
      </span>
      <MainButton px={'px-3'} py={'py-2'}>
        Get started
      </MainButton>
    </div>
  );
};
