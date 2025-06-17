import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const Base_url = import.meta.env.VITE_API_BASE_URL;

export const walletApi = createApi({
  reducerPath: 'walletApi',
  baseQuery: fetchBaseQuery({ baseUrl: Base_url }),
  tagTypes: ['Wallet'],
  endpoints: (builder) => ({
    // POST /addTransaction
    addTransaction: builder.mutation({
      query: (transactionData) => ({
        url: '/addTransaction',
        method: 'POST',
        body: transactionData,
      }),
      invalidatesTags: ['Wallet'],
    }),

    // POST /transferBalance
    transferBalance: builder.mutation({
      query: (payload) => ({
        url: '/transferBalance',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['Wallet'],
    }),

    // PUT /updateStatus
    updateTransactionStatus: builder.mutation({
      query: (statusUpdate) => ({
        url: '/updateStatus',
        method: 'PUT',
        body: statusUpdate,
      }),
      invalidatesTags: ['Wallet'],
    }),

    // PUT /updateTransaction
    updateWalletTransaction: builder.mutation({
      query: (transactionUpdate) => ({
        url: '/updateTransaction',
        method: 'PUT',
        body: transactionUpdate,
      }),
      invalidatesTags: ['Wallet'],
    }),

    // GET /transactions
    getTransactions: builder.query({
      query: () => '/transactions',
      providesTags: ['Wallet'],
    }),

    // GET /availableBalance
    getWalletBalance: builder.query({
      query: () => '/availableBalance',
      providesTags: ['Wallet'],
    }),
  }),
});

export const {
  useAddTransactionMutation,
  useTransferBalanceMutation,
  useUpdateTransactionStatusMutation,
  useUpdateWalletTransactionMutation,
  useGetTransactionsQuery,
  useGetWalletBalanceQuery,
} = walletApi;
