import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5173/" }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => `/movies`,
    }),
    searchMovies: builder.query({
      query: (searchTerm) => `/movies/searched?search=${searchTerm}`,
    }),
  }),
});

export const { useGetAllMoviesQuery, useSearchMoviesQuery } = moviesApi;
