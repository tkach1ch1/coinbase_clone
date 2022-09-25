import React, { SVGAttributes, useRef, useState } from 'react';
import { useClickOutside } from 'react-haiku';
import arrow_down from '../images/svg/arrow_down.svg';
import arrow_up from '../images/svg/arrow_up.svg';
import done_mark_blue from '../images/svg/done_mark_blue.svg';
import { useWindowSize } from 'usehooks-ts';

type selectButtonProps = {
  listArray: string[];
  label: string;
  itemPosition?: string;
  btnWidth?: string;
  containerPosition?: string;
};

export const SelectButton = ({
  listArray,
  label,
  itemPosition,
  btnWidth,
  containerPosition,
}: selectButtonProps) => {
  const [openSelect, setOpenSelect] = useState(false);

  const [selectedProp, setSelectedProp] = useState(label);

  //Close select area outside of it
  const ref = useRef(null);
  const handleClickOutside = () => setOpenSelect(false);
  useClickOutside(ref, handleClickOutside);

  //Window width control in order to change open select container width
  const { width } = useWindowSize();

  const btnClass = [
    'flex items-center w-full gap-1 px-4 p-2 rounded-full bg-gray_button border-none cursor-pointer hover:opacity-80 active:scale-95',
    itemPosition,
    btnWidth,
  ];

  const containerPositionClass = containerPosition
    ? containerPosition
    : 'right-0';

  const mainOpenSelectClass =
    width > 767
      ? 'w-[300px] absolute border visible rounded-md overflow-hidden bg-white'
      : 'w-[200px] absolute border visible rounded-md overflow-hidden bg-white';

  const openedSelectEffectClass = [
    mainOpenSelectClass,
    'translate-y-2 opacity-100 duration-500 ease-in-out',
    containerPositionClass,
  ];

  const closedSelectEffectClass = [
    mainOpenSelectClass,
    'translate-y-0 opacity-0',
    containerPositionClass,
  ];

  return (
    <div className='relative' ref={ref}>
      {/* Button */}
      <button
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
        className={btnClass.join(' ')}
      >
        <div className='text-sm font-semibold'>{selectedProp}</div>
        {/* On toggle openSelect changes arrows */}
        {openSelect ? (
          <img
            src={arrow_up}
            alt='arrow_up'
            className='relative top-[1px] w-[16px] h-[16px]'
          />
        ) : (
          <img
            src={arrow_down}
            alt='arrow_down'
            className='relative top-[1px] w-[16px] h-[16px]'
          />
        )}
      </button>

      {/* Select area */}

      <ul
        className={
          openSelect
            ? openedSelectEffectClass.join(' ')
            : closedSelectEffectClass.join(' ')
        }
      >
        {listArray.map((elem) => (
          <li
            key={Math.floor(Math.random() * 100000)}
            onClick={() => {
              setSelectedProp(elem);
              setOpenSelect(false);
            }}
          >
            {/* Finding selected element in array and highlight it in selected area*/}
            {selectedProp === elem ? (
              <div className='px-4 py-3 hover:bg-light_gray cursor-pointer font-bold bg-gray_button'>
                <div className='flex justify-between '>
                  {elem}
                  <img src={done_mark_blue} alt='done_mark_blue' />
                </div>
              </div>
            ) : (
              <div className='px-4 py-3 hover:bg-light_gray cursor-pointer font-bold '>
                {elem}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
