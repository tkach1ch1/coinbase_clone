export const CurrenciesTableSections = () => {
  const tableSectionClass = 'text-[14px] text-gray60 pr-12';

  const rankSectionClass = [tableSectionClass, 'pr-10, pl-8'];

  const nameSectionClass = [tableSectionClass, 'w-full'];

  return (
    <div className='flex justify-between gap-[70px] py-4 ls:hidden'>
      <div className={rankSectionClass.join(' ')}>#</div>
      <div className={nameSectionClass.join(' ')}>Name</div>
      <div className={tableSectionClass}>Price</div>
      <div className={tableSectionClass}>Change</div>
      <div className={tableSectionClass}>Trade</div>
    </div>
  );
};
