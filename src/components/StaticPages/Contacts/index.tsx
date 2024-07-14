import React from 'react';

import styles from '../index.module.scss';

import kievstarLogo from '../../../assets/kievstar-logo.png';
import lifeLogo from '../../../assets/life-logo.png';
import vodafoneLogo from '../../../assets/vodafone-logo.png';

interface ContactsProps {
	lang: string
}

export const Contacts: React.FC<ContactsProps> = ({ lang }) => {
	return <div className={styles['static-page']}>
		<div className='flex items-center'>
			<img src={vodafoneLogo} alt="vodafone-logo"/>
			<span className='ml-2.5 font-bold'>(050) 337 32 05</span>
		</div>
		<div className='flex items-center mt-3'>
			<img src={kievstarLogo} alt="kievstar-logo"/>
			<span className='ml-2.5 font-bold'>(067) 323 44 81</span>
		</div>
		<div className='flex items-center mt-3'>
			<img src={lifeLogo} alt="life-logo"/>
			<span className='ml-2.5 font-bold'>(093) 332 64 71</span>
		</div>
		{lang === 'ua' ? <>
			<h4>Графік роботи кол-центра:</h4>
			<p>Пн — Пт 9:00 — 19:00</p>
			<p>Сб - Нд: 9:00 — 19:00</p>
			<h4>Електрона пошта:</h4>
			<p>luxshina@gmail.com</p>
			<h4>Пункти видачі</h4>
			<p>Київ вул. Березняківська, 11</p>
			<p>Чернігів вул. І.Мазепи (Щорса), 53А</p>
		</> : <>
			<h4>График работы кол-центра:</h4>
			<p>Пн — Пт 9:00 — 19:00</p>
			<p>Сб - Вс: 9:00 — 19:00</p>
			<h4>Електронная почта:</h4>
			<p>luxshina@gmail.com</p>
			<h4>Пункти видачі</h4>
			<p>Киев, ул. Березняковская, 11</p>
			<p>Чернигов, ул. И.Мазепы (Щорса), 53А</p>
		</>}
	</div>
}
