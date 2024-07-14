import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { useAppTranslation } from '../../../../hooks';
import styles from './index.module.scss';

import { links } from './links.ts';

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
				{ links.map((item, index) => {
					return <Link key={ index } to={ item.link } className={styles.link} >{ t(item.title) }</Link>
				}) }
			</nav>
		</div>
	</div>
}