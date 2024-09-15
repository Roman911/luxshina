import { Dispatch, FC, SetStateAction } from 'react';

interface QuantityProps {
	quantity: number
	offerQuantity: number
	onChange: (e: { target: HTMLInputElement }) => void
	setQuantity: Dispatch<SetStateAction<number>>
}

export const Quantity: FC<QuantityProps> = ({ quantity, offerQuantity, onChange, setQuantity }) => {
	return <div className='quantity flex items-center'>
		<div className='flex gap-1.5'>
			<button
				onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}
				className='p-2 w-10 text-center font-bold rounded-sm text-[#575C66] bg-gray-200 hover:bg-[#D2D3D6] transition'>-
			</button>
			<input
				onChange={e => onChange(e)}
				className='w-10 rounded-sm border border-[#C1C4CC] text-center font-medium'
				value={quantity} placeholder='1'
				type="text"
			/>
			<button
				onClick={() => setQuantity(prev => prev < offerQuantity ? prev + 1 : offerQuantity)}
				className='p-2 w-10 text-center font-bold rounded-sm text-[#575C66] bg-gray-200 hover:bg-[#D2D3D6] transition'>+
			</button>
		</div>
		<div className='ml-6 text-4xl md:text-2xl font-bold'>{offerQuantity * (quantity ?? 0)} ₴</div>
	</div>
};
