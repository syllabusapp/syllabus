import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';
import {initReactI18next} from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS: 'translation',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    load: 'languageOnly',
    saveMissing: true,
  });

export default i18n;
