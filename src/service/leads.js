import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const FileApi = createApi({
  reducerPath: 'filesApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:7778/', // Adjust for production
  }),
  endpoints: (build) => ({
    add: build.mutation({
      query: (file) => ({
        url: `/file`,
        method: 'POST',
        body: file,  // FormData will be passed
      }),
    }),
  }),
});

export const { useAddMutation } = FileApi;
