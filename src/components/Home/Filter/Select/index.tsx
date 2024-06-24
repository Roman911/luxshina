import React from 'react';
import classNames from 'classnames';

export const Select = () => {
	const [ show, setShow ] = React.useState(false);

	return <div className="max-w-xs mx-auto">
		<div className="relative">
			<span className="inline-block w-full rounded-md shadow-sm">
				<button onClick={ () => setShow(prev => !prev) } className="relative z-0 w-full py-2 pl-3 pr-10 text-left transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
					<span className="block truncate"></span>
					<input type="search" className="w-full h-full form-control focus:outline-none" placeholder='' />
					<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
							<path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
						</svg>
					</span>
				</button>
			</span>

			<div className={ classNames('absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg', { 'hidden': !show }) }>
				<ul
					className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-60 focus:outline-none sm:text-sm sm:leading-5">
					<li className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9">
						<span className="block font-normal truncate">
							132132132
						</span>
					</li>
					<li className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9">
						<span className="block font-normal truncate">
							12
						</span>
					</li>
					<li className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9">
						<span className="block font-normal truncate">
							23
						</span>
					</li>
					<li className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9">
						<span className="block font-normal truncate">
							45
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
}
