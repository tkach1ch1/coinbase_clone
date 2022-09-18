export const useShorthandConversion = () => {
  const numberConvert = (value: string) => {
    let number = Math.trunc(Number(value));

    if (value.length > 12) {
      return number + 'T';
    } else if (value.length >= 10 && value.length <= 12) {
      return number + 'B';
    } else if (value.length >= 6 && value.length <= 9) {
      return number + 'M';
    }
  };

  return { numberConvert };
};
