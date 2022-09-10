import btc_blue from '../../images/svg/btc_blue.svg';
import arrow_right from '../../images/svg/arrow_right.svg';
import { useState } from 'react';

export const LinkToPortfolio = () => {
  const [isHover, setIsHover] = useState(false);

  const textOnHoverStyle = isHover
    ? 'text-blue_primary font-bold hover:underline hover:decoration-1'
    : 'text-blue_primary font-bold';
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className='flex gap-2 cursor-pointer items-center'
    >
      <img src={btc_blue} alt='btc_sign' />
      <div className={textOnHoverStyle}>Jump start your portfolio</div>
      <img src={arrow_right} alt='btc_sign' />
    </div>
  );
};
