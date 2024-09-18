import { FC } from 'react';

import { useAppSelector } from '../../hooks';
import { Link } from '../../lib';
import { CartItem } from './CartItem';
import type { ProductsProps } from '../../models/products';
import { Language } from '../../models/language';

interface CarProps {
	data: ProductsProps | undefined
	removeProduct: (id: number) => void
	cartItems: { id: number; quantity: number }[]
	setQuantity: (id: number, quantity: number) => void
}

export const CartComponent: FC<CarProps> = ({ data, cartItems, removeProduct, setQuantity }) => {
	const { lang } = useAppSelector(state => state.langReducer);

	const items = data?.data.products.map(item => {
		const id = item.best_offer.id;
		const price = item.best_offer.price;
		const quantity = cartItems.find(i => i.id === id)?.quantity;

		return { id, price, quantity }
	});

	const totalQuantity = items?.reduce((sum, item) => sum + (item.quantity ?? 0), 0);
	const totalQuantityPrice = items?.reduce((sum, item) => sum + (item.quantity ?? 0) * parseFloat(item.price), 0);

	return <div className='flex flex-col lg:flex-row bg-white p-5 rounded-sm shadow-sm gap-10'>
		<div className='flex-1 divide-y'>
			{data?.data.products.map(item => {
				const quantity = cartItems?.find(i => i.id === item.best_offer.id)?.quantity || 1;

				return <CartItem
					key={ item.group }
					id={ item.best_offer.id }
					quantity={ quantity }
					group={ item.group }
					default_photo={ item.default_photo }
					full_name={ item.full_name }
					price={ item.best_offer.price }
					country={ item.best_offer.country }
					country_ru={ item.best_offer.country_ru }
					year={ item.best_offer.year }
					offerQuantity={ item.offers[0].quantity }
					removeProduct={ removeProduct }
					setQuantity={ setQuantity }
				/>
			})}
		</div>
		<div className='w-full lg:w-72 bg-blue-50 py-6 px-5 h-max'>
			<div className='flex justify-between'>
				<div>{ totalQuantity } { lang === Language.UA ? 'товарів на суму:' : 'товаров на сумму:' }</div>
				<div>{ totalQuantityPrice } ₴</div>
			</div>
			<div className='font-bold mt-4 flex justify-between'>
				<div>Разом до сплати:</div>
				<div>{ totalQuantityPrice } ₴</div>
			</div>
			<Link className='btn primary w-full mt-6' to='/order'>{ lang === Language.UA ? 'Оформити замовлення' : 'Оформить заказ' }</Link>
		</div>
	</div>
}
