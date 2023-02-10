/**
 * ProjectName
 *
 * i18n
 *
 * Author: Phia Nasol
 *
 */
import "./polyfills";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { Locales } from "@core/assets";
import Env from "@core/env";

import languageDetector from "./languageDetector";

export const defaultNS = "translation";

export const resources = {
  en: Locales.en
} as const;

const i18n = i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: Env.tryGet("ENV", "development") === "development",
    fallbackLng: "en",
    supportedLngs: ["en", "en-US"],
    ns: ["translation"],
    resources
  });

export default i18n;
