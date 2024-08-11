import { FC } from 'react';

interface SelectFromTo {
	name: string
	from: string
	to: string
	title: string
	btnTitle: string
}

export const SelectFromTo: FC<SelectFromTo> = ({ name, from, to, title, btnTitle }) => {
	console.log(name)

	return <div className='mt-5'>
		<div className='text-sm font-bold text-gray-500 uppercase'>{ title }</div>
		<div className='flex gap-2 mt-3'>
			<div
				className='flex h-10 rounded-full mx-auto bg-white p-0.5 mt-4 lg:mt-0 border border-gray-300 w-full lg:max-w-[600px]'>
				<input
					type="text"
					className="w-full flex bg-transparent pl-4 text-[15px] text-gray-500 font-medium outline-0"
					placeholder={ from }
				/>
			</div>
			<div
				className='flex h-10 rounded-full mx-auto bg-white p-0.5 mt-4 lg:mt-0 border border-gray-300 w-full lg:max-w-[600px]'>
				<input
					type="text"
					className="w-full flex bg-transparent pl-4 text-[15px] text-gray-500 font-medium outline-0"
					placeholder={ to }
				/>
			</div>
		</div>
		<button className='btn primary max-w-full uppercase mt-4 mb-4'>{ btnTitle }</button>
	</div>
}
