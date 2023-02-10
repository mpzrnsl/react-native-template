/**
 * ProjectName
 *
 * Author:
 *
 */

import "react-native-gesture-handler";

import { AppRegistry } from "react-native";

import { name as appName } from "./app.json";
import App from "./src/App";

import "@core/i18n";

AppRegistry.registerComponent(appName, () => App);
