import { FC } from 'react';

import { useAppSelector } from '../../../hooks';
import { Spinner } from '../../Lib';
import type { ProductsProps } from '../../../models/products';
import { Language } from '../../../models/language';

interface SummaryProps {
	data: ProductsProps | undefined
	isLoading: boolean
	cartItems: { id: number; quantity: number }[]
}

export const Summary: FC<SummaryProps> = ({ data, isLoading, cartItems }) => {
	const { lang } = useAppSelector(state => state.langReducer);

	const items = data?.data.products.map(item => {
		const id = item.best_offer.id;
		const price = item.best_offer.price;
		const quantity = cartItems.find(i => i.id === id)?.quantity;

		return { id, price, quantity }
	});

	const totalQuantityPrice = items?.reduce((sum, item) => sum + (item.quantity ?? 0) * parseFloat(item.price), 0);

	return <div className='w-full lg:w-96'>
		<div className='bg-white'>
			<div className='pt-5 pb-2 px-6'>
				<h3 className='font-bold'>{ lang === Language.UA ? 'Ваше замовлення' : 'Ваш заказ' }</h3>
				<Spinner height='h-40' show={isLoading}>
					<div className='divide-y'>
						{data?.data.products.map(item => {
							const quantity = cartItems.find(i => i.id === item.best_offer.id)?.quantity;

							return <div key={ item.group } className='flex items-center py-4'>
								<img className='w-20 h-20' src={ item.default_photo } alt=""/>
								<div className='ml-2 px-3 w-full'>
									<div className='font-bold text-sm'>{ item.full_name }</div>
									<div className='flex justify-between text-sm mt-3'>
										<div>{ quantity } шт</div>
										<div>{ +item.best_offer.price * (quantity || 1) } грн</div>
									</div>
								</div>
							</div>
						})}
					</div>
				</Spinner>
			</div>
			<div className='bg-blue-50 py-5 px-6'>
				<div className='flex justify-between font-bold'>
					<div>{ lang === Language.UA ? 'Всього до сплати' : 'Всего к оплате' }</div>
					<div>{ totalQuantityPrice } грн</div>
				</div>
				<button className='btn primary w-full mt-5'>{ lang === Language.UA ? 'Оформити замовлення' : 'Оформить заказ' }</button>
			</div>
		</div>
	</div>
};
