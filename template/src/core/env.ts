/**
 * ProjectName
 *
 * Env
 *
 * Author: Phia Nasol
 *
 */

import Config from "react-native-config";

interface IEnv {
  keys(): string[];

  hasKey(key: string): boolean;

  get(key: string, fallback?: string): string;
}

const Env: IEnv = {
  keys: function () {
    return Object.keys(Config);
  },

  hasKey: function (key) {
    return this.keys().includes(key);
  },

  get: function (key, fallback) {
    if (!this.hasKey(key)) {
      throw new Error(`The environment variables does not contain key: ${key}`);
    }

    const value = Config[key];

    if (!value) {
      if (!fallback) {
        throw new Error(
          `The environment variable fallback for key: ${key} is not defined.`
        );
      }

      return fallback;
    }

    return value;
  }
};

export default Env;
