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
      className='text-gray0 bg-gray-700 rounded-none p-[4px] delay-300 text-[11px] '
      data-animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
      placement="bottom-end"
    >
      {children}
    </Tooltip>
  );
};
