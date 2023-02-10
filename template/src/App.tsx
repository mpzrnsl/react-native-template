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

import { Env, Logger, persistor, store } from "@core";
import ErrorBoundary from "react-native-error-boundary";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const onErrorHandler = (error: Error, stackTrace: string) => {
  Logger.extend("SYSTEM").error(error, stackTrace);
};

function Root({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary onError={onErrorHandler}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

function App() {
  return (
    <Root>
      <Text>{Env.get("ENV")}</Text>
    </Root>
  );
}

export default App;
