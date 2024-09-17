import { FC } from 'react';
import classNames from 'classnames';

import { useAppSelector, useAppTranslation } from '../../../hooks';
import { Link } from '../../../lib';

import { FilterActive } from '../../../containers/Catalog/FilterActive';
import { Select } from './Select';
import { SelectFromTo } from './SelectFromTo';
import { MySelect } from './SelectToByCar';
import { CloseIcon } from '../../Lib/Icons';
import { Badge } from '../../Lib/';

import { Section, Subsection } from '../../../models/filter';
import type { CarModelProps, BaseDataProps, Options } from '../../../models/baseData';
import { SubmitFloat } from "./SubmitFloat";
import { Language } from "../../../models/language";

const customTireSeason = [
	{ value: '1', name: 'Летние', name_ua: 'Літні'},
	{ value: '3', name: 'Всесезонные', name_ua: 'Всесезонні'},
	{ value: '2', name: 'Зимние', name_ua: 'Зимові'},
];

const typeDisc = [
	{ value: '1', name: 'Стальной', name_ua: 'Сталевий'},
	{ value: '2', name: 'Кованый', name_ua: 'Кований'},
	{ value: '3', name: 'Литой', name_ua: 'Литий'},
];

interface FilterAltProps {
	element: HTMLElement | null
	data: BaseDataProps | undefined
	isOpenFilter: boolean
	closeFilter: () => void
	handleClick: (value: Subsection) => void
	onClick: (value: Section) => void
	onChange: (name: string, value: number | string | undefined | null, element: HTMLElement) => void
	onChangeByCar: (name: string, value: number | string | undefined) => void
	setElement: (value: null) => void

	model?: CarModelProps[]
	modelYear?: number[]
	modelKit?: CarModelProps[]
}

export const FilterAltComponent: FC<FilterAltProps> = (
	{
		element,
		data,
		isOpenFilter,
		closeFilter,
		handleClick,
		onClick,
		onChange,
		onChangeByCar,
		setElement,
		model,
		modelYear,
		modelKit
	}) => {
	const { section, subsection, filter } = useAppSelector(state => state.filterReducer);
	const { filter: filterCar } = useAppSelector(state => state.filterCarReducer);
	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();
	const country = lang === Language.UA ? data?.country : data?.country_ru;

	const renderSelect = (
		name: string,
		label: string,
		variant: 'white' | 'gray',
		options: Array<Options> = [],
		value?: null | number | string,
		valueStudded?: null | number | string,
	) => (
		<div className='relative'>
			<Select
				name={name}
				label={label}
				options={options}
				variant={variant}
				onChange={onChange}
				filterValue={value}
				valueStudded={valueStudded}
			/>
			{ value && <Badge value={ 1 } className='-left-2' />}
		</div>
	);

	const renderTab = (value: Section) => {
		const typeproduct = value === Section.Disks ? '?typeproduct=3' : '';
		const url = `/catalog/${value}${typeproduct}`;

		return (
			<Link
				to={url}
				onClick={() => onClick(value)}
				className={classNames(
					'text-sm font-bold uppercase py-3.5 rounded-t-sm border border-slate-200 border-b-0 text-center',
					{ 'bg-white': section === value, 'bg-slate-200 text-gray-500': section !== value }
				)}
			>
				{ t(value, true) }
			</Link>
		);
	};

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
						onClick={() => handleClick(Subsection.ByParams)}
						className={classNames('font-bold uppercase lg:normal-case', {
							'text-blue-500': subsection === 'byParams',
							'text-gray-500': subsection !== 'byParams'
						})}
					>
						{t('by parameters', true)}
					</button>
					<button
						onClick={() => handleClick(Subsection.ByCars)}
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
						'radius',
						t('diameter', true),
						'gray',
						data?.tyre_diameter?.map(item => ({value: item.value, label: `R${item.value}`, p: item.p})),
						filter?.radius,
					)}
				</>}
				{subsection === 'byCars' && <>
					<div className='mt-2'>
						{<MySelect
							name='brand'
							label={t('car brand', true)}
							options={data?.auto?.map(item => ({value: item.value, label: item.label}))}
							onChange={onChangeByCar}
							defaultValue={filterCar?.brand ? data?.auto?.find(i => i.value === filterCar.brand) : undefined}
						/>}
					</div>
					<div className='mt-2'>
						<MySelect
							name='model'
							label={t('model', true)}
							options={model?.map(item => ({value: item.value, label: item.label}))}
							isDisabled={model?.length === 0}
							onChange={onChangeByCar}
							defaultValue={filterCar?.model ? model?.find(i => i.value === filterCar.model) : undefined}
						/>
					</div>
					<div className='mt-2'>
						<MySelect
							name='year'
							label={t('graduation year', true)}
							options={modelYear?.map(item => ({value: item, label: item}))}
							isDisabled={modelYear?.length === 0}
							onChange={onChangeByCar}
							defaultValue={filterCar?.year ? {value: filterCar?.year, label: filterCar?.year} : undefined}
						/>
					</div>
					<div className='mt-2'>
						<MySelect
							name='modification'
							label={t('modification', true)}
							options={modelKit?.map(item => ({ value: item.value, label: item.label }))}
							isDisabled={modelKit?.length === 0}
							onChange={onChangeByCar}
							defaultValue={filterCar?.modification ? modelKit?.find(i => i.value === filterCar.modification) : undefined}
						/>
					</div>
				</>}
				{section === Section.Battery && <>
					{renderSelect(
						'capacity',
						t('capacity', true),
						'gray',
						[]
					)}
					{renderSelect(
						'capacity',
						'Пусковий струм',
						'gray',
						[]
					)}
					{renderSelect(
						'capacity',
						'Тип електроліту',
						'gray',
						[]
					)}
					{renderSelect(
						'capacity',
						'Тип корпусу',
						'white',
						[]
					)}
				</>}
				{section === Section.Tires && <>
					{renderSelect(
						'sezon',
						'Сезон',
						'white',
						customTireSeason.map(item => ({value: item.value, label: lang === Language.UA ? item.name_ua : item.name})),
						filter?.sezon,
						filter?.only_studded
					)}
					{renderSelect(
						'brand',
						t('brand', true),
						'white',
						data?.brand?.map(item => ({value: item.value, label: item.label})),
						filter?.brand,
					)}
				</>}
				{section === Section.Disks && <>
					{renderSelect(
						'krip',
						t('fasteners', true),
						'white',
						data?.krip?.map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.krip,
					)}
					<SelectFromTo name='et' from='-140' to='500' title={`ET(${t('departure', true)})`} btnTitle={t('to apply')}/>
					<SelectFromTo name='dia' from='46' to='500' title='DIA' btnTitle={t('to apply')}/>
					{renderSelect(
						'typedisk',
						t('type', true),
						'gray',
						typeDisc.map(item => ({value: item.value, label: lang === Language.UA ? item.name_ua : item.name})),
						filter?.typedisk,
					)}
					{renderSelect(
						'colir',
						t('color', true),
						'white',
						data?.colir_abbr?.map(item => ({value: item.value, label: item.value, p: item.p})),
					)}
					{renderSelect(
						'brand_disc',
						t('brand', true),
						'white',
						data?.brand_disc?.map(item => ({value: item.value, label: item.label})),
						filter?.brand_disc,
					)}
				</>}

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
				{section === Section.Battery && <>
					<SelectFromTo name='price' from='0' to='600' title={ `Ширина (мм)` } btnTitle={ t('to apply') }/>
					<SelectFromTo name='price' from='0' to='190' title={ `Висота (мм)` } btnTitle={ t('to apply') }/>
					<SelectFromTo name='price' from='0' to='600' title={ `Довжина (мм)` } btnTitle={ t('to apply') }/>
					{renderSelect(
					'load_index',
					'Напруга',
					'gray',
					[],
					)}
					{renderSelect(
						'load_index',
						'Полюсність',
						'white',
						[],
					)}
				</>}
				{section === Section.Tires && <>
					{renderSelect(
						'load_index',
						t('load index', true),
						'white',
						[],
					)}
					{renderSelect(
						'speed_index',
						t('speed index', true),
						'white',
						[],
					)}
					{renderSelect(
						'homologation',
						t('homologation', true),
						'white',
						[],
					)}
					{renderSelect(
						'strengthening',
						t('strengthening', true),
						'white',
						[],
					)}
					{renderSelect(
						'other',
						t('other', true),
						'white',
						[],
					)}
				</>}
			</div>
		</div>
	</div>
}
