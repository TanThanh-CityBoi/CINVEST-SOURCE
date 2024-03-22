export const formatToArray = (value) => {
  if (!value) return null;
  if (Array.isArray(value)) return value;
  return [value];
};
