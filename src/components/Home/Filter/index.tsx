import React from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppTranslation } from '../../../hooks';
import { changeSection } from '../../../store/reducers/filterSlice';

import styles from './index.module.scss';
import { TyresFilter } from './TyresFilter';
import { DisksFilter } from './DisksFilter';
import { FilterByCar } from '../../../containers/Home/FilterByCar';

import { CarFilterIcon, DiskIcon, TyreIcon } from '../../Lib/Icons';

interface FilterProps {
	section: 'default' | 'tyre' | 'disk' | 'car'
	data: {
		focusValue?: number | string
		label: string
		name: string
		options: {
			label: number | string
			p?: number
			value: number
		}[] | undefined
		wide: boolean
	}[]
}

export const FilterComponent: React.FC<FilterProps> = ({ data, section }) => {
	const dispatch = useAppDispatch();
	const t = useAppTranslation();

	const handleClick = (value: 'default' | 'tyre' | 'disk' | 'car') => {
		if(section === value) {
			dispatch(changeSection('default'))
		} else {
			dispatch(changeSection(value))
		}
	}

	const img = section === 'default' ? 'tyre' : section;

	return <div className='bg-blue-600 lg:flex'>
		<img src={`/images/${img}.jpg`} className='hidden lg:block max-w-sm xl:max-w-full' alt=""/>
		<div className='py-6 px-5 md:px-8 lg:py-16 xl:py-24 2xl:px-28'>
			<h1
				className='text-white text-xl md:text-4xl xl:text-[44px] leading-[54px] font-bold uppercase text-center md:text-left'>{t('selection of tires and wheels')}</h1>
			<div className='mt-2 lg:mt-11 flex flex-col md:flex-row text-blue-300'>
				<div className={classNames(styles.tab, 'w-full md:w-auto md:bg-transparent rounded-2xl', { 'bg-blue-400': section !== 'tyre', 'bg-[#005299]': section === 'tyre' })}>
					<button
						onClick={() => handleClick('tyre')}
						className={classNames(styles.link, 'text-base xl:text-xl font-bold md:mr-1.5 xl:mr-2.5 p-5 md:p-0 w-full md:w-auto relative', {'text-white md:pointer-events-none': section === 'tyre', 'md:text-white': section === 'default' })}>
						<TyreIcon className={ classNames('absolute left-5 inset-1/2 -translate-y-2/4 md:hidden', { 'fill-[#99CFFF]': section !== 'tyre', 'fill-white': section === 'tyre' }) } />
						{t('tires by parameters')}
					</button>
					<div className={classNames('md:hidden px-5 pb-7', {'hidden': section !== 'tyre', 'block': section === 'tyre'})}>
						<TyresFilter filters={ data } />
					</div>
				</div>
				<div className={classNames(styles.tab, 'w-full md:w-auto md:bg-transparent rounded-2xl mt-2.5 md:mt-0', {
					'bg-blue-400': section !== 'disk',
					'bg-[#005299]': section === 'disk'
				})}>
					<button
						onClick={() => handleClick('disk')}
						className={classNames(styles.link, 'text-base xl:text-xl font-bold md:mr-1.5 xl:mr-2.5 p-5 md:p-0 w-full md:w-auto relative', {'text-white md:pointer-events-none': section === 'disk'})}>
						<DiskIcon className={classNames('absolute left-5 inset-1/2 -translate-y-2/4 md:hidden', {
							'fill-[#99CFFF]': section !== 'disk',
							'fill-white': section === 'disk'
						})}/>
						{t('disks by parameters')}
					</button>
					<div
						className={classNames('md:hidden px-5 pb-7', { 'hidden': section !== 'disk', 'block': section === 'disk' })}>
						<DisksFilter filters={ data } />
					</div>
				</div>
				<div className={classNames(styles.tab, 'w-full md:w-auto md:bg-transparent rounded-2xl mt-2.5 md:mt-0', {
					'bg-blue-400': section !== 'car',
					'bg-[#005299]': section === 'car'
				})}>
					<button
						onClick={() => handleClick('car')}
						className={classNames(styles.link, 'text-base xl:text-xl font-bold md:mr-1.5 xl:mr-2.5 p-5 md:p-0 w-full md:w-auto relative', {'text-white md:pointer-events-none': section === 'car'})}>
						<CarFilterIcon className={classNames('absolute left-5 inset-1/2 -translate-y-2/4 md:hidden', {
							'fill-[#99CFFF] stroke-[#99CFFF]': section !== 'car',
							'fill-white stroke-white': section === 'car'
						})}/>
						{t('selection by car')}
					</button>
					<div
						className={classNames('md:hidden px-5 pb-7', {'hidden': section !== 'car', 'block': section === 'car'})}>
						<FilterByCar />
					</div>
				</div>
			</div>
			<div className='hidden md:block'>
				{ (section === 'tyre' || section === 'default') && <TyresFilter filters={data}/> }
				{ section === 'disk' && <DisksFilter filters={ data } /> }
				{ section === 'car' && <FilterByCar /> }
			</div>
		</div>
	</div>
}
