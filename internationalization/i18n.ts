import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en_US } from './locales/en/en_US';
import { zh_TW } from './locales/zh/zh_TW';

const resources = {
  us: {
    translation: en_US,
  },
  tw: {
    translation: zh_TW,
  },
};

export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).init({
  fallbackLng: 'us',
  lng: 'us',
  resources,
});

export default i18n;
