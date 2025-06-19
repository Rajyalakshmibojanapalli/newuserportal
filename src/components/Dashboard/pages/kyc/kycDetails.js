import { apiSlice } from "../../../../ApiSliceComponent/jaiMaxApi";

export const kycApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    kycadd: builder.mutation({
      query: (data) => {
        return {
          url: "/kyc/submitKyc",
          method: "POST",
          body: data,
        };
      },
    }),
    getkycDetails: builder.query({
      query: (id) => {
        return {
          url: `kyc/KycStatus`,
          method: "GET",
        };
      },
    }),
    getKycData: builder.mutation({
      query: (data) => ({
        url: `digilocker/getKycData`,
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useKycaddMutation,
  useGetkycDetailsQuery,
  useGetKycDataMutation,
} = kycApiSlice;
