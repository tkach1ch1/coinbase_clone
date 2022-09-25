import btc_blue from '../../images/svg/btc_blue.svg';
import { GlobalCoin } from '../../types/GlobalCoin';

type CoinProps = {
  coinsArray: GlobalCoin[];
  sectionInfo: string;
  coinAdditionalInfo: string;
};

export const TabletViewGlobalCoinsStatsContainer = ({
  coinsArray,
  sectionInfo,
  coinAdditionalInfo,
}: CoinProps) => {
  const mainContainerClass =
    'flex gap-2 items-center px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-light_gray';

  return (
    <div>
      <div className='px-2 py-2'>
        {coinsArray.slice(0, 1).map((elem) => (
          <div className={mainContainerClass} key={elem.name}>
            <img
              src={elem.iconUrl}
              alt={elem.name}
              className='w-[32px] h-[32px]'
            />
            <div className='flex flex-col'>
              <div className='font-semibold'>{sectionInfo}</div>
              <div className='text-gray90'>
                {elem.name} • {coinAdditionalInfo}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
