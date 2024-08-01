import { FC } from 'react';
import classNames from 'classnames';

import { useAppTranslation } from '../../../hooks';
import { CloseIcon } from '../../Lib/Icons';

interface FilterActiveProps {
	className: string
}

const filterActive = [
	'Зимові', 'Шип', 'Galaxy', 'Росава', '215'
];

export const FilterActive: FC<FilterActiveProps> = ({ className }) => {
	const t = useAppTranslation();

	return <div className={ classNames('mb-4 flex-wrap justify-end gap-x-2 gap-y-3 lg:gap-4 text-end bg-blue-50 lg:bg-transparent p-4 lg:p-0', className) }>
		{ filterActive.map((item, index) => {
			return <div key={ index } className='p-1 bg-[#393939] text-white text-sm font-medium rounded-full flex items-center gap-1'>
				<span className='ml-1.5'>{ item }</span>
				<button>
					<CloseIcon className='fill-[#A8AFB6]'/>
				</button>
			</div>
		})}
		<button className='flex items-center gap-2 text-sm font-medium group text-gray-500'>
			{t('reset everything', true)}
			<CloseIcon className='fill-[#B9B9BA] hidden lg:block'/>
		</button>
	</div>
}
