import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IExcangeState } from "./models";
import { fetchCurrencies, setSymbol } from "./thunk";

const initialState: IExcangeState = {};

export const exchangeSlice = createSlice({
  name: "exchange",
  initialState,
  reducers: {
    setRates: (state, { payload }: PayloadAction<number>) => {
      state.currentRate = payload;
      state.currentRateLoadingStatus = 'fulfilled';
    },
    setBadExchangeStatus: (state) => {
      state.currentRate = undefined;
      state.currentRateLoadingStatus = 'rejected';
    }
  },
  extraReducers(builder) {
    builder
      .addCase(setSymbol, (state, { payload: { symbol, type } }) => {
        if (type === "left") {
          state.symbolLeft = symbol;
        } else if (type === "right") {
          state.symbolRight = symbol;
        }
      })
      .addCase(fetchCurrencies.pending, (state) => {
        state.currenciesLoadingStatus = "pending";
      })
      .addCase(fetchCurrencies.fulfilled, (state, { payload }) => {
        state.currenciesLoadingStatus = "fulfilled";
        state.currencies = payload;
      });
  },
});

export default exchangeSlice.reducer;
export const { setRates, setBadExchangeStatus } = exchangeSlice.actions;
