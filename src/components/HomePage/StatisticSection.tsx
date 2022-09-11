export const StatisticSection = () => {
  const titleClass = ' text-[56px] font-bold text-white';

  const subTitleClass = 'text-white opacity-70';

  return (
    <section className='  bg-blue_primary p-6'>
      <div className='container max-w-mainWidth p-6 text-center flex justify-between ms:flex-col ms:gap-9'>
        <div>
          <div className={titleClass}>$217B</div>
          <span className={subTitleClass}>Quarterly volume traded</span>
        </div>
        <div>
          <div className={titleClass}>100+</div>
          <span className={subTitleClass}>Countries supported</span>
        </div>
        <div>
          <div className={titleClass}>103M+</div>
          <span className={subTitleClass}>Verified users</span>
        </div>
      </div>
    </section>
  );
};
