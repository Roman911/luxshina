import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
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
import { SubmitFloat } from './SubmitFloat';
import { Language } from "../../../models/language";
import { appointmentCargo, appointmentIndustrial, customTireSeason, typeDisc } from './customParamForSelector';
import type { CarModelProps, BaseDataProps, Options, ManufModels } from '../../../models/baseData';
import type { AkumProps } from '../../../models/akumData';

interface FilterAltProps {
	element: HTMLElement | null
	data: BaseDataProps | undefined
	dataAkum: AkumProps | undefined
	isOpenFilter: boolean
	closeFilter: () => void
	handleClick: (value: Subsection) => void
	onClick: (value: Section) => void
	onChange: (name: string, value: number | string | undefined | null, element: HTMLElement) => void
	onChangeByCar: (name: string, value: number | string | undefined) => void
	setElement: (value: null) => void
	manufModels: ManufModels[] | undefined
	model?: CarModelProps[]
	modelYear?: number[]
	modelKit?: CarModelProps[]
}

export const FilterAltComponent: FC<FilterAltProps> = (
	{
		element,
		data,
		dataAkum,
		isOpenFilter,
		closeFilter,
		handleClick,
		onClick,
		onChange,
		onChangeByCar,
		setElement,
		manufModels,
		model,
		modelYear,
		modelKit
	}) => {
	const [searchParams] = useSearchParams();
	const { section, subsection, filter } = useAppSelector(state => state.filterReducer);
	const { filter: filterCar } = useAppSelector(state => state.filterCarReducer);
	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();
	const country = lang === Language.UA ? data?.country : data?.country_ru;
	const vehicleType = searchParams.get('vehicle_type');
	const cargoTypes = ['3', '4', '5', '6'];
	const industrialTypes = ['9', '10', '11'];

	const appointmentCargoShow = vehicleType && cargoTypes.includes(vehicleType);
	const appointmentIndustrialShow = vehicleType && industrialTypes.includes(vehicleType);

	const renderSelect = (
		name: string,
		label: string,
		variant: 'white' | 'gray',
		options: Array<Options> = [],
		value?: null | number | string,
		search?: boolean,
		valueStudded?: null | number | string,
	) => (
		<div className='relative'>
			<Select
				name={ name }
				label={ label }
				options={ options }
				variant={ variant }
				onChange={ onChange }
				filterValue={ value }
				search={ search }
				valueStudded={ valueStudded }
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
					{section === Section.Tires && <>
						{renderSelect(
							'width',
							t('width', true),
							'gray',
							data?.tyre_width?.map(item => ({value: item.value, label: item.value, p: item.p})),
							filter?.width,
							true,
						)}
						{section === Section.Tires && renderSelect(
							'height',
							t('height', true),
							'gray',
							data?.tyre_height?.map(item => ({value: item.value, label: item.value, p: item.p})),
							filter?.height,
							true,
						)}
						{renderSelect(
							'radius',
							t('diameter', true),
							'gray',
							data?.tyre_diameter?.map(item => ({value: item.value, label: `R${item.value}`, p: item.p})),
							filter?.radius,
							true,
						)}
					</>}
					{section === Section.Disks && <>
						{renderSelect(
							'width',
							t('width', true),
							'gray',
							data?.disc_width?.map(item => ({value: item.value, label: item.value, p: item.p})),
							filter?.width,
							true,
						)}
						{renderSelect(
							'radius',
							t('diameter', true),
							'gray',
							data?.disc_diameter?.map(item => ({value: item.value, label: `R${item.value}`, p: item.p})),
							filter?.radius,
							true,
						)}
					</>}
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
						'jemnist',
						t('capacity', true),
						'gray',
						dataAkum?.jemnist.map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.jemnist,
						true,
					)}
					{renderSelect(
						'puskovii_strum',
						t('starting current', true),
						'gray',
						dataAkum?.['puskovii-strum'].map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.puskovii_strum,
						true,
					)}
					{renderSelect(
						'tip_elektrolitu',
						t('type of electrolyte', true),
						'gray',
						dataAkum?.['tip-elektrolitu'].map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.tip_elektrolitu,
					)}
					{renderSelect(
						'tip_korpusu',
						t('body type', true),
						'white',
						dataAkum?.['tip-korpusu'].map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.tip_korpusu,
					)}
					{renderSelect(
						'brand',
						t('brand', true),
						'white',
						dataAkum?.brand_akum?.map(item => ({value: item.value, label: item.label})),
						filter?.brand,
						true,
					)}
				</>}
				{section === Section.Tires && <>
					{renderSelect(
						'sezon',
						'Сезон',
						'white',
						customTireSeason.map(item => ({value: item.value, label: lang === Language.UA ? item.name_ua : item.name})),
						filter?.sezon,
						false,
						filter?.only_studded
					)}
					{appointmentCargoShow && renderSelect(
						'vehicle_type',
						t('appointment', true),
						'white',
						appointmentCargo.map(item => ({value: item.value, label: lang === Language.UA ? item.name_ua : item.name})),
						filter?.vehicle_type,
					)}
					{appointmentIndustrialShow && renderSelect(
						'vehicle_type',
						t('appointment', true),
						'white',
						appointmentIndustrial.map(item => ({value: item.value, label: lang === Language.UA ? item.name_ua : item.name})),
						filter?.vehicle_type,
					)}
					{renderSelect(
						'brand',
						t('brand', true),
						'white',
						data?.brand?.map(item => ({value: item.value, label: item.label})),
						filter?.brand,
						true,
					)}
				</>}
				{section === Section.Disks && <>
					{renderSelect(
						'krepeg',
						t('fasteners', true),
						'white',
						data?.krip?.map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.krepeg,
						true,
					)}
					<SelectFromTo name='et' nameMin='etMin' nameMax='etMax' minus={ true } from={ -140 } to={ 500 } title={`ET(${t('departure', true)})`} btnTitle={t('to apply')}/>
					<SelectFromTo name='dia' nameMin='diaMin' nameMax='diaMax' from={ 46 } to={ 500 } title='DIA' btnTitle={t('to apply')}/>
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
						filter?.colir,
						true,
					)}
					{renderSelect(
						'brand_disc',
						t('brand', true),
						'white',
						data?.brand_disc?.map(item => ({value: item.value, label: item.label})),
						filter?.brand_disc,
						true,
					)}
				</>}
				{manufModels && manufModels.length > 0 && renderSelect(
					'model_id',
					t('model', true),
					'gray',
					manufModels?.map(item => ({value: item.value, label: item.label})),
					filter?.model_id,
					true,
				)}
				{section === Section.Tires && renderSelect(
					'country',
					t('country', true),
					'white',
					country?.map(item => ({ value: item.value, label: item.label })),
					filter?.country,
					true,
				)}
				{section === Section.Tires && renderSelect(
					'year',
					t('year', true),
					'gray',
					data?.tyre_year?.map(item => ({ value: item.value, label: item.label })),
					filter?.year,
				)}
				<SelectFromTo name='price' nameMin='minPrice' nameMax='maxPrice' from={ 200 } to={ 10000 } title={ `${t('price range', true)} (грн)` } btnTitle={ t('to apply') }/>
				{section === Section.Battery && <>
					<SelectFromTo name='sirina' nameMin='minShirina' nameMax='maxShirina' from={ 0 } to={ 600 } title={ `Ширина (см)` } btnTitle={ t('to apply') }/>
					<SelectFromTo name='visota' nameMin='minVisota' nameMax='maxVisota' from={ 0 } to={ 190 } title={ `Висота (см)` } btnTitle={ t('to apply') }/>
					<SelectFromTo name='dovzina' nameMin='minDovzina' nameMax='maxDovzina' from={ 0 } to={ 600 } title={ `Довжина (см)` } btnTitle={ t('to apply') }/>
					{renderSelect(
					'napruga',
					t('high-voltage', true),
					'gray',
						dataAkum?.napruga.map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.napruga,
					)}
					{renderSelect(
						'poliarnist',
						t('polarity', true),
						'white',
						dataAkum?.poliarnist.map(item => ({value: item.value, label: item.value, p: item.p})),
						filter?.poliarnist,
					)}
				</>}
				{section === Section.Tires && <>
					{renderSelect(
						'load',
						t('load index', true),
						'white',
						data?.load.map(item => ({ value: item.value, label: item.value })),
						filter?.load,
						true,
					)}
					{renderSelect(
						'speed',
						t('speed index', true),
						'white',
						data?.speed.map(item => ({ value: item.value, label: item.value })),
						filter?.speed,
						true,
					)}
					{renderSelect(
						'omolog',
						t('homologation', true),
						'white',
						data?.omolog.map(item => ({ value: item.value, label: item.value })),
						filter?.omolog,
						true,
					)}
					{/*{renderSelect(*/}
					{/*	'other',*/}
					{/*	t('other', true),*/}
					{/*	'white',*/}
					{/*	[],*/}
					{/*)}*/}
				</>}
			</div>
		</div>
	</div>
};
