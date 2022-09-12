import { ReactNode } from 'react';
import { Tooltip } from "@material-tailwind/react";

type tolltipProps = {
  children: ReactNode;
  content: string;
  placement?: string;
};

export const CustomTooltip = ({ children, content, placement }: tolltipProps) => {
  return (
    <Tooltip
      content={content}
      className='text-light_gray bg-gray-700 rounded-none p-[3px] shadow-inner delay-300 text-[11px] border-[1px] border-gray200 relative ml-8 mt-[-6px] h-fit w-fit'
      placement="bottom-end"
    >
      {children}
    </Tooltip>
  );
};
