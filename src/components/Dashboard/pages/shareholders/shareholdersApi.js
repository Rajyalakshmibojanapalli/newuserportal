import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const Base_url = import.meta.env.VITE_API_BASE_URL;

export const shareholdersApi = createApi({
  reducerPath: 'shareholdersApi',
  baseQuery: fetchBaseQuery({ baseUrl: Base_url }),
  tagTypes: ['Shareholders'],
  endpoints: (builder) => ({
    // GET /get-shareholders (admin only)
    getAllUserWithTheirEligibility: builder.query({
      query: () => '/get-shareholders',
      providesTags: ['Shareholders'],
    }),

    // POST /update-shareholder-profile
    uploadProfileImage: builder.mutation({
      query: (formData) => ({
        url: '/update-shareholder-profile',
        method: 'POST',
        body: formData,  // assume FormData for file upload
        // If you need to send multipart/form-data headers, usually fetchBaseQuery auto handles it if FormData is used.
      }),
      invalidatesTags: ['Shareholders'],
    }),

    // POST /user-eligibilty-shareholder
    getUserEligibility: builder.mutation({
      query: (payload) => ({
        url: '/user-eligibilty-shareholder',
        method: 'POST',
        body: payload,
      }),
      providesTags: ['Shareholders'],
    }),

    // GET /all-authoraized-shareholders
    getAllAuthorizedShareholders: builder.query({
      query: () => '/all-authoraized-shareholders',
      providesTags: ['Shareholders'],
    }),
  }),
});

export const {
  useGetAllUserWithTheirEligibilityQuery,
  useUploadProfileImageMutation,
  useGetUserEligibilityMutation,
  useGetAllAuthorizedShareholdersQuery,
} = shareholdersApi;
