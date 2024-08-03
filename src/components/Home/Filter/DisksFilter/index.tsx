import { FC } from 'react';

import { useAppTranslation } from '../../../../hooks';
import { MySelect } from "../Select";

interface IOption {
	value: number
	label: number | string
	p?: number
}

interface DisksFilterProps {
	filters: {
		label: string
		name: string
		options: IOption[] | undefined
		wide: boolean
	}[]
	onChange: (name: string, value: number | undefined) => void
	onSubmit: () => void
}

export const DisksFilter: FC<DisksFilterProps> = ({ filters, onChange, onSubmit }) => {
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
		<div className='mt-4 md:mt-10'>
			<button onClick={() => onSubmit()} className='btn secondary w-full md:w-72 uppercase'>
				{t('choose disks')}
			</button>
		</div>
	</>
}
