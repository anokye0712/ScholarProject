import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en';
import frTranslation from './locales/fr';
import esTranslation from './locales/es';
import ptTranslation from './locales/pt';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      es: { translation: esTranslation },
      pt: { translation: ptTranslation }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;