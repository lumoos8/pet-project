import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ru from "./locales/ru.json";

const supportedLanguages = ["en", "ru"] as const;
type SupportedLanguage = (typeof supportedLanguages)[number];

const savedLanguage = localStorage.getItem("language");
const initialLanguage: SupportedLanguage = supportedLanguages.includes(
  savedLanguage as SupportedLanguage,
)
  ? (savedLanguage as SupportedLanguage)
  : "en";

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  supportedLngs: supportedLanguages,
  interpolation: {
    escapeValue: false,
  },
});

document.documentElement.lang = initialLanguage;

i18n.on("languageChanged", (language) => {
  document.documentElement.lang = language;
  localStorage.setItem("language", language);
});

export default i18n;
