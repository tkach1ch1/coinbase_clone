import star from '../../images/svg/star.svg';
import web_earth from '../../images/svg/web_earth.svg';
import web_earth_white from '../../images/svg/web_earth_white.svg';
import diagonal_arrow_right_down from '../../images/svg/diagonal_arrow_right_down.svg';

export const TableFilterCategories = () => {
  const liClass = 'bg-gray_button px-[6px] py-1 rounded-md flex gap-2';

  const imgMainClass =
    'rounded-md w-[32px] h-[32px] flex justify-center items-center bg-white';

  const textLiClass = 'flex items-center text-sm font-semibold';

  return (
    <ul className='flex gap-3 my-5'>
      <li>
        <a href='/explore' className={liClass}>
          <div className={imgMainClass}>
            <img src={web_earth} alt='web_earth' />
          </div>
          <div className={textLiClass}>All assets</div>
        </a>
      </li>

      <li className='ms:hidden'>
        <a href='/explore/s/gainers' className={liClass}>
          <div className={imgMainClass}>
            <img src={star} alt='star' />
          </div>

          <div className={textLiClass}>Gainers</div>
        </a>
      </li>

      <li className='ms:hidden'>
        <a href='/explore/s/losers' className={liClass}>
          <div className={imgMainClass}>
            <img
              src={diagonal_arrow_right_down}
              alt='diagonal_arrow_right_down'
            />
          </div>
          <div className={textLiClass}>Losers</div>
        </a>
      </li>
    </ul>
  );
};
