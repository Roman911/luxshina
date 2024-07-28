import React from 'react';
import classNames from 'classnames';

import { ChevronDownIcon } from '../../../Lib/Icons';

interface SelectProps {
	name: string
	label: string
	options: {
		value: number
		label: number | string
		p?: number
	}[] | undefined
}

export const Select: React.FC<SelectProps> = ({ label, options }) => {
	const [ show, setShow ] = React.useState(false);

	return <div className="max-w-full md:max-w-xs md:mx-auto">
		<div className="relative">
			<span className="inline-block w-full rounded-sm">
				<button onClick={ () => setShow(prev => !prev) } className="relative z-0 w-full py-4 pl-4 pr-10 text-left transition duration-150 ease-in-out bg-[#ffffff29] border border-[transparent] rounded-sm cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
					<span className="block truncate"></span>
					<input type="search" className="w-full h-full text-white bg-[transparent] form-control text-lg font-medium focus:outline-none placeholder:text-white" placeholder={ label } />
					<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<ChevronDownIcon className='stroke-white' />
					</span>
				</button>
			</span>

			<div className={ classNames('absolute z-10 w-full mt-1 bg-white rounded-sm', { 'hidden': !show }) }>
				<ul
					className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5">
					{options && options.map(item => {
						return <li
							key={ item.value }
							className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9 hover:cursor-pointer hover:bg-slate-200">
						<span className="block font-normal truncate">
							{ item.label }
						</span>
					</li>})}
				</ul>
			</div>
		</div>
	</div>
}
