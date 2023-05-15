import { moduleApi } from '..';

export const extendedApi = moduleApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<null, any>({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
    }),
  }),

  overrideExisting: false,
});

export const { useGetUsersQuery } = extendedApi;
