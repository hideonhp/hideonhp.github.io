import homeEn from "@/locales/en/home.json";
import homeVi from "@/locales/vi/home.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      home: homeEn,
    },
    vi: {
      home: homeVi,
    },
  },
  fallbackLng: "en",
});
