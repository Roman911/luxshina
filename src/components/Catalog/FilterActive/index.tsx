import { useAppTranslation } from '../../../hooks';

import { CloseIcon } from '../../Lib/Icons';

export const FilterActive = () => {
	const t = useAppTranslation();

	return <div className='mb-4 flex flex-wrap justify-end gap-4 text-end'>
		<div className='p-1 bg-[#393939] text-white text-sm font-medium rounded-full flex items-center gap-1'>
			<span className='ml-1.5'>Зимові</span>
			<button>
				<CloseIcon className='fill-[#A8AFB6]'/>
			</button>
		</div>
		<div className='p-1 bg-[#393939] text-white text-sm font-medium rounded-full flex items-center gap-1'>
			<span className='ml-1.5'>Шип</span>
			<button>
				<CloseIcon className='fill-[#A8AFB6]'/>
			</button>
		</div>
		<div className='p-1 bg-[#393939] text-white text-sm font-medium rounded-full flex items-center gap-1'>
			<span className='ml-1.5'>Galaxy</span>
			<button>
				<CloseIcon className='fill-[#A8AFB6]'/>
			</button>
		</div>
		<div className='p-1 bg-[#393939] text-white text-sm font-medium rounded-full flex items-center gap-1'>
			<span className='ml-1.5'>Росава</span>
			<button>
				<CloseIcon className='fill-[#A8AFB6]'/>
			</button>
		</div>
		<button className='flex items-center gap-2 text-sm font-medium group text-gray-500'>
			{t('reset everything', true)}
			<CloseIcon className='fill-[#B9B9BA]'/>
		</button>
	</div>
}
