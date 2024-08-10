import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/comments';
const BASE_URL = 'https://66a23c2d967c89168f1f4c3c.mockapi.io';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: builder => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ['Comments'],
    }),
    addComments: builder.mutation({
      query(comment) {
        return {
          url: API_ENDPOINT,
          method: 'POST',
          body: comment,
        };
      },
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const { useGetCommentsQuery, useAddCommentsMutation } = commentApi;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const postApi = createApi({
//   reducerPath: 'postsApi',
//   baseQuery: fetchBaseQuery({ baseUrl: '/' }),
//   tagTypes: ['Posts'],
//   endpoints: (build) => ({
//     getPosts: build.query({
//       query: () => 'posts',
//       // Provides a list of `Posts` by `id`.
//       // If any mutation is executed that `invalidate`s any of these tags, this query will re-run to be always up-to-date.
//       // The `LIST` id is a "virtual id" we just made up to be able to invalidate this query specifically if a new `Posts` element was added.
//       providesTags: (result) =>
//         // is result available?
//         result
//           ? // successful query
//             [
//               ...result.map(({ id }) => ({ type: 'Posts', id })),
//               { type: 'Posts', id: 'LIST' },
//             ]
//           : // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
//             [{ type: 'Posts', id: 'LIST' }],
// }),
//
// getPost: build.query({
//   query: (id) => `post/${id}`,
//   providesTags: (result, error, id) => [{ type: 'Posts', id }],
// }),
// updatePost: build.mutation({
//   query(data) {
//     const { id, ...body } = data
//     return {
//       url: `post/${id}`,
//       method: 'PUT',
//       body,
//     }
//   },
// Invalidates all queries that subscribe to this Post `id` only.
// In this case, `getPost` will be re-run. `getPosts` *might*  rerun, if this id was under its results.
//   invalidatesTags: (result, error, { id }) => [{ type: 'Posts', id }],
// }),
// deletePost: build.mutation({
//   query(id) {
//     return {
//       url: `post/${id}`,
//       method: 'DELETE',
//     }
//   },
// Invalidates all queries that subscribe to this Post `id` only.
//
//     }),
//   }),
// })

// export const {
//   useGetPostsQuery,
//   useAddPostMutation,
//   useGetPostQuery,
//   useUpdatePostMutation,
//   useDeletePostMutation,
// } = postApi
