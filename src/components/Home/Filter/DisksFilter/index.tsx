import { FC } from 'react';
import { Link } from "react-router-dom";

import { useAppTranslation } from '../../../../hooks';
import { Select } from "../Select";

interface DisksFilterProps {
	filters: {
		label: string
		name: string
		options: {
			label: number | string
			p?: number
			value: number
		}[] | undefined
		wide: boolean
	}[]
}

export const DisksFilter: FC<DisksFilterProps> = ({ filters }) => {
	const t = useAppTranslation();

	return <>
		<div className='grid grid-cols-1 md:grid-cols-3 gap-2.5 md:mt-7'>
			{filters.map(item => {
				return <Select key={ item.name } name={ item.name } label={ item.label } options={ item.options }/>
			})}
		</div>
		<div className='mt-4 md:mt-10'>
			<Link to='/catalog/disks' className='btn secondary w-full md:w-72 uppercase'>
				{t('choose disks')}
			</Link>
		</div>
	</>
}
