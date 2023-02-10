/**
 * ProjectName
 *
 * Store
 *
 * Author: Phia Nasol
 *
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";

import api from "./api";
import Constants from "./constants";
import Env from "./env";
import reducer from "./reducer";

const persistConfig = {
  key: Constants.PERSIST_KEY,
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(api.middleware),
  devTools: Env.get("ENV") === "development"
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export { persistor, store };

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof store.getState>;
