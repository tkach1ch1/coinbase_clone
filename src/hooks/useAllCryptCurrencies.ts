import { useEffect, useState } from 'react';
import { Coin } from '../types/Coin';

export const useAllCryptCurrencies = () => {
  const [coins, setCoins] = useState<Coin[] | []>([]);

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
          'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&orderBy=marketCap&orderDirection=desc&limit=50&offset=0',
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

  return { coins };
};
