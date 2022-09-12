import { CustomTooltip } from '../CustomTooltip';

export const Categories = () => {
  const categoriesSelectionClass = [
    'h-full flex items-center border-b-4 pt-[4px] border-transparent delay-75 hover:border-blue_primary mx-6',
  ];

  return (
    <ul className='flex h-[66px] font-bold items-center lg:hidden '>
      <a href='/explore' className={categoriesSelectionClass.join()}>
        <CustomTooltip content='Explore'>
          <span>Explore</span>
        </CustomTooltip>
      </a>

      <a href='#' className={categoriesSelectionClass.join()}>
        <CustomTooltip content='Learn'>
          <span>Learn</span>
        </CustomTooltip>
      </a>
      <div className={categoriesSelectionClass.join()}>
        <span className='cursor-default '>Individuals</span>
      </div>
      <div className={categoriesSelectionClass.join()}>
        <span className='cursor-default '>Businesses</span>
      </div>
      <div className={categoriesSelectionClass.join()}>
        <span className='cursor-default '>Developers</span>
      </div>
      <div className={categoriesSelectionClass.join()}>
        <span className='cursor-default '>Company</span>
      </div>
    </ul>
  );
};
