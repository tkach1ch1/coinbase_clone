import { CryptoPricesContainer } from "../components/ExplorePage/CryptoPricesContainer";
import { TitleExploreSection } from "../components/ExplorePage/TitleExploreSection";

export const Losers = () => {
  return (
    <div className=' ms:p-6 xxl:max-w-[1700px] xxl:container xxl:border-r xxl:border-l '>
      <TitleExploreSection />
      <CryptoPricesContainer />
    </div>
  );
};
