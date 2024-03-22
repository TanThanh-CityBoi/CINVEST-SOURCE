export const formatZeroFirstForNumber = (num: number): string => {
  const str = '' + num;
  const pad = '000000';
  const ans = pad.substring(0, pad.length - str.length) + str;
  return ans;
};
