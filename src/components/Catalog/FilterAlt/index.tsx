import { FC } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector, useAppTranslation } from '../../../hooks';
import { changeSection, changeSubsection } from '../../../store/reducers/filterSlice';

import { FilterActive } from '../FilterActive';
import { Select } from './Select';
import { CloseIcon } from '../../Lib/Icons';

import { Section, Subsection } from '../../../models/filter';
import type { BaseDataProps } from '../../../models/baseData';

const customTireSeason = [
	{ name: 'летние', name_ua: 'літні'},
	{ name: 'зимние', name_ua: 'зимові'},
	{ name: 'всесезонные', name_ua: 'всесезонні'},
]

interface FilterAltProps {
	data: BaseDataProps | undefined
	isOpenFilter: boolean
	closeFilter: () => void
}

export const FilterAltComponent: FC<FilterAltProps> = ({ data, isOpenFilter, closeFilter }) => {
	const { section, subsection } = useAppSelector(state => state.filterReducer);
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

	const tireSeason = data?.tyre_season.map((i, index) => {
		return {
			...i,
			name: customTireSeason[index].name,
			name_ua: customTireSeason[index].name_ua
		}
	});

	const renderTab = (value: Section) => {
		return <button
			onClick={ () => dispatch(changeSection(value)) }
			className={ classNames('text-sm font-bold uppercase py-3.5 rounded-t-sm border border-slate-200 border-b-0', {
				'bg-white': section === value,
				'bg-slate-200 text-gray-500': section !== value,
			}) }
		>
			{ t(value, true) }
		</button>
	}

	return <div
		className={classNames('fixed lg:static top-0 left-0 right-0 bottom-0 bg-[#070B14]/60 lg:bg-transparent z-10 lg:block', {'hidden': !isOpenFilter }) }>
		<button onClick={ () => closeFilter() } className='absolute top-5 right-5 lg:hidden'>
			<CloseIcon className='fill-[#B9B9BA] w-7 h-7' />
		</button>
		<div className='filter h-screen lg:h-auto w-[calc(100%-70px)] lg:w-64 mr-6 pt-4 lg:pt-0 bg-white lg:bg-transparent'>
			<div className='filter-tabs grid grid-cols-2 gap-2.5 -mb-[1px]'>
				{ renderTab(Section.Tires) }
				{ renderTab(Section.Disks) }
			</div>
			<div className='h-full px-4 py-4 lg:py-7 bg-white border border-gray-200'>
				<FilterActive className='flex lg:hidden' />
				<div className='flex lg:justify-between gap-x-5'>
					<button
						onClick={() => dispatch(changeSubsection(Subsection.ByParams))}
						className={classNames('font-bold uppercase lg:normal-case', {
							'text-blue-500': subsection === 'byParams',
							'text-gray-500': subsection !== 'byParams'
						})}
					>
						{t('by parameters', true)}
					</button>
					<button
						onClick={() => dispatch(changeSubsection(Subsection.ByCars))}
						className={classNames('font-bold uppercase lg:normal-case', {
							'text-blue-500': subsection === 'byCars',
							'text-gray-500': subsection !== 'byCars'
						})}
					>
						{t('by car', true)}
					</button>
				</div>
				{subsection === 'byParams' && <>
					{renderSelect(
						'width',
						t('width', true),
						'gray',
						data?.tyre_width?.map(item => ({value: item.value, label: item.value, p: item.p})),
					)}
					{renderSelect(
						'height',
						t('height', true),
						'gray',
						data?.tyre_height?.map(item => ({value: item.value, label: item.value, p: item.p})),
					)}
					{renderSelect(
						'diameter',
						t('diameter', true),
						'gray',
						data?.tyre_diameter?.map(item => ({value: item.value, label: `R${item.value}`, p: item.p})),
					)}
				</>}
				{subsection === 'byCars' && <>
					{renderSelect(
						'brand',
						t('car brand', true),
						'gray',
						data?.tyre_width?.map(item => ({value: item.value, label: item.value, p: item.p})),
					)}
					{renderSelect(
						'model',
						t('model', true),
						'gray',
						data?.tyre_height?.map(item => ({value: item.value, label: item.value, p: item.p})),
					)}
					{renderSelect(
						'year',
						t('graduation year', true),
						'gray',
						data?.tyre_diameter?.map(item => ({value: item.value, label: `R${item.value}`, p: item.p})),
					)}
					{renderSelect(
						'modification',
						t('modification', true),
						'gray',
						tireSeason?.map(item => ({value: item.id, label: item.name_ua}))
					)}
					<button className='btn secondary w-full mt-4 border'>
						{ t('pick up', true) }
					</button>
				</>}
				{renderSelect(
					'season',
					'Сезон',
					'white',
					tireSeason?.map(item => ({value: item.id, label: item.name_ua}))
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
					data?.manufacture_country?.map(item => ({value: item.id, label: item.name_ua, p: item.p}))
				)}
				{renderSelect(
					'year',
					t('year', true),
					'gray',
					[{label: 2024, value: 2024}, {label: 2023, value: 2023}, {label: 2022, value: 2022}, {
						label: 2021,
						value: 2021
					}]
				)}
			</div>
		</div>
	</div>
}
