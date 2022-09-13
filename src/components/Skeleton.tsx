type skeletonProps = {
    width: string 
}

export const Skeleton = ({width}:skeletonProps) => {

    const skeletonWidth = width ? width : null 

    const skeletonClass = ['h-[24px] bg-[#d6d6d6]', skeletonWidth]

  return (
    <div className='animate-pulse my-auto relative'>
      <div className={skeletonClass.join(' ')}></div>
    </div>
  );
};
