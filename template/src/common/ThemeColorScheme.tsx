/**
 * ProjectName
 *
 * Theme Color Scheme
 *
 * Author: Phia Nasol
 *
 */

import React, { PropsWithChildren, useEffect } from "react";
import { useColorScheme } from "react-native";

import { ThemeMode, useThemeMode } from "@rneui/themed";

const ThemeColorScheme: React.FC<PropsWithChildren> = ({ children }) => {
  const colorScheme = useColorScheme();

  const { setMode } = useThemeMode();

  useEffect(() => {
    setMode(colorScheme as ThemeMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colorScheme]);

  return <>{children}</>;
};

export default ThemeColorScheme;
