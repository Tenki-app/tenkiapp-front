import i18next from 'i18next';
import translations_es from '@/locales/es/global.json';
import translations_en from '@/locales/en/global.json';
import translations_es_login from '@/locales/es/login.json';
import translations_en_login from '@/locales/en/login.json';
import languageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const options = {
    order: ['cookie', 'localStorage', 'sessionStorage'],
    lookupLocalStorage: 'lang',
    lookupCookie: 'lang',
    caches: ['localStorage', 'cookie'],
};

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: { escapeValue: false },
        resources: {
            es: {
                global: translations_es,
                login: translations_es_login,
            },
            en: {
                global: translations_en,
                login: translations_en_login,
            },
        },
        detection: options,
    });

export { i18next };
