import { moduleApi } from '..';

export const extendedApi = moduleApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<null, any>({
      query: () => ({
        url: '/posts',
        method: 'GET',
      }),
    }),
  }),

  overrideExisting: false,
});

export const { useGetPostsQuery } = extendedApi;
