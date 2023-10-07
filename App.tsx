import React, { useEffect } from "react";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";

import { Provider } from "react-redux";

import ExchangeApp from "./src";
import { fetchCurrencies, store } from "./src/store";
import { theme } from "./src/theme";

export default function App() {
  const scheme = useColorScheme();

  useEffect(() => {
    Promise.all([store.dispatch(fetchCurrencies())])
      .then
      /**
       * Hide splash screen here, but who cares?
       */
      ();
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={scheme === "light" ? theme.default : theme.dark}>
        <ExchangeApp />
      </ThemeProvider>
    </Provider>
  );
}
