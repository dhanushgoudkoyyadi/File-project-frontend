import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { FileApi } from '../service/leads';

export const store = configureStore({
  reducer: {
    [FileApi.reducerPath]: FileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(FileApi.middleware),
});

setupListeners(store.dispatch);
