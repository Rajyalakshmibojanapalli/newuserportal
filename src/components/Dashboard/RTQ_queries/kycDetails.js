// src/api/kycApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const Base_url = import.meta.env.VITE_API_BASE_URL
export const kycApi = createApi({
    reducerPath: 'kycApi',
    baseQuery: fetchBaseQuery({ baseUrl: Base_url }),
    tagTypes: ['KYC'],
    endpoints: (builder) => ({
        getKYCByUserId: builder.mutation({
            query: (userId) => ({
                url: '/get-kycdoc',
                method: 'POST',
                body: { userId },
            }),
            providesTags: ['KYC'],
        }),

        saveBusiness: builder.mutation({
            query: (data) => {
                console.log("RTK Query payload:", data);
                return {
                    url: "/kyc-detail",
                    method: 'POST',
                    body: data,
                };
            },
            invalidatesTags: ['KYC'],
        }),

        saveBankDetails: builder.mutation({
            query: (data) => ({
                url: '/bank-details',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['KYC'],
        }),
        saveKYCDocuments: builder.mutation({
            query: (data) => ({
                url: '/kyc-documents',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['KYC'],
        }),
    }),
});
export const {
    useGetKYCByUserIdMutation,
    useSaveBusinessMutation,
    useSaveBankDetailsMutation,
    useSaveKYCDocumentsMutation,
} = kycApi;
