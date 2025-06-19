
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const supportApi = createApi({
  reducerPath: 'supportApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/', // Change to your backend URL
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.token; // assumes JWT token stored in auth slice
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Support', 'Tickets', 'Comments', 'Categories'],
  endpoints: (builder) => ({
    // Category
    createCategory: builder.mutation({
      query: (body) => ({
        url: '/category_create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Categories'],
    }),

    getCategories: builder.query({
      query: () => 'category_get',
      providesTags: ['Categories'],
    }),

    updateCategory: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `category_update/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Categories'],
    }),

    deleteCategory: builder.mutation({
      query: ({ id }) => ({
        url: `category_delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Categories'],
    }),

    // Tickets
    getTicketsList: builder.query({
      query: () => 'get_tickets_list',
      providesTags: ['Tickets'],
    }),

    updateTicket: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `update_ticket/${id}`,
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Tickets'],
    }),

    createTicket: builder.mutation({
      query: (body) => ({
        url: 'create_ticket',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Tickets'],
    }),

    // Comments
    createComment: builder.mutation({
      query: (body) => ({
        url: 'comment_create',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Comments'],
    }),

    getCommentsByTicket: builder.query({
      query: (ticket_id) => `comment_get/${ticket_id}`,
      providesTags: ['Comments'],
    }),

    // Ticket info
    getTicketInfo: builder.query({
      query: () => 'ticket_info',
      providesTags: ['Tickets'],
    }),

    // Enquiry (no auth)
    sendEnquiry: builder.mutation({
      query: (body) => ({
        url: 'enquiry',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useCreateCategoryMutation,
  useGetCategoriesQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetTicketsListQuery,
  useUpdateTicketMutation,
  useCreateTicketMutation,
  useCreateCommentMutation,
  useGetCommentsByTicketQuery,
  useGetTicketInfoQuery,
  useSendEnquiryMutation,
} = supportApi;
