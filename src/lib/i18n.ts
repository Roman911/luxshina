import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import ua from '../locales/ua.json';
import ru from '../locales/ru.json';

const resources = {
	ua: {
		translation: ua,
	},
	ru: {
		translation: ru,
	},
}

const lang = localStorage.getItem('lang');

i18n
	.use(initReactI18next)
	.init({
		lng: lang && JSON.parse(lang),
		resources,
		fallbackLng: 'ua',
	}).then(r => r);

export default i18n