import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import { isNaN } from "lodash";

import {
  AppKeyboardAvoidingView,
  AppKeyboardDismissedView,
  AppSafeAreaView,
  ExchangeInput,
} from "./components";
import { RootState, setSymbol } from "./store";
import { ExchangeRate } from "./components/molecules";

export const ExchangeApp = () => {
  const dispatch = useDispatch();

  const currentRate = useSelector(
    (state: RootState) => state.echange.currentRate
  );

  const [leftDigit, setLeftDigit] = useState("");
  const [rightDigit, setRightDigit] = useState("");
  const [watchdog, setWatchdog] = useState(true);

  const calculateLeft = () => {
    const value = +leftDigit * +currentRate;
    setRightDigit(isNaN(value) ? "" : `${value}`);
  };

  const calculateRight = (value) => {
    const result = +value / +currentRate;
    setRightDigit(value);
    setLeftDigit(isNaN(result) ? "" : `${result}`);
  };

  useEffect(() => {
    if (watchdog) {
      calculateLeft();
    }
  }, [leftDigit, watchdog]);

  useEffect(() => {
    if (watchdog) {
      calculateLeft();
    } else {
      calculateRight(rightDigit);
    }
  }, [currentRate]);

  return (
    <AppKeyboardAvoidingView behavior="height">
      <AppKeyboardDismissedView>
        <AppSafeAreaView>
          <ExchangeInput
            onChangeText={(value) => setLeftDigit(value)}
            value={leftDigit}
            onSelect={({ id }) =>
              dispatch(setSymbol({ symbol: id, type: "left" }))
            }
          />
          <FontAwesome name="exchange" size={24} color="#ccc" />
          <ExchangeInput
            onChangeText={(value) => calculateRight(value)}
            onFocus={() => setWatchdog(false)}
            onBlur={() => setWatchdog(true)}
            value={rightDigit}
            onSelect={({ symbol }) =>
              dispatch(setSymbol({ symbol, type: "right" }))
            }
          />
          <ExchangeRate />
        </AppSafeAreaView>
      </AppKeyboardDismissedView>
    </AppKeyboardAvoidingView>
  );
};

export default ExchangeApp;
