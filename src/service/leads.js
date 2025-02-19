import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const FileApi = createApi({
  reducerPath: 'filesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:7778/',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (build) => ({
    signup: build.mutation({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: credentials
      })
    }),

    login: build.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials
      })
    }),

    add: build.mutation({
      query: ({ formData }) => ({
        url: `/add/file`,
        method: 'POST',
        body: formData,
      }),
    }),

    get: build.query({  // ✅ Changed from mutation to query since it's a GET request
      query: () => ({
        url: `/getfile`,
      }),
    }),
  }),
});

export const {
  useAddMutation,
  useGetQuery,  // ✅ Changed from `useGetMutation` to `useGetQuery`
  useLoginMutation,
  useSignupMutation
} = FileApi;
