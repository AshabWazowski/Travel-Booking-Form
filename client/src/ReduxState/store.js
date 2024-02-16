import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./index.js";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

        const reducers = combineReducers({
            authTravel: authSlice,
        })

const persistedReducer = persistReducer(persistConfig, reducers)


const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
})

export default store;