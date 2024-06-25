import React from 'react';
import classNames from 'classnames';

import { useAppTranslation } from '../../../hooks/translation';

import styles from './index.module.scss';
import img from '../../../assets/tyres.jpg';
import { Select } from './Select';

import { CloudIcon, SnowIcon, SunIcon } from '../../Lib/Icons';

export const FilterComponent = () => {
	const [ section, setSections ] = React.useState('tyre');
	const t = useAppTranslation();

	return <div className='bg-blue-600 flex'>
		<img src={ img } alt=""/>
		<div className='py-24 px-28'>
			<h1 className='text-white text-[44px] leading-[54px] font-bold uppercase'>{t('selection of tires and wheels')}</h1>
			<div className='mt-11'>
				<button
					onClick={() => setSections('tyre')}
					className={ classNames(styles.link, { 'text-white pointer-events-none': section === 'tyre' })}>
					{ t('tires by parameters') }
				</button>
				<button
					onClick={() => setSections('disk')}
					className={ classNames(styles.link, { 'text-white pointer-events-none': section === 'disk' })}>
					{ t('disks by parameters') }
				</button>
				<button
					onClick={() => setSections('car')}
					className={ classNames(styles.link, { 'text-white pointer-events-none': section === 'car' })}>
					{ t('selection by car') }
				</button>
			</div>
			<div className='grid grid-cols-3 gap-2.5 mt-7'>
				<Select name={ t('width', true) } />
				<Select name={ t('height', true) } />
				<Select name={ t('diameter', true) } />
				<Select name={ t('brand', true) } />
				<Select name={ t('country', true) } />
				<Select name={ t('year', true) } />
			</div>
			<div className='flex justify-between mt-7'>
				<div className='flex items-center'>
					<h6 className='uppercase text-xl font-bold text-white'>Сезон</h6>
					<div className='flex ml-5 gap-x-2.5'>
						<div
							className='border border-blue-400 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer transition hover:border-white'>
							<SnowIcon/>
						</div>
						<div
							className='border border-blue-400 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer transition hover:border-white'>
							<SunIcon/>
						</div>
						<div
							className='border border-blue-400 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer transition hover:border-white'>
							<CloudIcon/>
						</div>
					</div>
				</div>
				<button className='text-sm font-bold text-white hover:text-blue-300 max-h-max'>
					+ {t('add all')}
				</button>
			</div>
			<div className='mt-10'>
				<button className='btn secondary'>
					{t('choose tires')}
				</button>
			</div>
		</div>
	</div>
}
