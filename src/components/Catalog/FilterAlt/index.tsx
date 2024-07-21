import React from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector, useAppTranslation } from '../../../hooks';
import { changeSubsection } from '../../../store/reducers/filterSlice';

import { Select } from './Select';

import type { BaseDataProps } from '../../../models/baseData';
interface FilterAltProps {
	data: BaseDataProps | undefined
}

export const FilterAltComponent: React.FC<FilterAltProps> = ({ data }) => {
	const { subsection } = useAppSelector(state => state.filterReducer);
	const dispatch = useAppDispatch();
	const t = useAppTranslation();

	const renderSelect = (
		name: string,
		label: string,
		variant: 'white' | 'gray',
		options: Array<{ id?: number, value: number; label: number | string; p?: number, name?: string, name_ua?: string }> = []
	) => (
		<Select
			name={name}
			label={label}
			options={options}
			variant={variant}
		/>
	);

	const customTyreSeason = [
		{ name: 'летние', name_ua: 'літні'},
		{ name: 'зимние', name_ua: 'зимові'},
		{ name: 'всесезонные', name_ua: 'всесезонні'},
	]

	const tyreSeason = data?.tyre_season.map((i, index) => {
		return {
			...i,
			name: customTyreSeason[index].name,
			name_ua: customTyreSeason[index].name_ua
		}
	});

	return <div className='filter w-64 mr-6'>
		<div className='filter-tabs grid grid-cols-2 gap-2.5 -mb-[1px]'>
			<button className='bg-white text-sm font-bold uppercase py-3.5 rounded-t-sm border border-slate-200 border-b-0'>{t('tires', true)}</button>
			<button className='bg-slate-200 text-gray-500 text-sm font-bold uppercase py-3.5 rounded-t-sm border border-slate-200'>Диски</button>
		</div>
		<div className='px-4 py-7 bg-white border border-gray-200'>
			<div className='flex justify-between'>
				<button
					onClick={() => dispatch(changeSubsection('byParams'))}
					className={classNames('font-bold', {'text-blue-500': subsection === 'byParams', 'text-gray-500': subsection !== 'byParams'})}
				>
					{ t('by parameters', true) }
				</button>
				<button
					onClick={() => dispatch(changeSubsection('byCars'))}
					className={classNames('font-bold', {'text-blue-500': subsection === 'byCars', 'text-gray-500': subsection !== 'byCars'})}
				>
					{ t('by car', true) }
				</button>
			</div>
			{subsection === 'byParams' && <>
				{renderSelect(
					'width',
					t('width', true),
					'gray',
					data?.tyre_width?.map(item => ({ value: item.value, label: item.value, p: item.p })),
				)}
				{renderSelect(
					'height',
					t('height', true),
					'gray',
					data?.tyre_height?.map(item => ({ value: item.value, label: item.value, p: item.p })),
				)}
				{renderSelect(
					'diameter',
					t('diameter', true),
					'gray',
					data?.tyre_diameter?.map(item => ({ value: item.value, label: `R${item.value}`, p: item.p })),
				)}
			</>}
			{subsection === 'byCars' && <>
				{renderSelect(
					'brandCar',
					t('brand', true),
					'gray',
					data?.tyre_width?.map(item => ({ value: item.value, label: item.value, p: item.p })),
				)}
				{renderSelect(
					'model',
					t('model', true),
					'gray',
					data?.tyre_height?.map(item => ({ value: item.value, label: item.value, p: item.p })),
				)}
				{renderSelect(
					'year',
					t('year', true),
					'gray',
					data?.tyre_diameter?.map(item => ({ value: item.value, label: `R${item.value}`, p: item.p })),
				)}
				{renderSelect(
					'complete_set',
					'complete set',
					'gray',
					tyreSeason?.map(item => ({ value: item.id, label: item.name_ua }))
				)}
			</>}
			{renderSelect(
				'season',
				'Сезон',
				'white',
				tyreSeason?.map(item => ({ value: item.id, label: item.name_ua }))
			)}
			{renderSelect(
				'brand',
				t('brand', true),
				'white',
				[],
			)}
			{renderSelect(
				'country',
				t('country', true),
				'white',
				data?.manufacture_country?.map(item => ({ value: item.id, label: item.name_ua, p: item.p }))
			)}
			{renderSelect(
				'year',
				t('year', true),
				'gray',
				[{ label: 2024, value: 2024 }, { label: 2023, value: 2023 }, { label: 2022, value: 2022 }, { label: 2021, value: 2021 }]
			)}
		</div>
	</div>
}
