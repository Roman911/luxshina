import React from 'react';
import classNames from 'classnames';

import { useAppTranslation } from '../../../../hooks';
import styles from './index.module.scss';

interface TopLineProps {
	lang: string
	changedAppLang: (lang: string) => void
}

export const TopLine:React.FC<TopLineProps> = ({ lang, changedAppLang }) => {
	const t = useAppTranslation();

	return <div className={ styles['top-line'] }>
		<div className='container mx-auto flex justify-between py-2 px-4'>
			<div className='flex'>
				<div className={ styles['languages_wrap'] }>
					<button
						onClick={() => changedAppLang('ua')}
						className={ classNames(styles['languages_btn'], {'text-white pointer-events-none': lang === 'ua'} ) }
					>
						UA
					</button>
					<button
						onClick={() => changedAppLang('ru')}
						className={ classNames(styles['languages_btn'], {'text-white pointer-events-none': lang === 'ru'} ) }
					>
						RU
					</button>
				</div>
				<div className={ styles['work_schedule'] }>
					<span className='font-bold'>Пн — Пт:</span>
					<span className='ml-2.5'>9:00 — 19:00</span>
					<span className='font-bold ml-7'>Сб - { t('sun', true) }:</span>
					<span className='ml-2.5'>9:00 — 15:00</span>
				</div>
			</div>
			<nav className='flex gap-5'>
				<a className={styles.link} href="#">Доставка</a>
				<a className={styles.link} href="#">Оплата</a>
				<a className={styles.link} href="#">Контакти</a>
				<a className={styles.link} href="#">Гарантія та повернення</a>
				<a className={styles.link} href="#">Публічна оферта</a>
				<a className={styles.link} href="#">Про нас</a>
			</nav>
		</div>
	</div>
}