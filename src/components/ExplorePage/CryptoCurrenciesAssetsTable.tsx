import { useAllCryptCurrencies } from '../../hooks/useAllCryptCurrencies';
import empty_star from '../../images/svg/empty_star.svg';
import { useShorthandConversion } from '../../hooks/useShorthandConversion';
import { TableChangeCategorie } from './TableChangeCategorie';

export const CryptoCurrenciesAssetsTable = () => {
  const { coins } = useAllCryptCurrencies();

  const { numberConvert } = useShorthandConversion();

  const tableHeaderThClass = 'text-right py-2 text-sm text-gray90';

  const tableHeaderDivClass = 'py-2 px-4 hover:bg-light_gray';

  const tableBodyTdClass = 'text-right py-2 px-4 font-semibold';

  //Hidden categories on tablet width
  const bodyTdHiddenClass = [tableBodyTdClass, 'ms:hidden'];

  return (
    <div className='p-4 ms:p-0 ms:pt-2'>
      <table className='w-full'>
        <thead className='ms:hidden'>
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
                <td className='py-2 px-4 ms:px-6'>
                  <div className='py-2 hover:bg-light_gray flex items-center gap-4'>
                    <div className='ms:hidden'>
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

                <td className={bodyTdHiddenClass.join(' ')}>
                  ${Number(coin.price).toFixed(2)}
                </td>
                <td className='ms:hidden'>
                  <TableChangeCategorie
                    change={coin.change}
                    tableBodyTdClass={bodyTdHiddenClass.join(' ')}
                  />
                </td>

                {/* Tablet/mobile price and price change positions while other categories will be hidden */}
                <td className='mss:hidden flex flex-col h-[76px] justify-center pr-6'>
                  <div className='font-semibold text-right'>
                    ${Number(coin.price).toFixed(2)}
                  </div>

                  <TableChangeCategorie
                    change={coin.change}
                    tableBodyTdClass={'text-[13px] text-rigth'}
                  />
                </td>

                {/*  */}

                <td className={bodyTdHiddenClass.join(' ')}>
                  $ {numberConvert(coin.marketCap)}
                </td>
                <td className={bodyTdHiddenClass.join(' ')}>
                  {coin['24hVolume']}
                </td>
                <td className={bodyTdHiddenClass.join(' ')}>34344334</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
