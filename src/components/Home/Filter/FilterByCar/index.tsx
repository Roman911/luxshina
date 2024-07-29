import React from 'react';
import { Link } from 'react-router-dom';

import { useAppTranslation } from '../../../../hooks';
import { Select } from '../Select';

interface FilterByCarProps {
	filters: {
		label: string
		name: string
		options: never[]
	}[]
}

export const FilterByCarComponents: React.FC<FilterByCarProps> = ({ filters }) => {
	const t = useAppTranslation();

	return <>
		<div className='grid grid-cols-1 md:grid-cols-2 gap-2.5 md:mt-7'>
			{filters.map(item => {
				return <Select key={item.name} name={item.name} label={item.label} options={item.options}/>
			})}
		</div>
		<div className='mt-4 md:mt-10 flex gap-4 flex-col md:flex-row'>
			<Link to='/catalog/tyres' className='btn secondary w-full md:w-56 uppercase'>
				{t('choose tires')}
			</Link>
			<Link to='/catalog/disk' className='btn secondary w-full md:w-56 uppercase'>
				{t('choose disks')}
			</Link>
		</div>
	</>
}
