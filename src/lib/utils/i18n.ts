import i18next from 'i18next';
import { translations_en } from '@/locales/translation_en';
import { translations_es } from '@/locales/translation_es';
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
		fallbackLng: 'es',
		interpolation: { escapeValue: false },
		resources: {
			es: {
				translation: translations_es,
			},
			en: {
				translation: translations_en,
			},
		},
		detection: options,
	});

export { i18next };
