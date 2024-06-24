import React from 'react';
import classNames from 'classnames';

import { useAppTranslation } from '../../../hooks/translation';

import styles from './index.module.scss';
import img from '../../../assets/tyres.jpg';
import { Select } from './Select';

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
			<div className='grid grid-cols-3'>
				<Select />
				<Select />
				<Select />
				<Select />
				<Select />
				<Select />
			</div>
		</div>
	</div>
}
