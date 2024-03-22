import { ClassTransformOptions, plainToInstance } from 'class-transformer';

export function transformToArrNum(params: any): number[] {
  // Your custom transformation logic here
  let value = params.value;
  if (Array.isArray(value)) {
    value = value.map((item) => parseInt(item, 10));

    return value;
  } else {
    return [parseInt(value, 10)];
  }
}

export function transformToInstance<T>(
  classType: new (...args: unknown[]) => T,
  data: unknown,
  options?: ClassTransformOptions,
): any {
  const defaultOptions: ClassTransformOptions = {
    exposeDefaultValues: true,
    ...(options || {}),
  };

  return plainToInstance(classType, data, defaultOptions);
}
