import { useEffect, useState } from 'react';

import { GlobalCoin } from '../types/GlobalCoin';

export const useGlobalStats = () => {
  const [totalCoins, setTotalCoins] = useState(0);
  const [newestCoins, setNewestCoins] = useState<GlobalCoin[] | []>([]);
  const [bestCoins, setBestCoins] = useState<GlobalCoin[] | [] >([]);

  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);

        const response = await fetch(
          'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl',
          options
        );
        const fetchedData = await response.json();
        setTimeout(() => {
          setTotalCoins(fetchedData.data.totalCoins);
          setIsLoading(false);
        }, 1000);
        setNewestCoins(fetchedData.data.newestCoins);
        setBestCoins(fetchedData.data.bestCoins);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return { isLoading, totalCoins, newestCoins, bestCoins };
};
