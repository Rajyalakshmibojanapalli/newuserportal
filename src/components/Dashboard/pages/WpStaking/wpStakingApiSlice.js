// src/redux/api/wpStakingApiSlice.js
import { apiSlice } from "../../../../ApiSliceComponent/jaiMaxApi";

export const wpStakingApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // WP Staking Wallet
    getWpStakingWallet: builder.query({
      query: () => ({
        url: `/wp-staking/wallet`,
        method: "GET",
      }),
    }),

    // Preview company sell
    previewCompanySell: builder.mutation({
      query: (tokensToSell) => ({
        url: `/company-sell/preview`,
        method: "POST",
        body: { tokensToSell },
      }),
    }),

    // Execute company sell
    executeCompanySell: builder.mutation({
      query: (tokensToSell) => ({
        url: `/company-sell/sell`,
        method: "POST",
        body: { tokensToSell },
      }),
    }),
    getCompanySellLogs: builder.query({
      query: ({ page = 1, limit = 10, status } = {}) => {
        const params = new URLSearchParams();
        params.append('page', page);
        params.append('limit', limit);
        if (status) {
          params.append('status', status);
        }
        
        return {
          url: `/company-sell/logs?${params.toString()}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetWpStakingWalletQuery,
  usePreviewCompanySellMutation,
  useExecuteCompanySellMutation,
  useGetCompanySellLogsQuery
} = wpStakingApiSlice;