import { FC } from 'react';

import { useAppSelector } from '../../hooks';
import { Link } from '../../lib';
import { Language } from '../../models/language';
import type { itemProps } from '../../models/productCard';

interface CarProps {
	data: itemProps[]
}

export const CartComponent: FC<CarProps> = ({ data }) => {
	const { lang } = useAppSelector(state => state.langReducer);

	if(data.length === 0) {
		return <div className='py-5 px-5 text-center bg-blue-100 w-full mt-4 text-lg font-medium'>
			{lang === Language.UA ? 'Ви ще не додали до кошику жодного товару' : 'Вы еще не добавили в корзину ни одного товара'}
		</div>
	}

	return <div className='flex flex-col lg:flex-row bg-white p-5 rounded-sm shadow-sm gap-10'>
		<div className='flex-1 divide-y'>
			{data.map(item => {
				return <div key={item.group} className='flex py-4 items-center relative'>
					<img className='w-20' src='https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/5558.400x400.jpg' alt=""/>
					<div className='flex flex-col md:flex-row justify-between w-full ml-4 pr-4 md:pr-0'>
						<div className='flex-1'>
							<div className='font-bold'>{item.full_name}</div>
							<div className='text-sm text-gray-500 mt-1'>Арт: {item.group}</div>
						</div>
						<div className='flex mt-3 mr-4 items-center gap-4'>
							<div className='font-bold'>{item.min_price} ₴/шт.</div>
							<div>+ 4 -</div>
							<div className='font-bold'>{item.min_price * 4} ₴</div>
						</div>
					</div>
					<div className='absolute top-4 right-0 md:right-3'>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-3 h-3 fill-gray-500'>
							<path
								d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
						</svg>
					</div>
				</div>
			})}
		</div>
		<div className='w-full lg:w-72 bg-blue-50 py-6 px-5 h-max'>
			<div className='flex justify-between'>
				<div>8 товарів на суму:</div>
				<div>67 232 ₴</div>
			</div>
			<div className='font-bold mt-4 flex justify-between'>
				<div>Разом до сплати:</div>
				<div>67 232 ₴</div>
			</div>
			<Link className='btn primary w-full mt-6' to='/order'>Оформити замовлення</Link>
		</div>
	</div>
}
