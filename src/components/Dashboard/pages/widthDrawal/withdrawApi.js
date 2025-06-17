// src/services/withdrawApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const withdrawApi = createApi({
  reducerPath: 'withdrawApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/', // Change to your backend base URL
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token; // assumes you store JWT token in auth slice
      if (token) headers.set('Authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Withdrawals'],
  endpoints: (builder) => ({
    // POST /WithdrawReq - user requests withdrawal
    requestWithdrawal: builder.mutation({
      query: (body) => ({
        url: 'WithdrawReq',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Withdrawals'],
    }),

    // POST /withrawApproval - admin approves withdrawal (with permission)
    approveWithdrawal: builder.mutation({
      query: (body) => ({
        url: 'withrawApproval',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Withdrawals'],
    }),

    // GET /withdrawList - get all withdrawal requests
    fetchWithdrawList: builder.query({
      query: () => 'withdrawList',
      providesTags: ['Withdrawals'],
    }),

    // GET /withdrawHistory - get withdrawal history for current user
    fetchWithdrawHistory: builder.query({
      query: () => 'withdrawHistory',
      providesTags: ['Withdrawals'],
    }),

    // POST /withdrawCalculate - calculate withdrawal amount or fees
    calculateWithdrawal: builder.mutation({
      query: (body) => ({
        url: 'withdrawCalculate',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useRequestWithdrawalMutation,
  useApproveWithdrawalMutation,
  useFetchWithdrawListQuery,
  useFetchWithdrawHistoryQuery,
  useCalculateWithdrawalMutation,
} = withdrawApi;
