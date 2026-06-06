import { apiSlice } from "../../../../ApiSliceComponent/jaiMaxApi";

export const weeklyBonusApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWeekInfo: builder.query({
      query: () => ({
        url: `/mine-jmc/week-mine-referrals`,
        method: "GET",
      }),
    }),

  }),
});

export const { 
  useGetWeekInfoQuery, 
} = weeklyBonusApiSlice;