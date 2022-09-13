import { useEffect, useState } from 'react';


//Fetching market capital change
export const useMcapChange = () => {
  const [mcapChange, setMcapChange] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '08b795fc6cmsh33e69a1b4bb9e2dp114290jsn9f3f6475889d',
      'X-RapidAPI-Host': 'coinlore-cryptocurrency.p.rapidapi.com',
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://coinlore-cryptocurrency.p.rapidapi.com/api/global/',
          options
        );
        const fetchedData = await response.json();
        setMcapChange(fetchedData[0].mcap_change);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return { isLoading, mcapChange };
};
