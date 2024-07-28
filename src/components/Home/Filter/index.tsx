import React from 'react';
import classNames from 'classnames';

import { useAppTranslation } from '../../../hooks';

import styles from './index.module.scss';
import { TyresFilter } from './TyresFilter';

import { CarFilterIcon, DiskIcon, TyreIcon } from '../../Lib/Icons';

import type { BaseDataProps } from '../../../models/baseData';
interface FilterProps {
	data: BaseDataProps | undefined
}

export const FilterComponent: React.FC<FilterProps> = ({ data }) => {
	const [ section, setSections ] = React.useState('default');
	const t = useAppTranslation();

	const getFilters = () => {
		const filterConfigs = [
			{
				label: t('width', true),
				name: 'width',
				focusValue: 175,
				options: data?.tyre_width?.map(item => ({ value: item.value, label: item.value, p: item.p }))
			},
			{
				label: t('height', true),
				name: 'height',
				focusValue: 45,
				options: data?.tyre_height?.map(item => ({ value: item.value, label: item.value, p: item.p }))
			},
			{
				label: t('diameter', true),
				name: 'diameter',
				focusValue: `R${14}`,
				options: data?.tyre_diameter?.map(item => ({ value: item.value, label: `R${item.value}`, p: item.p }))
			},
			{
				label: t('brand', true),
				name: 'brand',
				options: []
			},
			{
				label: t('country', true),
				name: 'country',
				options: data?.manufacture_country?.map(item => ({ value: item.id, label: item.name_ua, p: item.p }))
			},
			{
				label: t('year', true),
				name: 'year',
				options: [{ label: 2024, value: 2024 }, { label: 2023, value: 2023 }, { label: 2022, value: 2022 }, { label: 2021, value: 2021 }]
			},
		];

		return filterConfigs.map(config => ({
			...config,
			wide: true
		}));
	};

	const img = section === 'default' ? 'tyre' : section;

	return <div className='bg-blue-600 lg:flex'>
		<img src={`/images/${img}.jpg`} className='hidden lg:block max-w-sm xl:max-w-full' alt=""/>
		<div className='py-6 px-5 md:px-8 lg:py-16 xl:py-24 2xl:px-28'>
			<h1
				className='text-white text-xl md:text-4xl xl:text-[44px] leading-[54px] font-bold uppercase text-center md:text-left'>{t('selection of tires and wheels')}</h1>
			<div className='mt-2 lg:mt-11 flex flex-col md:flex-row'>
				<div className={classNames(styles.tab, 'w-full md:w-auto md:bg-transparent rounded-2xl', { 'bg-blue-400': section !== 'tyre', 'bg-[#005299]': section === 'tyre' })}>
					<button
						onClick={() => setSections('tyre')}
						className={classNames(styles.link, 'p-5 md:p-0 w-full md:w-auto relative', {'text-white pointer-events-none': section === 'tyre'})}>
						<TyreIcon className={ classNames('absolute left-5 inset-1/2 -translate-y-2/4 md:hidden', { 'fill-[#99CFFF]': section !== 'tyre', 'fill-white': section === 'tyre' }) } />
						{t('tires by parameters')}
					</button>
					<div className={classNames('md:hidden px-5 pb-7', {'hidden': section !== 'tyre', 'block': section === 'tyre'})}>
						<TyresFilter filters={ getFilters() } />
					</div>
				</div>
				<div className={classNames(styles.tab, 'w-full md:w-auto md:bg-transparent rounded-2xl mt-2.5 md:mt-0', { 'bg-blue-400': section !== 'disk', 'bg-[#005299]': section === 'disk' })}>
					<button
						onClick={() => setSections('disk')}
						className={classNames(styles.link, 'p-5 md:p-0 w-full md:w-auto relative', {'text-white pointer-events-none': section === 'disk'})}>
						<DiskIcon className={ classNames('absolute left-5 inset-1/2 -translate-y-2/4 md:hidden', { 'fill-[#99CFFF]': section !== 'disk', 'fill-white': section === 'disk' }) } />
						{t('disks by parameters')}
					</button>
				</div>
				<div className={classNames(styles.tab, 'w-full md:w-auto md:bg-transparent rounded-2xl mt-2.5 md:mt-0', { 'bg-blue-400': section !== 'car', 'bg-[#005299]': section === 'car' })}>
					<button
						onClick={() => setSections('car')}
						className={classNames(styles.link, 'p-5 md:p-0 w-full md:w-auto relative', {'text-white pointer-events-none': section === 'car'})}>
						<CarFilterIcon className={ classNames('absolute left-5 inset-1/2 -translate-y-2/4 md:hidden', { 'fill-[#99CFFF] stroke-[#99CFFF]': section !== 'car', 'fill-white stroke-white': section === 'car' }) } />
						{t('selection by car')}
					</button>
				</div>
			</div>
			<div className='hidden md:block'>
				{ (section === 'tyre' || section === 'default') && <TyresFilter filters={ getFilters() } /> }
			</div>
		</div>
	</div>
}
