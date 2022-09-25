import { GlobalCoin } from '../../types/GlobalCoin';

type CoinsProps = {
  coinsArray: GlobalCoin[];
  sectionInfo: string;
  coinAdditionalInfo: string;
  hidden?: boolean;
};

export const GlobalCoinsStatsContainer = ({
  coinsArray,
  sectionInfo,
  coinAdditionalInfo,
  hidden
}: CoinsProps) => {

  const hiddenSection = hidden ? 'py-8 border-b xlm:hidden' : 'py-8 border-b'

  const sectionContainer = ['xlm:w-full xlm:border-r', hiddenSection]
  return (
    <div className={sectionContainer.join(' ')}>
      <h3 className='text-xl font-bold px-6 pb-2'>{sectionInfo}</h3>
      {coinsArray.map((coin) => (
        <div className='px-6 py-2 ' key={coin.uuid}>
          <div className='flex justify-between items-center py-2 px-4 gap-4  hover:bg-light_gray cursor-pointer rounded-lg'>
            <div className='flex items-center gap-3 '>
              <div>
                <img src={coin.iconUrl} alt={coin.name} className='w-8 h-8' />
              </div>
              <div className='flex flex-col'>
                <div className='font-semibold'>{coin.name}</div>
                <div className='text-gray90'>{coin.symbol}</div>
              </div>
            </div>
            <div>
              <div className='font-semibold text-gray60'>
                {coinAdditionalInfo}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
