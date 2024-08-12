import { Config } from './models/config';

export const config: Config = {
	domain: 'luxshina.ua',
	startYear: 2008,
	contacts: {
		phone: [
			{ value: '+380503373205', logo: 'vodafone' },
			{ value: '+380673234481', logo: 'kievstar' },
			{ value: '+380933326471', logo: 'lifecell' },
		],
		freePhone: '0800334257',
		email: 'info@luxshina.ua',
		address: {
			ua: 'Київ вул. Березняківська, 11 \nЧернігів вул. І.Мазепи (Щорса), 53А',
			ru: 'Киев, ул. Березняковская, 11 \nЧернигов, ул. И.Мазепы (Щорса), 53А',
		},
		workSchedule: {
			ua: 'Пн ‒ Пт: з 9:00 до 18:00 \nСб - Нд: з 9:00 до 15:00\n',
			ru: 'Пн ‒ Пт: с 9:00 до 18:00 \nСб - Вс: с 9:00 до 15:00\n',
		},
	},
	social: {
		links: [
			{ link: 'https://t.me', logo: 'telegram' },
			{ link: 'https://www.facebook.com', logo: 'facebook' },
			{ link: 'https://www.viber.com', logo: 'viber' },
		],
	},
}
