import { FC } from 'react';

import { Link } from '../../../../../lib';
import { useAppTranslation } from '../../../../../hooks';

import { BusIcon, CargoIcon, CarIcon, MotorcyclesIcon, SpecialEquipmentIcon, SuvIcon } from '../../../../Lib/Icons';

interface CarTireFilterProps {
	closeFilter: () => void
}

export const CarTireFilter: FC<CarTireFilterProps> = ({ closeFilter }) => {
	const t = useAppTranslation();

	return <>
		<div>
			<h6 className='text-gray-500 font-bold uppercase'>За сезоном</h6>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-6 gap-2.5 group'>
				<img src="/images/sun-icon.svg" alt=""/>
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					{ t('summer', true) }
				</span>
			</Link>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-3 gap-2.5 group'>
				<img src="/images/snow-icon.svg" alt=""/>
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					{ t('winter', true) }
				</span>
			</Link>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-3 gap-2.5 group'>
				<img src="/images/cloud-icon.svg" alt=""/>
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					{ t('all season', true) }
				</span>
			</Link>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-8 gap-2.5 group'>
				<img src="/images/spiked-icon.svg" alt=""/>
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					{ t('spiked', true) }
				</span>
			</Link>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-3 gap-2.5 group'>
				<img src="/images/off-road-icon.svg" alt=""/>
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					Off-Road 4x4
				</span>
			</Link>
		</div>
		<div>
			<h6 className='text-gray-500 font-bold uppercase'>
				{ t('by car type') }
			</h6>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-6 gap-2.5 group'>
				<CarIcon className='transition fill-gray-500 group-hover:fill-blue-500' />
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					{ t('light', true) }
				</span>
			</Link>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-3 gap-2.5 group'>
				<SuvIcon className='transition fill-gray-500 stroke-gray-500 group-hover:fill-blue-500 group-hover:stroke-blue-500' />
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					{ t('SUVs', true) }
				</span>
			</Link>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-3 gap-2.5 group'>
				<BusIcon className='transition fill-gray-500 group-hover:fill-blue-500' />
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					{ t('buses', true) }
				</span>
			</Link>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-3 gap-2.5 group'>
				<CargoIcon className='transition fill-gray-500 group-hover:fill-blue-500' />
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					{ t('cargo', true) }
				</span>
			</Link>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-3 gap-2.5 group'>
				<SpecialEquipmentIcon className='transition fill-gray-500 group-hover:fill-blue-500' />
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					{ t('special equipment', true) }
				</span>
			</Link>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='flex items-center mt-3 gap-2.5 group'>
				<MotorcyclesIcon className='transition fill-gray-500 group-hover:fill-blue-500' />
				<span className='transition group-hover:text-blue-500 group-hover:underline'>
					{ t('motorcycles', true) }
				</span>
			</Link>
		</div>
		<div className='mt-6 lg:mt-0'>
			<h6 className='text-gray-500 font-bold uppercase'>
				{t('by brands')}
			</h6>
			<div className='mt-6 mb-6 grid grid-cols-2 gap-y-4 gap-x-2'>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Michelin</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Continental</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Goodyear</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Marshal</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>TOYO</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Matador</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Triangle</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Premiorri</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Powertrac</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Fulda</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Hankook</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='transition hover:text-blue-500 hover:underline'>Laufenn</Link>
			</div>
			<Link to='/catalog/tyres' onClick={ closeFilter } className='text-blue-500 font-bold uppercase hover:underline'>
				{t('all brands', true)}
			</Link>
		</div>
		<div className='mt-6 lg:mt-0'>
			<h6 className='text-gray-500 font-bold uppercase'>
				{t('by diameter')}
			</h6>
			<div className='mt-6 mb-6 grid grid-cols-4 gap-1.5'>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R12
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R13
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R14
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R15
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R16
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R17
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R18
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R19
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R20
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R21
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R22
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R23
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R24
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R17.5
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R19.5
				</Link>
				<Link to='/catalog/tyres' onClick={ closeFilter } className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
					R22.5
				</Link>
			</div>
		</div>
	</>
}
