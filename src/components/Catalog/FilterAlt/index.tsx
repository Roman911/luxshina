import { useAppTranslation } from '../../../hooks/translation.ts';

import { Select } from './Select';

export const FilterAltComponent = () => {
	const t = useAppTranslation();

	return <div className='filter w-64 mr-6'>
		<div className='filter-tabs grid grid-cols-2 gap-2.5 -mb-[1px]'>
			<button className='bg-white text-sm font-bold uppercase py-3.5 rounded-t-sm border border-slate-200 border-b-0'>{t('tires', true)}</button>
			<button className='bg-slate-200 text-gray-500 text-sm font-bold uppercase py-3.5 rounded-t-sm border border-slate-200'>Диски</button>
		</div>
		<div className='px-4 py-7 bg-white border border-gray-200'>
			<div className='flex justify-between'>
				<button className='text-blue-500 font-bold'>{ t('by parameters', true) }</button>
				<button className='text-gray-500 font-bold'>{ t('by car', true) }</button>
			</div>
			<Select variant='gray' name='' label='Ширина' />
			<Select variant='gray' name='' label={ `${ t('profile', true) }/${ t('height') }` } />
		</div>
	</div>
}
