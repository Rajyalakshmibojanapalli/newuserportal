import { configureStore } from '@reduxjs/toolkit';
import { kycApi } from '../RTQ_queries/kycDetails';
export const store = configureStore({
  reducer: {
    [kycApi.reducerPath]: kycApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(kycApi.middleware),
});



