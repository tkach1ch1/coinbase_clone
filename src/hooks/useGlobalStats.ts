import { useEffect, useState } from 'react';
 

export const useGlobalStats = () => {
  const [totalCoins, setTotalCoins] = useState(null);

  const [isLoading, setIsLoading] = useState(false);


  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '08b795fc6cmsh33e69a1b4bb9e2dp114290jsn9f3f6475889d',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = () => {
      try {
        setIsLoading(true);
        setTimeout(async () => {
          const response = await fetch(
            'https://coinranking1.p.rapidapi.com/stats?referenceCurrencyUuid=yhjMzLPhuIDl',
            options
          );
          const fetchedData = await response.json();
          setTotalCoins(fetchedData.data.totalCoins);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return { isLoading, totalCoins };
};
