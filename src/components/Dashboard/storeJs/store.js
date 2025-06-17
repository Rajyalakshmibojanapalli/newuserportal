// import { configureStore } from '@reduxjs/toolkit';
// import { kycApi } from '../RTQ_queries/kycDetails';
// export const store = configureStore({
//   reducer: {
//     [kycApi.reducerPath]: kycApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(kycApi.middleware),
// });




import { configureStore } from '@reduxjs/toolkit';
import { kycApi } from '../RTQ_queries/kycDetails';
import { withdrawApi } from '../RTQ_queries/withdrawDetails';
import { supportApi } from '../RTQ_queries/supportApi';
import { walletApi } from '../RTQ_queries/walletApi';  // <-- wallet API slice
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [kycApi.reducerPath]: kycApi.reducer,
    [withdrawApi.reducerPath]: withdrawApi.reducer,
    [supportApi.reducerPath]: supportApi.reducer,
    [walletApi.reducerPath]: walletApi.reducer,  // add wallet reducer here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      kycApi.middleware,
      withdrawApi.middleware,
      supportApi.middleware,
      walletApi.middleware  // add wallet middleware here
    ),
});

 