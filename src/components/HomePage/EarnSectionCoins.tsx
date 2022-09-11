import { useEffect, useState } from 'react';

export const EarnSectionCoins = () => {
  const [allCoins, setAllCoins] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '08b795fc6cmsh33e69a1b4bb9e2dp114290jsn9f3f6475889d',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };

  type coinsProps = {
    symbol: string;
    iconUrl: string;
    name: string;
    uuid: string;
  };

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch(
          'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&orderBy=marketCap&orderDirection=desc&limit=100&offset=0',

          options
        );
        const fetchedData = await response.json();
        setAllCoins(fetchedData.data.coins);
      };

      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const earnCoinsArray = allCoins.filter(
    (elem: coinsProps) =>
      elem.symbol === 'NEAR' ||
      elem.symbol === 'SAND' ||
      elem.symbol === 'GAL' ||
      elem.symbol === 'ADA'
  );

  return (
    <div className=' ms:w-full'>
      <div className='ms:border-[1px] ms:mb-4 mb-4'>
        {earnCoinsArray.map((elem: coinsProps) => (
          <div
            className='p-[24px] ms:p-4 flex justify-between items-center gap-20 hover:shadow-inner cursor-pointer hover:duration-500 easy-out ms:border-b-[1px] '
            key={elem.uuid}
          >
            <div className='flex items-center gap-3'>
              <img
                src={elem.iconUrl}
                alt={elem.name}
                className='w-[38px] h-[38px]'
              />
              <span className='font-bold text-[22px] text-main_black whitespace-nowrap ms:w-[60px] ms:whitespace-normal'>
                {elem.name}
              </span>
              <span className='font-semibold text-[18px] text-main_black ms:hidden'>
                {elem.symbol}
              </span>
            </div>
            <div className='text-green_positive font-semibold whitespace-nowrap'>
              Earn $3 {elem.symbol}
            </div>
          </div>
        ))}
      </div>
      <a href='#' className='ml-6  text-blue_primary font-semibold'>View more &gt;</a>
    </div>
  );
};
