import { FC, useState } from 'react';
import classNames from 'classnames';

import { useAppDispatch, useAppSelector, useAppTranslation } from '../../../hooks';
import { changeSection, changeSubsection, setParams } from '../../../store/reducers/filterSlice';
import { Link } from '../../../lib';

import { FilterActive } from '../../../containers/Catalog/FilterActive';
import { Select } from './Select';
import { SelectFromTo } from './SelectFromTo';
import { CloseIcon } from '../../Lib/Icons';

import { Section, Subsection } from '../../../models/filter';
import type { BaseDataProps, Options } from '../../../models/baseData';
import { SubmitFloat } from "./SubmitFloat";
import { Language } from "../../../models/language";

const customTireSeason = [
	{ value: 1, name: 'Летние', name_ua: 'Літні'},
	{ value: 3, name: 'Всесезонные', name_ua: 'Всесезонні'},
	{ value: 2, name: 'Зимние', name_ua: 'Зимові'},
];

const typeDisc = [
	{ value: 1, name: 'Стальной', name_ua: 'Сталевий'},
	{ value: 2, name: 'Кованый', name_ua: 'Кований'},
	{ value: 3, name: 'Литой', name_ua: 'Литий'},
];

interface FilterAltProps {
	data: BaseDataProps | undefined
	isOpenFilter: boolean
	closeFilter: () => void
}

export const FilterAltComponent: FC<FilterAltProps> = ({ data, isOpenFilter, closeFilter }) => {
	const { section, subsection, filter } = useAppSelector(state => state.filterReducer);
	const { lang } = useAppSelector(state => state.langReducer);
	const [ element, setElement ] = useState<HTMLElement | null>(null);
	const dispatch = useAppDispatch();
	const t = useAppTranslation();
	const country = lang === Language.UA ? data?.country : data?.country_ru;

	const onChange = (name: string, value: number | string | undefined | null, element: HTMLElement) => {
		setElement(element);
		dispatch(setParams({ [name]: value }));
	}

	const renderSelect = (
		name: string,
		label: string,
		variant: 'white' | 'gray',
		options: Array<Options> = [],
		value?: null | number | string
	) => (
		<Select
			name={name}
			label={label}
			options={options}
			variant={variant}
			onChange={onChange}
			filterValue={value}
		/>
	);

	// const tireSeason = data?.tyre_season.map((i, index) => {
	// 	return {
	// 		...i,
	// 		name: customTireSeason[index].name,
	// 		name_ua: customTireSeason[index].name_ua
	// 	}
	// });

	const renderTab = (value: Section) => {
		return <Link to={ `/catalog/${value}/` }
			onClick={ () => dispatch(changeSection(value)) }
			className={ classNames('text-sm font-bold uppercase py-3.5 rounded-t-sm border border-slate-200 border-b-0 text-center', {
				'bg-white': section === value,
				'bg-slate-200 text-gray-500': section !== value,
			}) }
		>
			{ t(value, true) }
		</Link>
	}

	return <div className={classNames('fixed lg:static top-0 left-0 right-0 bottom-0 bg-[#070B14]/60 lg:bg-transparent z-10 lg:block', {'hidden': !isOpenFilter }) }>
		<button onClick={ () => closeFilter() } className='absolute top-5 right-5 lg:hidden'>
			<CloseIcon className='fill-[#B9B9BA] w-7 h-7' />
		</button>
		<div className='filter h-screen lg:h-auto w-[calc(100%-70px)] lg:w-64 mr-6 pt-4 lg:pt-0 bg-white lg:bg-transparent'>
			{section !== Section.Battery && <div className='filter-tabs grid grid-cols-2 gap-2.5 -mb-[1px]'>
				{renderTab(Section.Tires)}
				{renderTab(Section.Disks)}
			</div>}
			<div className='relative h-full px-4 py-4 lg:py-7 bg-white border border-gray-200'>
				<SubmitFloat element={element} btnTitle={t('to apply', true) } setElement={ setElement } />
				<FilterActive className='flex lg:hidden' />
				{section !== Section.Battery && <div className='flex lg:justify-between gap-x-5'>
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
				</div>}
				{subsection === 'byParams' && section !== Section.Battery && <>
					{renderSelect(
						'width',
						t('width', true),
						'gray',
						data?.tyre_width?.map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.width,
					)}
					{section === Section.Tires && renderSelect(
						'height',
						t('height', true),
						'gray',
						data?.tyre_height?.map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.height,
					)}
					{renderSelect(
						'diameter',
						t('diameter', true),
						'gray',
						data?.tyre_diameter?.map(item => ({value: item.value, label: `R${item.value}`, p: item.p})),
						filter?.diameter,
					)}
				</>}
				{subsection === 'byCars' && <>
					{renderSelect(
						'brand',
						t('car brand', true),
						'gray',
						data?.tyre_width?.map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.brand,
					)}
					{/*{renderSelect(*/}
					{/*	'model',*/}
					{/*	t('model', true),*/}
					{/*	'gray',*/}
					{/*	data?.tyre_height?.map(item => ({value: item.value, label: item.value, p: item.p})),*/}
					{/*)}*/}
					{/*{renderSelect(*/}
					{/*	'year',*/}
					{/*	t('graduation year', true),*/}
					{/*	'gray',*/}
					{/*	data?.tyre_diameter?.map(item => ({value: item.value, label: `R${item.value}`, p: item.p})),*/}
					{/*)}*/}
					{/*{renderSelect(*/}
					{/*	'modification',*/}
					{/*	t('modification', true),*/}
					{/*	'gray',*/}
					{/*	tireSeason?.map(item => ({value: item.id, label: item.name_ua}))*/}
					{/*)}*/}
				</>}
				{/*{section === Section.Battery && <>*/}
				{/*	{renderSelect(*/}
				{/*		'capacity',*/}
				{/*		t('capacity', true),*/}
				{/*		'gray',*/}
				{/*		[]*/}
				{/*	)}*/}
				{/*	{renderSelect(*/}
				{/*		'capacity',*/}
				{/*		'Пусковий струм',*/}
				{/*		'gray',*/}
				{/*		[]*/}
				{/*	)}*/}
				{/*	{renderSelect(*/}
				{/*		'capacity',*/}
				{/*		'Тип електроліту',*/}
				{/*		'gray',*/}
				{/*		[]*/}
				{/*	)}*/}
				{/*	{renderSelect(*/}
				{/*		'capacity',*/}
				{/*		'Тип корпусу',*/}
				{/*		'white',*/}
				{/*		[]*/}
				{/*	)}*/}
				{/*</>}*/}
				{section === Section.Tires && renderSelect(
					'season',
					'Сезон',
					'white',
					customTireSeason.map(item => ({value: item.value, label: lang === Language.UA ? item.name_ua : item.name})),
					filter?.season,
				)}
				{section === Section.Disks && <>
					{renderSelect(
						'bolt_count_pcd',
						t('fasteners', true),
						'white',
						data?.krip?.map(item => ({value: item.value, label: item.value, p: item.p})),
					)}
					<SelectFromTo name='et' from='-140' to='500' title={ `ET(${t('departure', true)})` } btnTitle={ t('to apply') }/>
					<SelectFromTo name='dia' from='46' to='500' title='DIA' btnTitle={ t('to apply') }/>
					{renderSelect(
						'type',
						t('type', true),
						'gray',
						typeDisc.map(item => ({value: item.value, label: lang === Language.UA ? item.name_ua : item.name})),
					)}
					{renderSelect(
						'color',
						t('color', true),
						'white',
						[],
					)}
				</>}
				{renderSelect(
					'brand',
					t('brand', true),
					'white',
					data?.brand?.map(item => ({ value: item.value, label: item.label })),
					filter?.brand,
				)}
				{/*{renderSelect(*/}
				{/*	'model',*/}
				{/*	t('model', true),*/}
				{/*	'gray',*/}
				{/*	[],*/}
				{/*)}*/}
				{section === Section.Tires && renderSelect(
					'country',
					t('country', true),
					'white',
					country?.map(item => ({ value: item.value, label: item.label })),
				)}
				{section === Section.Tires && renderSelect(
					'year',
					t('year', true),
					'gray',
					data?.tyre_year?.map(item => ({ value: item.value, label: item.label })),
				)}
				<SelectFromTo name='price' from='200' to='10000' title={ `${t('price range', true)} (грн)` } btnTitle={ t('to apply') }/>
				{/*{section === Section.Battery && <>*/}
				{/*	<SelectFromTo name='price' from='0' to='600' title={ `Ширина (мм)` } btnTitle={ t('to apply') }/>*/}
				{/*	<SelectFromTo name='price' from='0' to='190' title={ `Висота (мм)` } btnTitle={ t('to apply') }/>*/}
				{/*	<SelectFromTo name='price' from='0' to='600' title={ `Довжина (мм)` } btnTitle={ t('to apply') }/>*/}
				{/*	{renderSelect(*/}
				{/*	'load_index',*/}
				{/*	'Напруга',*/}
				{/*	'gray',*/}
				{/*	[],*/}
				{/*	)}*/}
				{/*	{renderSelect(*/}
				{/*		'load_index',*/}
				{/*		'Полюсність',*/}
				{/*		'white',*/}
				{/*		[],*/}
				{/*	)}*/}
				{/*</>}*/}
				{/*{section === Section.Tires && <>*/}
				{/*	{renderSelect(*/}
				{/*		'load_index',*/}
				{/*		t('load index', true),*/}
				{/*		'white',*/}
				{/*		[],*/}
				{/*	)}*/}
				{/*	{renderSelect(*/}
				{/*		'speed_index',*/}
				{/*		t('speed index', true),*/}
				{/*		'white',*/}
				{/*		[],*/}
				{/*	)}*/}
				{/*	{renderSelect(*/}
				{/*		'homologation',*/}
				{/*		t('homologation', true),*/}
				{/*		'white',*/}
				{/*		[],*/}
				{/*	)}*/}
				{/*	{renderSelect(*/}
				{/*		'strengthening',*/}
				{/*		t('strengthening', true),*/}
				{/*		'white',*/}
				{/*		[],*/}
				{/*	)}*/}
				{/*	{renderSelect(*/}
				{/*		'other',*/}
				{/*		t('other', true),*/}
				{/*		'white',*/}
				{/*		[],*/}
				{/*	)}*/}
				{/*</>}*/}
			</div>
		</div>
	</div>
}
