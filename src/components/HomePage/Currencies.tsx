import { useEffect, useState } from 'react';

export const Currencies = () => {
  const [coins, setCoins] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '08b795fc6cmsh33e69a1b4bb9e2dp114290jsn9f3f6475889d',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&orderBy=marketCap&orderDirection=desc&limit=4&offset=0',
          options
        );
        const fetchedData = await response.json();
        setCoins(fetchedData.data.coins);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  type coinsProps = {
    rank: string;
    iconUrl: string;
    name: string;
    price: string;
    change: string;
    uuid: string;
    symbol: string;
  };

  return (
    <>
      {coins.map((elem: coinsProps) => (
        <div
          className='flex gap-[70px] py-4 border-t-[1px] border-[rgba(gray60,0.2)] hover:bg-gray-100 hover:duration-500'
          key={elem.uuid}
        >
          <div className='pr-10 pl-8  text-lg text-gray60 font-semibold flex items-center ls:hidden'>
            {elem.rank}
          </div>
          <a href='#' className='flex pr-12 w-full gap-3 items-center ls:pl-12'>
            <img
              className='w-[36px] h-[36px]'
              src={elem.iconUrl}
              alt={elem.name}
            />
            <div className='lsm:flex lsm:gap-2 '>
              <div className='text-lg font-semibold text-gray100 '>
                {elem.name}
              </div>
              <div className='text-lg  font-semibold text-gray60 opacity-60 '>
                {elem.symbol}
              </div>
            </div>
          </a>
          <div className='lsm:flex lsm:gap-12 '>
            <div className='flex gap-1 items-center'>
              <span className='text-xl text-gray100 font-semibold opacity-90'>
                $
              </span>
              <div className='pr-12 flex text-lg text-gray100 font-semibold opacity-90'>
                {(+elem.price).toFixed(2)}
              </div>
            </div>
            {+elem.change > 0 ? (
              <div className='pr-10 ls:pr-12 flex ls:justify-end items-center text-lg font-semibold text-green_positive'>
                +{elem.change}%
              </div>
            ) : (
              <div className='pr-10 ls:pr-12 flex items-center text-lg font-semibold text-red_negative'>
                {elem.change}%
              </div>
            )}
          </div>
          <div className='pr-8 ls:hidden'>
            <button className=' px-4 py-2 rounded text-white font-semibold bg-green_positive '>
              Buy
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
