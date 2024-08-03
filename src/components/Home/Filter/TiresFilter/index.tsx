import { FC } from 'react';
import { useAppTranslation } from '../../../../hooks';

import { MySelect } from '../Select';
import { CloudIcon, SnowIcon, SunIcon } from '../../../Lib/Icons';

interface IOption {
	value: number
	label: number | string
	p?: number
}

interface TiresFilterProps {
	filters: {
		focusValue?: number | string
		label: string
		name: string
		options: IOption[] | undefined
		wide: boolean
	}[]
	onChange: (name: string, value: number | undefined) => void
	onSubmit: () => void
}

export const TiresFilter: FC<TiresFilterProps> = ({ filters, onChange, onSubmit }) => {
	const t = useAppTranslation();

	return <>
		<div className='grid grid-cols-1 md:grid-cols-3 gap-2.5 md:mt-7'>
			{filters.map(item => {
				return <MySelect
					key={ item.name }
					name={ item.name }
					label={ item.label }
					options={ item.options }
					onChange={ onChange }
				/>
			})}
		</div>
		<div className='flex flex-col-reverse md:flex-row items-start justify-between mt-7'>
			<div className='flex items-center mt-4 md:mt-0'>
				<h6 className='uppercase md:text-xl font-bold text-white'>Сезон</h6>
				<div className='flex ml-5 gap-x-2.5'>
					<div
						className='border border-[#296EA9] md:border-blue-400 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer transition hover:border-white'>
						<SnowIcon/>
					</div>
					<div
						className='border border-[#296EA9] md:border-blue-400 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer transition hover:border-white'>
						<SunIcon/>
					</div>
					<div
						className='border border-[#296EA9] md:border-blue-400 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer transition hover:border-white'>
						<CloudIcon/>
					</div>
				</div>
			</div>
			<button className='text-base md:text-sm font-bold text-white hover:text-blue-300 max-h-max'>
				+ {t('add all')}
			</button>
		</div>
		<div className='mt-4 md:mt-10'>
			<button onClick={() => onSubmit()} className='btn secondary w-full md:w-72 uppercase'>
				{t('choose tires')}
			</button>
		</div>
	</>
}
