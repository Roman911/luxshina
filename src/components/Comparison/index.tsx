import React from 'react';
import { itemProps } from '../../models/productCard.ts';

interface ComparisonProps {
	data: itemProps[]
}

export const ComparisonComponent: React.FC<ComparisonProps> = ({ data }) => {

	return <div className='flex relative'>
		<div className='w-60'>
			<div>Скинути все</div>
		</div>
		<div className='flex-1 '>
			<div className='flex'>
				{data.map(item => {
					return <div key={ item.group }>
						<div className='w-60 relative m-1'>
							<img src="https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/5558.400x400.jpg" alt=""/>
							<div className='absolute bottom-0 bg-gray-500 rounded-sm h-20 flex items-center w-full'>
								<p className='text-white text-center font-bold'>{item.full_name}</p>
							</div>
						</div>
						<div className='divide-y divide-[#D0D4D9] text-center'>
							<div className='p-2.5'>зимові</div>
							<div className='p-2.5'>175</div>
							<div className='p-2.5'>65</div>
							<div className='p-2.5'>{ item.diameter }</div>
							<div className='p-2.5'>12 (до 63 кг)</div>
							<div className='p-2.5'>A2 (до 10 км/г)</div>
							<div className='p-2.5'>TL Tubeless</div>
							<div className='p-2.5'>RunFlat</div>
							<div className='p-2.5'>США</div>
						</div>
					</div>
				})}
			</div>
		</div>
	</div>
}
