import React from 'react';
import { Link } from 'react-router-dom';

import style from './index.module.scss';

import { useAppTranslation } from '../../hooks';

import { Rating } from '../Lib/Rating';
import { CountryInfo } from '../Lib/CountryInfo';
import { CartIcon } from '../Lib/Icons';

import type { itemProps } from '../../models/productCard';

interface ProductCardProps {
	item: itemProps
}

export const ProductCardComponent: React.FC<ProductCardProps> = ({ item }) => {
	const { best_offer, full_name, group, model, min_price, comments_count, comments_avg_rate } = item;
	const param = full_name.replace(/[\s/]+/g, '-').toLowerCase();

	const t = useAppTranslation();

	return <Link to={ `catalog/tyre/${ param }` } className={style['product-card']}>
		<img src={`https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/${model}.400x400.jpg`} alt=""/>
		<p className='font-bold my-2.5 min-h-12'>{ full_name }</p>
		<div className='text-sm text-gray-500 my-2.5'>
			<span>Артикул: </span><span>{ group }</span>
		</div>
		<div className='my-3.5'>
			<CountryInfo country='Угорщина' countryCode='HU' year={ best_offer.year }/>
		</div>
		<Rating commentsCount={ comments_count } commentsAvgRate={ comments_avg_rate }/>
		<div className='mt-6 flex justify-between'>
			<div>
				<div className='flex items-end mb-0.5'>
					<div className='text-sm font-medium mb-0.5 mr-1'>{ t('from') }</div>
					<div className='text-2xl font-bold'>{ min_price } ₴</div>
				</div>
				<div className='flex text-sm text-gray-500'>
					<div>{ t('from') }</div>
					<div className='font-bold mx-1'>{ min_price * 4 } ₴</div>
					<div>за 4 шт.</div>
				</div>
			</div>
		<button className='btn primary small'>
			<CartIcon className='stroke-white' />
		</button>
	</div>
</Link>
}
