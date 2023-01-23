import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const todoApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: [],
    endpoints: (builder) => ({
        getTodos: builder.query<any[], undefined>({
            query: () => `/todos`,
        }),

    }),
});

// Export hooks for usage in functional components
export const { useGetTodosQuery, util: { getRunningQueriesThunk } } = todoApi;

// export endpoints for use in SSR
export const { getTodos } = todoApi.endpoints;