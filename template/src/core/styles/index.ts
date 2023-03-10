/**
 * ProjectName
 *
 * Styles
 *
 * Author:
 * Company:
 *
 *
 */

import { StyleSheet } from "react-native";

export { default as Colors } from "./colors";
export { default as Typography } from "./typography";
export * from "./theme";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: { flexGrow: 1 }
});
