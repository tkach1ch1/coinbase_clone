import { SelectButton } from "../SelectButton";

export const TabletViewTableFilterCategories = () => {

    const filterCategoriesArray = ['All assets', 'Gainers', 'Losers']

  return <div className="w-full max-w-[500px]">
    <SelectButton listArray={filterCategoriesArray} label={'All assets'} itemPosition={'justify-between'} containerPosition={'left-0'} />
  </div>;
};
