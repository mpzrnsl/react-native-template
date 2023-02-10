/**
 * ProjectName
 *
 * Navigation
 *
 * Author: Phia Nasol
 *
 */

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "@rneui/themed";

import { useLifecycleLogger } from "@core/hooks";

function Navigation() {
  useLifecycleLogger(Navigation.name);

  const { theme } = useTheme();

  return (
    <NavigationContainer
      theme={{
        colors: {
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.white,
          text: theme.colors.black,
          border: theme.colors.greyOutline,
          notification: theme.colors.error
        },
        dark: theme.mode === "dark"
      }}>
      {/*  Navigators */}
    </NavigationContainer>
  );
}

export default Navigation;
