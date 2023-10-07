import { Middleware } from "@reduxjs/toolkit";

import { RootState } from "..";
import { axiosClient } from "../../axios";
import { setBadExchangeStatus, setRates } from "./slice";

export const exchangeMiddleware: Middleware =
  (api) => (next) => async (action) => {
    const beforState: RootState = api.getState();
    const response = next(action);
    const afterState: RootState = api.getState();

    const { symbolLeft: symbolLeftB, symbolRight: symbolRightB } =
      beforState.echange;

    const { symbolLeft, symbolRight } = afterState.echange;

    if (
      (symbolLeft !== symbolLeftB || symbolRight !== symbolRightB) &&
      symbolLeft !== undefined &&
      symbolRight !== undefined
    ) {
      let response;

      try {
        response = await axiosClient.get(
          `api/v3/simple/price?ids=${symbolLeft}&vs_currencies=${symbolRight}`
        );
      } catch {
        api.dispatch(setBadExchangeStatus());
      }

      if (response) {
        const rate = response.data[symbolLeft][symbolRight];
        
        if (rate !== undefined) {
          api.dispatch(setRates(rate));
        } else {
          api.dispatch(setBadExchangeStatus());
        }
      }
    }

    return response;
  };
