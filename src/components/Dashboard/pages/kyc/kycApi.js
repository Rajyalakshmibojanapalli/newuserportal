// src/services/kycApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const kycApi = createApi({
  reducerPath: 'kycApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/', // Change to your backend base URL
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token; // assuming token stored in auth slice
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['KYC'],
  endpoints: (builder) => ({
    // POST /submitKyc - user submits KYC
    submitKyc: builder.mutation({
      query: (body) => ({
        url: 'submitKyc',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['KYC'],
    }),

    // GET /Kyc_list - get list of KYCs
    getKycList: builder.query({
      query: () => 'Kyc_list',
      providesTags: ['KYC'],
    }),

    // GET /KycStatus - get current user's KYC status
    getKycStatus: builder.query({
      query: () => 'KycStatus',
      providesTags: ['KYC'],
    }),

    // POST /KycStatusUpdate - admin updates KYC status
    updateKycStatus: builder.mutation({
      query: (body) => ({
        url: 'KycStatusUpdate',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['KYC'],
    }),
  }),
});

export const {
  useSubmitKycMutation,
  useGetKycListQuery,
  useGetKycStatusQuery,
  useUpdateKycStatusMutation,
} = kycApi;
