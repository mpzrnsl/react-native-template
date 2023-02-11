/**
 * ProjectName
 *
 * App
 *
 * Author: Phia Nasol
 *
 */

import React from "react";

import { ThemeColorScheme } from "@common";
import { ThemeProvider } from "@rneui/themed";
import ErrorBoundary from "react-native-error-boundary";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  initialWindowMetrics,
  SafeAreaProvider
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Logger, persistor, store } from "@core";
import { useLifecycleLogger } from "@core/hooks";
import styles, { theme } from "@core/styles";

import Navigation from "./Navigation";

const onErrorHandler = (error: Error, stackTrace: string) => {
  Logger.extend("SYSTEM").error(error, stackTrace);
};

const App = () => {
  useLifecycleLogger(App.name);

  return (
    <GestureHandlerRootView style={styles.container}>
      <ThemeProvider theme={theme}>
        <ThemeColorScheme>
          <ErrorBoundary onError={onErrorHandler}>
            <Provider store={store}>
              <PersistGate persistor={persistor}>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                  <Navigation />
                </SafeAreaProvider>
              </PersistGate>
            </Provider>
          </ErrorBoundary>
        </ThemeColorScheme>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
