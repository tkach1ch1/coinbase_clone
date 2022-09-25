import arrow_red from '../../images/svg/diagonal_arrow_down_red.svg';
import arrow_green from '../../images/svg/diagonal_arrow_up_green.svg';

type TableChangeCatProps = {
    tableBodyTdClass: string;
    change: string;

}

export const TableChangeCategorie = ({tableBodyTdClass, change}: TableChangeCatProps) => {
  return (
    <div className={tableBodyTdClass}>
      {Number(change) > 0 ? (
        <div className='flex justify-end items-center'>
          <img src={arrow_green} alt='arrow_green' />
          <div className='text-green_positive'>{change}%</div>
        </div>
      ) : (
        <div className='flex justify-end items-center'>
          <img src={arrow_red} alt='arrow_red' />
          <div className='text-red_negative'>
            {Math.abs(Number(change))}%
          </div>
        </div>
      )}
    </div>
  );
};
