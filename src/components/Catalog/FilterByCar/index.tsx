import { FC, useState } from 'react';
import classNames from "classnames";

import { useAppSelector, useAppTranslation } from '../../../hooks';

import { TypeCarLinks } from '../../Lib/TypeCarLinks';
import { ChevronDownIcon, FilterIcon } from '../../Lib/Icons';

interface FilterByCarProps {
	openFilter: () => void
	onSubmit: () => void
}

export const FilterByCar: FC<FilterByCarProps> = ({ openFilter }) => {
	const [ openSort, setOpenSort ] = useState(false);
	const { subsection } = useAppSelector(state => state.filterReducer);
	const t = useAppTranslation();

	return <div className='flex justify-between lg:justify-end items-center lg:items-start mb-4'>
		{subsection === 'byParams' && <div className='hidden lg:flex gap-x-3 xl:gap-x-6 mr-3 xl:mr-8'>
			<TypeCarLinks section='catalog' />
		</div>}
		<button
			onClick={ () => openFilter() }
			className='lg:hidden flex items-center font-bold gap-x-2.5'
		>
			<FilterIcon />
			{ t('filters', true) }
		</button>
		<div className="relative inline-block text-left">
			<button type="button" onClick={() => setOpenSort(prev => !prev)}
							className="w-56 xl:w-64 h-11 p-3 flex items-center justify-between bg-white text-xs uppercase font-bold border border-gray-200 rounded-sm"
							id="menu-button" aria-expanded="true" aria-haspopup="true">
				<div>{t('sorting', true)}</div>
				<div className={classNames('transition-transform', {'rotate-180': openSort})}>
					<ChevronDownIcon/>
				</div>
			</button>
			<div
				className={classNames('absolute right-0 z-10 w-56 xl:w-64 origin-top-right border border-gray-200 bg-white shadow-lg p-3 xl:p-5 rounded-sm', {hidden: !openSort})}
				tabIndex={-1}>
				<div className="py-1 text-sm xl:text-base">
					<div className='flex items-center'>
						{t('by price', true)}
					</div>
					<div className='flex items-center mt-3'>
						{t('by popularity', true)}
					</div>
					<div className='flex items-center mt-3'>
						{t('by number of offers', true)}
					</div>
				</div>
			</div>
		</div>
	</div>
}
