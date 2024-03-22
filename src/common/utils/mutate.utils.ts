import { ILike } from 'typeorm';

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
  if (query?.name) {
    const val = query.name;
    query.name = ILike(`%${val}%`);
  }
  return { limit, skip, sortBy, sortOrder, page, conditions: query };
};

export const mutateQueryPagination = (query: any) => {
  const page = query?.page || 1;
  const limit = query?.limit || 10;
  const sortBy = query?.sortBy || 'createdAt';
  const sortOrder = query?.sortOrder || 'ASC';
  const skip = (page - 1) * limit;
  delete query['page'];
  delete query['limit'];
  delete query['sortBy'];
  delete query['sortOrder'];
  return { limit, skip, sortBy, sortOrder, page, conditions: query };
};
