export const removeDuplicateNullUndefinedElementFromArray = (arr) => {
  arr = arr.filter((item) => item);
  return [...new Set(arr)];
};
