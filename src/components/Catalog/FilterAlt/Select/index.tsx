import React from 'react';
import classNames from 'classnames';

import { ChevronDownIcon } from '../../../Lib/Icons';

interface SelectProps {
	label: string
	name: string
	variant: 'white' | 'gray'
}

export const Select: React.FC<SelectProps> = ({ label, variant }) => {
	const [ open, setOpen ] = React.useState( false );

	return <div className="relative mt-2">
		<button type="button"
						onClick={() => setOpen(prev => !prev)}
						className={ classNames('relative w-full cursor-default rounded-sm py-3 pl-3.5 pr-10 text-left focus:outline-none', { 'bg-white': variant === 'white', 'bg-zinc-200': variant === 'gray' }) }
						aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
      <span className="flex items-center">
        <span className="block truncate">{ label }</span>
      </span>
			<span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2.5">
        <ChevronDownIcon className={ classNames({ 'stroke-black': variant === 'white', 'stroke-gray-500': variant === 'gray' }) } />
      </span>
		</button>

		<ul
			className={ classNames('absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm', { 'hidden': !open }) }
			tabIndex={-1} role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
			<li className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900" id="listbox-option-0" role="option">
				<div className="inline-flex items-center">
					<label
						className="relative flex cursor-pointer items-center rounded-full p-3"
						htmlFor="ripple-on"
						data-ripple-dark="true"
					>
						<input
							id="ripple-on"
							type="checkbox"
							className="peer relative h-7 w-7 appearance-none cursor-pointer rounded-sm border border-[#A9ACB2] transition-all checked:border-blue-500 checked:bg-blue-500 hover:border-blue-500"
						/>
						<div
							className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white peer-checked:opacity-100">
							<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className="h-3.5 w-3.5 fill-white">
								<path
									d="M5.4447 8.55578L2.33276 5.44494L0.777344 7.00036L5.4447 11.6677L13.2218 3.88953L11.6675 2.33301L5.4447 8.55578Z"
								/>
							</svg>
						</div>
					</label>
					<label
						className="mt-px cursor-pointer select-none font-light"
						htmlFor="ripple-on"
					>
						Ripple Effect On
					</label>
				</div>
			</li>
		</ul>
	</div>
}