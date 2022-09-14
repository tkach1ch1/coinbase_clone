import { NavLink } from 'react-router-dom';
import star from '../../images/svg/star.svg';
import web_earth from '../../images/svg/web_earth.svg';
import diagonal_arrow_right_down from '../../images/svg/diagonal_arrow_right_down.svg';

export const TableFilterCategories = () => {
  const liClass = 'bg-gray_button px-[6px] py-1 rounded-md';

  const imgLiClass =
    'bg-white rounded-md w-[32px] h-[32px] flex justify-center items-center';

  const textLiClass = 'flex items-center text-sm font-semibold';

  let activeStyle = {
    backgroundColor: 'blue',
  };

  return (
    <ul className='flex gap-3'>
      <li className={liClass}>
        <NavLink to='/explore' className='flex gap-2 '>
          <div className={imgLiClass}>
            <img src={web_earth} alt='web_earth' />
          </div>
          <div className={textLiClass}>All assets</div>
        </NavLink>
      </li>

      <li className={liClass}>
        <NavLink to='/explore/s/gainers' className='flex gap-2 '>
          <div className={imgLiClass}>
            <img src={star} alt='star' />
          </div>

          <div className={textLiClass}>Gainers</div>
        </NavLink>
      </li>

      <li className={liClass}>
        <NavLink to='/explore/s/losers' className='flex gap-2 '>
          <div className={imgLiClass}>
            <img
              src={diagonal_arrow_right_down}
              alt='diagonal_arrow_right_down'
            />
          </div>
          <div className={textLiClass}>Losers</div>
        </NavLink>
      </li>
    </ul>
  );
};
