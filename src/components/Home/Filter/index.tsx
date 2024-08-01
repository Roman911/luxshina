import { FC, useState } from 'react';

import { useAppDispatch, useAppTranslation } from '../../../hooks';
import { changeSection } from '../../../store/reducers/filterSlice';

import { Tab } from './Tab';
import { TiresFilter } from './TiresFilter';
import { DisksFilter } from './DisksFilter';
import { FilterByCar } from '../../../containers/Home/FilterByCar';

import { Section } from '../../../models/filter';

interface FilterProps {
	section: Section
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

export const FilterComponent: FC<FilterProps> = ({ data, section }) => {
	const [isOpen, setOpen] = useState(false);
	const dispatch = useAppDispatch();
	const t = useAppTranslation();

	const handleClick = (value: Section) => {
		const newOpenState = !(section === value && isOpen);
		setOpen(newOpenState);
		dispatch(changeSection(newOpenState ? value : Section.Tires));
	};

	const renderFilter = () => {
		switch(section) {
			case Section.Disks:
				return <DisksFilter filters={data}/>;
			case Section.Car:
				return <FilterByCar/>;
			default:
				return <TiresFilter filters={data}/>;
		}
	};

	return <div className="bg-blue-600 lg:flex">
		<img src={ `/images/${section}.jpg` } className="hidden lg:block max-w-sm xl:max-w-full" alt=""/>
		<div className="py-6 px-5 md:px-8 lg:py-16 xl:py-24 2xl:px-28 max-w-screen-lg w-full">
			<h1 className="text-white text-xl md:text-4xl xl:text-[44px] leading-[54px] font-bold uppercase text-center md:text-left">
				{ t('selection of tires and wheels') }
			</h1>
			<div className="mt-2 lg:mt-11 flex flex-col md:flex-row text-blue-300">
				<Tab name={ Section.Tires } section={ section } isOpen={ isOpen } handleClick={ handleClick } label={ t('tires by parameters') }>
					<TiresFilter filters={ data }/>
				</Tab>
				<Tab name={ Section.Disks } section={ section } isOpen={ isOpen } handleClick={ handleClick } label={ t('disks by parameters') }>
					<DisksFilter filters={ data }/>
				</Tab>
				<Tab name={ Section.Car } section={ section } isOpen={ isOpen } handleClick={ handleClick } label={ t('selection by car') }>
					<FilterByCar/>
				</Tab>
			</div>
			<div className="hidden md:block">{ renderFilter() }</div>
		</div>
	</div>
}
