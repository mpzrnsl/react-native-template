/**
 * ProjectName
 *
 * Logger
 *
 * Author: Phia Nasol
 *
 */

import { InteractionManager } from "react-native";

import FileSystem from "react-native-fs";
import {
  consoleTransport,
  fileAsyncTransport,
  logger
} from "react-native-logs";

import Env from "./env";

const severity = Env.tryGet("LOG_SEVERITY", "info");

const buildTransports = (environment: string) => {
  if (environment === "development") {
    return [consoleTransport, fileAsyncTransport];
  }

  return [fileAsyncTransport];
};

const config = {
  transport: buildTransports(Env.get("ENV")),
  transportOptions: {
    FS: FileSystem,
    colors: {
      debug: "grey",
      info: "greenBright",
      warn: "yellowBright",
      error: "redBright"
    }
  },
  async: true,
  asyncFunc: InteractionManager.runAfterInteractions,
  dateFormat: "utc",
  printLevel: true,
  printDate: true,
  severity
};

export default logger.createLogger<"debug" | "info" | "warn" | "error">(config);
