import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en.json';
import translationHU from './locales/hu.json';
import translationES from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    hu: { translation: translationHU },
    es: { translation: translationES },
  },
  lng: 'hu', // Default language
  fallbackLng: 'en', // Fallback language
  interpolation: { escapeValue: false },
});

export default i18n;
