// user/userReport


import { apiSlice } from "../../storeJs/api/JaimaxApi"; 

export const myTeamApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
          userDetails: builder.query({
            query: (queryParams) => ({
              url: `/user/userReport?${queryParams}`,
              method: 'GET', 
            }),
          })
        
    })
})

export const { useUserDetailsQuery } = myTeamApiSlice;
