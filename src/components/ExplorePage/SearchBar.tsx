import { useRef, useState } from 'react';
import { useClickOutside } from 'react-haiku';
import search from '../../images/svg/search.svg';
import search_focused from '../../images/svg/search_focused.svg';

export const SearchBar = () => {
  const [focusSearch, setFocusSearch] = useState(false);

  //By clicking outside a search bar it changes a search sign back to default color
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => setFocusSearch(false);

  useClickOutside(ref, handleClickOutside);

  return (
    <div
      onClick={() => setFocusSearch(true)}
      ref={ref}
      className='
      relative border w-[500px] overflow-hidden border-main_gray rounded-full hover:bg-light_gray 
      focus-within:outline focus-within:border-transparent focus-within:duration-75 focus-within:outline-2 focus-within:outline-blue_primary 
      ms:w-full ms:pr-4'
    >
      {/* By search bar focus changes a search sign color */}
      {focusSearch ? (
        <img
          src={search_focused}
          alt='search'
          className='px-4 absolute top-[22px] pointer-events-none ms:top-[14px]'
        />
      ) : (
        <img
          src={search}
          alt='search'
          className='px-4 absolute top-[22px] pointer-events-none ms:top-[14px]'
        />
      )}
      <input
        type='search'
        placeholder='Search for an asset'
        className='text-main_gray w-[500px] outline-none font-medium hover:bg-light_gray pl-12 pr-8 py-4 ms:py-2 ms:w-full '
      ></input>
    </div>
  );
};
