import { useAllCryptCurrencies } from '../../hooks/useAllCryptCurrencies';
import empty_star from '../../images/svg/empty_star.svg';
import { useShorthandConversion } from '../../hooks/useShorthandConversion';
import arrow_red from '../../images/svg/diagonal_arrow_down_red.svg';
import arrow_green from '../../images/svg/diagonal_arrow_up_green.svg';

export const CryptoCurrenciesAssetsTable = () => {
  const { coins } = useAllCryptCurrencies();

  const { numberConvert } = useShorthandConversion();

  return (
    <div className='p-4'>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='text-left text-sm text-gray90 px-4 py-2'>
              <div className='py-2 hover:bg-light_gray'>Name</div>
            </th>
            <th className='text-right py-2 px-4 text-sm text-gray90'>Price</th>
            <th className='text-right py-2 px-4 text-sm text-gray90'>Change</th>
            <th className='text-right py-2 px-4 text-sm text-gray90'>
              Market cap
            </th>
            <th className='text-right py-2 px-4 text-sm text-gray90'>
              Volume (24h)
            </th>
            <th className='text-right py-2 px-4 text-sm text-gray90'>Supply</th>
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
                <td className='text-right py-2 px-4 font-semibold'>
                  ${Number(coin.price).toFixed(2)}
                </td>

                <td className='text-right py-2 px-4 font-semibold  '>
                  {Number(coin.change) > 0 ? (
                    <div className='flex justify-end items-center'>
                      <img src={arrow_green} alt='arrow_green' />
                      <div className='text-green_positive'>{coin.change}%</div>
                    </div>
                  ) : (
                    <div className='flex justify-end items-center'>
                      <img src={arrow_red} alt='arrow_red' />
                      <div className='text-red_negative'>{coin.change}%</div>
                    </div>
                  )}
                </td>

                <td className='text-right py-2 px-4 font-semibold'>
                  $ {numberConvert(coin.marketCap)}
                </td>
                <td className='text-right py-2 px-4 font-semibold'>
                  {coin['24hVolume']}
                </td>
                <td className='text-right py-2 px-4 font-semibold'>34344334</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
