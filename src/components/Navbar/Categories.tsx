export const Categories = () => {
  const categoriesSelectionClass = [
    'h-full flex items-center border-b-4 pt-[4px] border-transparent transition-all  hover:border-blue_primary',
  ];

  return (
    <ul className='flex gap-9 h-[66px] font-bold items-center lg:hidden '>
      <a href='#' className={categoriesSelectionClass.join()}>
        <span>Explore</span>
      </a>

      <a href='#' className={categoriesSelectionClass.join()}>
        <span>Learn</span>
      </a>
      <div className={categoriesSelectionClass.join()}>
        <span className='cursor-default'>Individuals</span>
      </div>
      <div className={categoriesSelectionClass.join()}>
        <span className='cursor-default'>Businesses</span>
      </div>
      <div className={categoriesSelectionClass.join()}>
        <span className='cursor-default'>Developers</span>
      </div>
      <div className={categoriesSelectionClass.join()}>
        <span className='cursor-default'>Company</span>
      </div>
    </ul>
  );
};
