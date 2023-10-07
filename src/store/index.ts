import { combineReducers, configureStore } from "@reduxjs/toolkit";

import exchangeReducer from "./exchange/slice";
import { exchangeMiddleware } from "./exchange/middleware";
export { fetchCurrencies, setSymbol } from "./exchange/thunk";

export const rootReducer = combineReducers({
  echange: exchangeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exchangeMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
