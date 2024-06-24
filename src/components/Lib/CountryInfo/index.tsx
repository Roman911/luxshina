import React from 'react';

interface CountryInfoProps {
	year: number | null
}

import img from '../../../assets/flags/HU.svg'

export const CountryInfo: React.FC<CountryInfoProps> = ({ year }) => {
	return <div className='flex items-center'>
		<img className='h-6 w-6 rounded-full' src={ img } alt=""/>
		<p className='ml-2.5 text-sm'>Угорщина, { year }</p>
	</div>
}