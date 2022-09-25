import { useEffect, useRef, useState } from 'react';

export const usePreveous = (value: number) => {
  const ref:any = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
