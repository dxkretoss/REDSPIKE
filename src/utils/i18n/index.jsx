import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en/en.json";
import pt from "./locales/pt/pt.json";

const savedLang = localStorage.getItem("lang");

const resources = {
    en: { translation: en },
    pt: { translation: pt },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        lng: savedLang || navigator.language.split("-")[0], // ✅ priority localStorage
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
