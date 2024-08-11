import { configureStore } from '@reduxjs/toolkit';
import { advertsReducer } from './adverts/slice.js';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const adverstPeristConfig = {
  key: 'adverst',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    adverts: persistReducer(adverstPeristConfig, advertsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
