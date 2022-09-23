import { useAllCryptCurrencies } from '../../hooks/useAllCryptCurrencies';
import empty_star from '../../images/svg/empty_star.svg';
import { useShorthandConversion } from '../../hooks/useShorthandConversion';
import arrow_red from '../../images/svg/diagonal_arrow_down_red.svg';
import arrow_green from '../../images/svg/diagonal_arrow_up_green.svg';

export const CryptoCurrenciesAssetsTable = () => {
  const { coins } = useAllCryptCurrencies();

  const { numberConvert } = useShorthandConversion();

  const tableHeaderThClass = 'text-right py-2 text-sm text-gray90';

  const tableHeaderDivClass = 'py-2 px-4 hover:bg-light_gray';

  const tableBodyTdClass = 'text-right py-2 px-4 font-semibold'

  return (
    <div className='p-4'>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='text-left text-sm text-gray90 px-[-16px] py-2'>
              <div className={tableHeaderDivClass}>Name</div>
            </th>
            <th className={tableHeaderThClass}>
              <div className={tableHeaderDivClass}>Price</div>
            </th>

            <th className={tableHeaderThClass}>
              <div className={tableHeaderDivClass}>Change</div>
            </th>
            <th className={tableHeaderThClass}>
              <div className={tableHeaderDivClass}>Market cap</div>
            </th>
            <th className={tableHeaderThClass}>
              <div className='py-2 px-4'>Volume (24h)</div>
            </th>
            <th className={tableHeaderThClass}>
              <div className='py-2 px-4'>Supply</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {!!coins &&
            coins.map((coin) => (
              <tr
                className='cursor-pointer hover:bg-light_gray'
                key={coin.uuid}
              >
                <td className=' py-2 px-4'>
                  <div className='py-2 hover:bg-light_gray flex items-center gap-4'>
                    <div>
                      <img src={empty_star} alt='empty_star' />
                    </div>
                    <div className='flex items-center gap-2'>
                      <div>
                        <img
                          src={coin.iconUrl}
                          alt='btc_blue'
                          className='w-[32px] h-[32px]'
                        />
                      </div>
                      <div className='flex flex-col'>
                        <span className='font-semibold'>{coin.name}</span>
                        <span className='text-sm text-gray90'>
                          {coin.symbol}
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className={tableBodyTdClass}>
                  ${Number(coin.price).toFixed(2)}
                </td>

                <td className={tableBodyTdClass}>
                  {Number(coin.change) > 0 ? (
                    <div className='flex justify-end items-center'>
                      <img src={arrow_green} alt='arrow_green' />
                      <div className='text-green_positive'>{coin.change}%</div>
                    </div>
                  ) : (
                    <div className='flex justify-end items-center'>
                      <img src={arrow_red} alt='arrow_red' />
                      <div className='text-red_negative'>{Math.abs(Number(coin.change))}%</div>
                    </div>
                  )}
                </td>

                <td className={tableBodyTdClass}>
                  $ {numberConvert(coin.marketCap)}
                </td>
                <td className={tableBodyTdClass}>
                  {coin['24hVolume']}
                </td>
                <td className={tableBodyTdClass}>34344334</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
