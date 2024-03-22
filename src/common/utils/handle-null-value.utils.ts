import { Logger } from '@nestjs/common';

export const handleNullValue = (object) => {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (element === '' || element === 0) {
        object[key] = null;
      }
    }
  }
  Logger.debug('after handle null value');
  Logger.debug(object);
  return object;
};
