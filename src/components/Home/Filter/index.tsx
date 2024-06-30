import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { useAppTranslation } from '../../../hooks';

import styles from './index.module.scss';
import { Select } from './Select';

import { CloudIcon, SnowIcon, SunIcon } from '../../Lib/Icons';

import type { BaseDataProps } from '../../../models/baseData';
interface FilterProps {
	data: BaseDataProps | undefined
}

export const FilterComponent: React.FC<FilterProps> = ({ data }) => {
	const [ section, setSections ] = React.useState('tyre');
	const t = useAppTranslation();

	const getFilters = () => {
		if (section !== 'tyre') return [];

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

	return <div className='bg-blue-600 flex'>
		<img src={ `/images/${ section }.jpg` } alt=""/>
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
				{getFilters().map(item => {
					return <Select key={ item.name } name={ item.name } label={ t(item.name, true) } options={ item.options } />
				})}
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
				<Link to='/catalog/tyres' className='btn secondary'>
					{t('choose tires')}
				</Link>
			</div>
		</div>
	</div>
}
