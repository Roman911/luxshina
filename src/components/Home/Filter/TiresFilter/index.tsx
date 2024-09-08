import { ComponentType, FC, useState } from 'react';
import classNames from 'classnames';

import { useAppTranslation } from '../../../../hooks';
import { MySelect } from '../Select';
import { CloudIcon, SnowIcon, SunIcon } from '../../../Lib/Icons';
import type { FilterProps } from '../../../../models/filterHomePage';

interface IconsMap {
	[key: string]: ComponentType
}

const buttons = [
	{id: 2, icon: 'snow'},
	{id: 1, icon: 'sun'},
	{id: 3, icon: 'cloud'},
];

const icons: IconsMap = {
	snow: SnowIcon,
	sun: SunIcon,
	cloud: CloudIcon,
};

export const TiresFilter: FC<FilterProps> = ({ filters, onChange, onSubmit }) => {
	const [season, setSeason] = useState<null | number>(null);
	const t = useAppTranslation();

	const handleClick = (value: number) => {
		setSeason(value);
		onChange('sezon', value);
	}

	const Button = ({value, icon}: {value: number, icon: string}) => {
		const Icon = icons[icon];

		return <button
			onClick={() => handleClick(value)}
			className={classNames(
				'border h-12 w-12 rounded-full flex items-center justify-center cursor-pointer transition hover:border-white',
				{'border-white': season === value},
				{'border-[#296EA9] md:border-blue-400': season !== value},
			)}>
			<Icon />
		</button>
	}

	return <>
		<div className='grid grid-cols-1 md:grid-cols-3 gap-2.5 md:mt-7'>
			{filters.map(item => {
				return <MySelect
					key={item.name}
					name={item.name}
					label={item.label}
					options={item.options}
					onChange={onChange}
				/>
			})}
		</div>
		<div className='flex flex-col-reverse md:flex-row items-start justify-between mt-7'>
			<div className='flex items-center mt-4 md:mt-0'>
				<h6 className='uppercase md:text-xl font-bold text-white'>Сезон</h6>
				<div className='flex ml-5 gap-x-2.5'>
					{ buttons.map(item => <Button key={item.id} value={item.id} icon={item.icon} />) }
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
