/**
 * ProjectName
 *
 * App
 *
 * Author: Phia Nasol
 *
 */

import React from "react";
import { Text } from "react-native";

import { Env, persistor, store } from "@core";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Text>{Env.get("ENV")}</Text>
      </PersistGate>
    </Provider>
  );
}

export default App;
