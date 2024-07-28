import React from 'react';
//import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { useAppTranslation } from '../../../../hooks';
import { Link } from '../../../Links';
import { Contacts } from '../Contacts';

import { links } from './links.ts';

interface TopLineProps {
	lang: string
	changedAppLang: (lang: string) => void
}

export const TopLine:React.FC<TopLineProps> = ({ lang, changedAppLang }) => {
	const t = useAppTranslation();

	return <div className='bg-black text-white'>
		<div className='container mx-auto flex justify-between py-2 px-4'>
			<Contacts className='lg:hidden' />
			<div className='flex items-center'>
				<div className='divide-x text-gray-500 divide-gray-500'>
					<button
						onClick={() => changedAppLang('ua')}
						className={ classNames('font-bold text-sm 2xl:text-base pr-1.5 2xl:pr-3 active:text-white', {'text-white pointer-events-none': lang === 'ua'} ) }
					>
						UA
					</button>
					<button
						onClick={() => changedAppLang('ru')}
						className={ classNames('font-bold text-sm 2xl:text-base pl-1.5 2xl:px-3 active:text-white', {'text-white pointer-events-none': lang === 'ru'} ) }
					>
						RU
					</button>
				</div>
				<div className='ml-2 2xl:ml-10 text-sm 2xl:text-base hidden lg:block'>
					<span className='font-bold'>Пн — Пт:</span>
					<span className='ml-1.5 2xl:ml-2.5'>9:00 — 19:00</span>
					<span className='font-bold ml-3 2xl:ml-7'>Сб - { t('sun', true) }:</span>
					<span className='ml-1.5 2xl:ml-2.5'>9:00 — 15:00</span>
				</div>
			</div>
			<nav className='gap-2 2xl:gap-5 items-center hidden lg:flex'>
				{ links.map((item, index) => {
					return <Link key={ index } to={ item.link } className='text-xs 2xl:text-sm font-medium uppercase'>{ t(item.title) }</Link>
				}) }
			</nav>
		</div>
	</div>
}