import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ICurrency } from "../../types";

import currencies from "../../coins.json";
import { axiosClient } from "../../axios";

export const fetchCurrencies = createAsyncThunk<ICurrency[]>(
  "exchange/load-currencies",
  async () => {
    return currencies as ICurrency[];
  }
);

export const setSymbol = createAction<{
  symbol: string;
  type: "left" | "right";
}>("exchange/set-symbol");
