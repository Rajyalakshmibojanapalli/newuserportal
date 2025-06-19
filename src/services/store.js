import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../ApiSliceComponent/jaiMaxApi";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
      devTools: true,
})