import {Dispatch, FC, SetStateAction} from 'react';

import { useAppSelector } from '../../hooks';
import { countryCodeTransform, Link } from '../../lib';
import { Language } from '../../models/language';
import type { ProductsProps } from '../../models/products';
import { CountryInfo, Quantity } from "../Lib";

interface CarProps {
	data: ProductsProps | undefined
	quantity: number
	onChange: (e: { target: HTMLInputElement }) => void
	setQuantity: Dispatch<SetStateAction<number>>
}

export const CartComponent: FC<CarProps> = ({ data, quantity, onChange, setQuantity }) => {
	const { lang } = useAppSelector(state => state.langReducer);

	return <div className='flex flex-col lg:flex-row bg-white p-5 rounded-sm shadow-sm gap-10'>
		<div className='flex-1 divide-y'>
			{data?.data.products.map(item => {
				return <div key={item.group} className='flex flex-col md:flex-row py-4 items-center relative'>
					<img className='w-36' src={ item.default_photo } alt=""/>
					<div className='flex flex-col md:flex-row justify-between items-center w-full ml-4 pr-4 mt-4 md:mt-0 md:pr-0'>
						<div className='flex-1'>
							<div className='font-bold md:text-lg'>{item.full_name}</div>
							<div className='font-bold text-xl mt-2'>{item.best_offer.price} ₴/шт.</div>
							<div className='text-sm text-gray-500 mt-1'>Арт: {item.group}</div>
							<div className='country mt-2 md:col-span-4'>
								<CountryInfo
									country={lang === Language.UA ? item.best_offer.country : item.best_offer.country_ru}
									countryCode={countryCodeTransform(item.best_offer.country)}
									year={item.best_offer.year}
								/>
							</div>
						</div>
						<div className='flex flex-col items-end mt-6 md:mt-3 mr-4 gap-4'>
							<Quantity quantity={ quantity } offerQuantity={ (Number(item.best_offer.price) || 0) } onChange={ onChange } setQuantity={ setQuantity } />
						</div>
					</div>
					<div className='absolute top-4 right-0 md:right-3'>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='w-4 h-4 fill-gray-500'>
							<path
								d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
						</svg>
					</div>
				</div>
			})}
		</div>
		<div className='w-full lg:w-72 bg-blue-50 py-6 px-5 h-max'>
			<div className='flex justify-between'>
				<div>{ quantity } товарів на суму:</div>
				<div>{ (Number(data?.data.products[0].best_offer.price) || 0)  * quantity } ₴</div>
			</div>
			<div className='font-bold mt-4 flex justify-between'>
				<div>Разом до сплати:</div>
				<div>{ (Number(data?.data.products[0].best_offer.price) || 0)  * quantity } ₴</div>
			</div>
			<Link className='btn primary w-full mt-6' to='/order'>Оформити замовлення</Link>
		</div>
	</div>
}
