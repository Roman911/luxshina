import { FC } from 'react';
import classNames from 'classnames';

import { useAppTranslation } from '../../../hooks';
import { CloseIcon } from '../../Lib/Icons';
import type { BaseDataProps } from '../../../models/baseData';

interface IFilter {
	[key: string]: string
}

interface FilterActiveProps {
	data: BaseDataProps | undefined
	className: string
	searchParams: IFilter
	clearParam: (name: string) => void
	clearAllParams: () => void
}

export const FilterActiveComponent: FC<FilterActiveProps> = ({ data, className, searchParams, clearParam, clearAllParams }) => {
	const t = useAppTranslation();

	const renderItem = (name: string, label: string | null) => {
		return <div key={ name } className='p-1 bg-[#393939] text-white text-sm font-medium rounded-full flex items-center gap-1'>
			<span className='ml-1.5'>{ label }</span>
			<button onClick={() => clearParam(name)}>
				<CloseIcon className='fill-[#A8AFB6]'/>
			</button>
		</div>
	}

	return <div
		className={
		classNames('mb-4 flex-wrap justify-end gap-x-2 gap-y-3 lg:gap-4 text-end bg-blue-50 lg:bg-transparent p-4 lg:p-0', className)}
	>
		{Object.keys(searchParams).filter(item => searchParams[item]).map(item => {
			let label = searchParams[item as keyof IFilter];
			if(item === 'brand') {
				const brand = data?.brand?.find(i => i.value === +searchParams[item as keyof IFilter]);
				label = brand ? brand.label : '';
			}
			return renderItem(item, label)
		})}
		{Object.keys(searchParams).length !== 0 && <button onClick={() => clearAllParams()} className='flex items-center gap-2 text-sm font-medium group text-gray-500'>
			{t('reset everything', true)}
			<CloseIcon className='fill-[#B9B9BA] hidden lg:block'/>
		</button>}
	</div>
}
