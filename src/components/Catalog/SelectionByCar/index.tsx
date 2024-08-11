import { useAppSelector } from '../../../hooks';

import { Subsection } from '../../../models/filter';

export const SelectionByCar = () => {
	const { subsection } = useAppSelector(state => state.filterReducer);

	if(subsection === Subsection.ByParams) return null

	return null;

	// return <div className='mb-5 border-y py-4'>
	// 	<div className='text-sm text-gray-500'>Ваш авто:</div>
	// 	<div className='font-bold mt-2'>Alfa Romeo 146 1.4 i T. Spark (2000)</div>
	// 	<h6 className='text-sm text-gray-500 mt-4'>Заводські</h6>
	// 	<div className='flex gap-2 text-sm font-bold mt-2'>
	// 		<div>175/65 R14</div>
	// 		<div className='text-blue-500 cursor-pointer'>185/60 R14</div>
	// 	</div>
	// 	<h6 className='text-sm text-gray-500 mt-4'>Альтернатива</h6>
	// 	<div className='flex flex-wrap gap-2 text-sm font-bold mt-2'>
	// 		<div>195/50 R15</div>
	// 		<div className='text-blue-500 cursor-pointer'>195/55 R15</div>
	// 		<div className='text-blue-500 cursor-pointer'>205/50 R15</div>
	// 		<div className='text-blue-500 cursor-pointer'>215/45 R15</div>
	// 		<div className='text-blue-500 cursor-pointer'>205/45 R16</div>
	// 		<div className='text-blue-500 cursor-pointer'>215/40 R16</div>
	// 		<div className='text-blue-500 cursor-pointer'>205/40 R17</div>
	// 		<div className='text-blue-500 cursor-pointer'>215/35 R17</div>
	// 	</div>
	// </div>
}