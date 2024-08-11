import { Link } from '../../../../../lib/Links';
import { useAppTranslation } from '../../../../../hooks';

export const CarDiskFilter = () => {
	const t = useAppTranslation();

	return <>
		<div>
			<h6 className='text-gray-500 font-bold uppercase'>{ t('by disk type') }</h6>
			<Link to='/catalog/tyres' className='block mt-6 transition hover:text-blue-500 hover:underline'>
				{ t('cast', true) }
			</Link>
			<Link to='/catalog/tyres' className='block mt-3 transition hover:text-blue-500 hover:underline'>
				{ t('steel', true) }
			</Link>
			<Link to='/catalog/tyres' className='block mt-3 transition hover:text-blue-500 hover:underline'>
				{ t('forged', true) }
			</Link>
		</div>
		<div>
			<h6 className='text-gray-500 font-bold uppercase'>
			{t('by brands')}
			</h6>
			<div className='mt-6 mb-6 grid grid-cols-2 gap-y-4 gap-x-2'>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Alutec</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Angel</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Allante</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Disla</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>GT</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>JH</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>JT</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Kosei</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Marcello</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Rial</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Replica</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Ronal</Link>
			</div>
			<Link to='/catalog/tyres' className='text-blue-500 font-bold uppercase hover:underline'>
				{t('all brands', true)}
			</Link>
		</div>
		<div className='mt-6 lg:mt-0'>
			<h6 className='text-gray-500 font-bold uppercase'>
				{t('by car brands')}
			</h6>
			<div className='mt-6 mb-6 grid grid-cols-2 gap-y-4 gap-x-2'>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Audi</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>BMW</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Chevrolet</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Citroen</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Ford</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Honda</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Hyundai</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Kia</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Lexus</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Mazda</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Mercedes</Link>
				<Link to='/catalog/tyres' className='transition hover:text-blue-500 hover:underline'>Mitsubishi</Link>
			</div>
			<Link to='/catalog/tyres' className='text-blue-500 font-bold uppercase hover:underline'>
				{t('all car brands', true)}
			</Link>
		</div>
		<div className='mt-6 lg:mt-0'>
			<div>
				<h6 className='text-gray-500 font-bold uppercase'>
					{t('by diameter')}
				</h6>
				<div className='mt-6 mb-6 grid grid-cols-4 gap-1.5'>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R13
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R14
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R15
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R16
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R17
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R18
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R19
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R20
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R21
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R22
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R23
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R24
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R17.5
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R19.5
					</Link>
					<Link to='/catalog/tyres'
								className='w-12 lg:w-14 h-10 text-sm lg:text-base flex items-center justify-center font-medium border border-[#DCDEE0] rounded-md transition hover:bg-slate-200'>
						R22.5
					</Link>
				</div>
			</div>
		</div>
	</>
}
