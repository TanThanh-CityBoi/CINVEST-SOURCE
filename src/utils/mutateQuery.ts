import { ILike, In } from 'typeorm';

export const mutateQuery = (query: any) => {
  const page = query?.page || 1;
  const limit = query?.limit || 10;
  const sortBy = query?.sortBy || 'createdAt';
  const sortOrder = query?.sortOrder || 'ASC';
  const skip = (page - 1) * limit;
  delete query['page'];
  delete query['limit'];
  delete query['sortBy'];
  delete query['sortOrder'];
  for (const key in query) {
    if (key[0] === '_') {
      delete query[key];
    }
  }

  if (query?.name) {
    const val = query.name;
    query.name = ILike(`%${val}%`);
  }

  if (query?.ids?.length > 0) {
    query.id = In(query.ids);
    delete query.ids;
  }
  return { limit, skip, sortBy, sortOrder, conditions: query };
};

export const convertDateToString = (data: any[]) => {
  return data.map((item) => {
    for (const key in item) {
      if (item[key] instanceof Date && !isNaN(item[key].getTime())) {
        item[key] = item[key].toString();
      }
    }
    return item;
  });
};

export const convertStringToDate = (data: any) => {
  const dateKeys = ['At', 'Date', 'date'];
  for (const key in data) {
    dateKeys.map((k) => {
      if (key.includes(k)) {
        data[key] = new Date(data[key]);
      }
    });
  }
  const result = serializeEmptyArray(data);
  return result;
};

export const serializeEmptyArray = (data: any) => {
  for (const key in data) {
    if (Array.isArray(data[key])) {
      if (data[key].length === 0) {
        delete data[key];
      } else {
        if (data[key][0]?.id === 0) {
          data[key] = [];
        }
      }
    }
  }
  return data;
};
//  *      - in: query
//  *        name: page
//  *        required: false
//  *        schema:
//  *          type: number
//  *          default: 1
//  *        allowReserverd: true
//  *      - in: query
//  *        name: limit
//  *        required: false
//  *        schema:
//  *          type: number
//  *          default: 10
//  *        allowReserverd: true
//  *      - in: query
//  *        name: sortBy
//  *        required: false
//  *        schema:
//  *          type: string
//  *          default: 'createdAt'
//  *        allowReserverd: true
//  *      - in: query
//  *        name: sortOrder
//  *        required: false
//  *        schema:
//  *          type: string
//  *          enum: ['ASC', 'DESC']
//  *          default: 'ASC'
//  *        allowReserverd: true
