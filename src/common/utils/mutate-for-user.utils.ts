export const mutateQueryForUser = (query: any) => {
  if (query?.ids) {
    query.ids = typeof query.ids === 'object' ? [...query.ids] : [query.ids];
  }
  if (query?.subs) {
    query.subs =
      typeof query.subs === 'object' ? [...query.subs] : [query.subs];
  }
  return query;
};
