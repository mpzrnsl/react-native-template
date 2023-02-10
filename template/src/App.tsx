/**
 * ProjectName
 *
 * App
 *
 * Author: Phia Nasol
 *
 */

import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View
} from "react-native";

import { Env } from "@core";
import { Colors } from "react-native/Libraries/NewAppScreen";

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white
          }}>
          <Text>{Env.get("ENV")}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
