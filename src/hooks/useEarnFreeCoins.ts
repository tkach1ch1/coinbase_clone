import { useAllCryptCurrencies } from "./useAllCryptCurrencies";
import { GlobalCoin } from "../types/GlobalCoin";


export const useEarnFreeCoins = () => {

    const { coins } = useAllCryptCurrencies();

  const earnCoinsArray = coins.filter(
    (elem: GlobalCoin) =>
      elem.symbol === 'NEAR' ||
      elem.symbol === 'SAND' ||
      elem.symbol === 'GAL' ||
      elem.symbol === 'ADA'
  );
  return {earnCoinsArray}
}
