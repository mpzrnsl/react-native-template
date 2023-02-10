/**
 * ProjectName
 *
 * App
 *
 * Author: Phia Nasol
 *
 */

import React, { PropsWithChildren } from "react";
import { Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import ErrorBoundary from "react-native-error-boundary";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView
} from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { Env, Logger, persistor, store } from "@core";
import styles from "@core/styles";

const onErrorHandler = (error: Error, stackTrace: string) => {
  Logger.extend("SYSTEM").error(error, stackTrace);
};

function Root({ children }: PropsWithChildren) {
  return (
    <GestureHandlerRootView style={styles.container}>
      <ErrorBoundary onError={onErrorHandler}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
              <NavigationContainer>{children}</NavigationContainer>
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </GestureHandlerRootView>
  );
}

function App() {
  return (
    <Root>
      <SafeAreaView>
        <Text>{Env.get("ENV")}</Text>
      </SafeAreaView>
    </Root>
  );
}

export default App;
