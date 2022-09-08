import { ReactNode } from 'react';

type MainButtonProps = {
  children: ReactNode;
  px?: string;
  py?: string;
  fontSize?: string;
  maxWidth?: string;
};
export const MainButton = ({
  children,
  px,
  py,
  fontSize,
  maxWidth,
}: MainButtonProps) => {
  const btnPxClass = px ? px : null;
  const btnPyClass = py ? py : null;
  const btnMaxWidthClass = maxWidth ? maxWidth : null;

  const btnFontSizeClass = fontSize ? fontSize : 'text-sm';

  const btnClasses = [
    'bg-blue_primary text-white font-bold rounded-[4px] hover:opacity-90 delay-75',
    btnPxClass,
    btnPyClass,
    btnFontSizeClass,
    btnMaxWidthClass,
  ];

  return <button className={btnClasses.join(' ')}>{children}</button>;
};
