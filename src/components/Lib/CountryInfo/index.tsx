import React from 'react';

interface CountryInfoProps {
	country: string | null
	countryCode: string | null
	year: number | null
}

export const CountryInfo: React.FC<CountryInfoProps> = ({ country, countryCode, year }) => {
	return <div className='flex items-center'>
		{countryCode &&
			<img className='h-6 w-6 rounded-full' src={`/images/flags/${countryCode}.svg`} alt=""/>}
		<p className='ml-2.5 text-sm'>{country && country}, {year && year}</p>
	</div>
}
