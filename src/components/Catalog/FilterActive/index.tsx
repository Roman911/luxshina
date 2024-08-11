import { FC } from 'react';
import classNames from 'classnames';

import { useAppTranslation } from '../../../hooks';
import { CloseIcon } from '../../Lib/Icons';

import { IFilter } from '../../../models/filter';

interface FilterActiveProps {
	className: string
	filter: IFilter
	clearParam: (name: string) => void
}

export const FilterActiveComponent: FC<FilterActiveProps> = ({ className, filter, clearParam }) => {
	const t = useAppTranslation();

	const renderItem = (name: string, label: string) => {
		return <div className='p-1 bg-[#393939] text-white text-sm font-medium rounded-full flex items-center gap-1'>
			<span className='ml-1.5'>{ label }</span>
			<button onClick={() => clearParam(name)}>
				<CloseIcon className='fill-[#A8AFB6]'/>
			</button>
		</div>
	}

	return <div
		className={classNames('mb-4 flex-wrap justify-end gap-x-2 gap-y-3 lg:gap-4 text-end bg-blue-50 lg:bg-transparent p-4 lg:p-0', className)}>
		{ filter.width && renderItem('width', filter.width) }
		{ filter.height && renderItem('height', filter.height) }
		{ filter.diameter && renderItem('diameter', filter.diameter) }
		<button className='flex items-center gap-2 text-sm font-medium group text-gray-500'>
			{t('reset everything', true)}
			<CloseIcon className='fill-[#B9B9BA] hidden lg:block'/>
		</button>
	</div>
}
