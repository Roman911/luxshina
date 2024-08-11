import { FC, MouseEvent } from 'react';
import { Link } from '../../lib/Links';
import classNames from 'classnames';

import style from './index.module.scss';

import { useAppTranslation } from '../../hooks';

import { CountryInfo, Rating } from '../Lib';
import { CarIcon, CartIcon, HeartIcon, LibraIcon } from '../Lib/Icons';

import type { itemProps } from '../../models/productCard';

interface ProductCardProps {
	item: itemProps
	isBookmarks: boolean
	isComparison: boolean
	addToDefense: (event: MouseEvent<HTMLButtonElement>, id: number) => void
	addToComparison: (event: MouseEvent<HTMLButtonElement>, id: number) => void
}

export const ProductCardComponent: FC<ProductCardProps> = ({ item, isBookmarks, isComparison, addToDefense, addToComparison }) => {
	const { best_offer, full_name, group, model, min_price, comments_count, comments_avg_rate } = item;
	const param = full_name.replace(/[\s/]+/g, '-').toLowerCase();

	const t = useAppTranslation();

	return <Link to={ `/tires/${ param }` } className={ classNames(style['product-card'], 'group') }>
		<div className='relative'>
			<div className='absolute'>
				<img src="/images/snow-icon.svg" alt=""/>
				<CarIcon className='fill-[#575C66]'/>
			</div>
			<div className='absolute right-0 invisible group-hover:visible flex flex-col'>
				<button onClick={ event => addToDefense(event, group) }>
					<HeartIcon className={ classNames('stroke-[#8D8E90] hover:stroke-blue-500', { 'stroke-blue-500 fill-blue-500': isBookmarks }) } />
				</button>
				<button onClick={ event => addToComparison(event, group) }>
					<LibraIcon className={ classNames('mt-5 fill-[#8D8E90] hover:fill-blue-500', { 'fill-blue-500': isComparison }) } />
				</button>
			</div>
			<img src={`https://opt.tyreclub.com.ua/api/public/img/user/s217/tyre/${model}.400x400.jpg`} alt=""/>
		</div>
		<p className='font-bold my-2.5 min-h-12'>{full_name}</p>
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
