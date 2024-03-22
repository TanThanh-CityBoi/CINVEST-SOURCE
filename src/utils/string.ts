import { nanoid } from 'nanoid';

export const camelToSnakeCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);

export const getUUID = () => nanoid(16);

export const trimPhoneNumber = (phone: string): string => {
  while (phone.startsWith('0')) {
    phone = phone.substring(1);
  }
  return phone;
};

export const matchRegExp = (
  str: string,
  start: string,
  end: string,
): string[] | null => {
  const regexp = new RegExp(`(${start})(.*?)(${end})`, 'g');
  const result = str.match(regexp);
  return result;
};
