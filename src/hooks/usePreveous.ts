import { useEffect, useRef, useState } from 'react';

export const usePreveous = (value: number) => {
  const ref = useRef(0);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
