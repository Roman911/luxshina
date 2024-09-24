import { FC, MouseEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import style from './index.module.scss';
import { Link, countryCodeTransform } from '../../lib';
import { useAppDispatch, useAppSelector, useAppTranslation } from '../../hooks';
import { addCart } from '../../store/reducers/cartSlice';
import { BusIcon, CargoIcon, CarIcon, CartIcon, HeartIcon, LibraIcon, MotorcyclesIcon, SuvIcon } from '../Lib/Icons';
import { Language } from '../../models/language';
import { CountryInfo, Rating } from '../Lib';
import noPhoto from '../../assets/no-photo.s400.jpg';
import type { Product } from '../../models/products';

const icons = {
	1: CarIcon,
	2: SuvIcon,
	7: MotorcyclesIcon,
	8: BusIcon,
	9: CargoIcon,
};

interface ProductCardProps {
	item: Product
	isBookmarks: boolean
	isComparison: boolean
	addToDefense: (event: MouseEvent<HTMLButtonElement>, id: number) => void
	addToComparison: (event: MouseEvent<HTMLButtonElement>, id: number) => void
}

export const ProductCardComponent: FC<ProductCardProps> = ({ item, isBookmarks, isComparison, addToDefense, addToComparison }) => {
	const navigate = useNavigate();
	const { best_offer, default_photo, full_name, group, min_price, season, vehicle_type, page_url } = item;
	const { lang }  =useAppSelector(state => state.langReducer);
	const dispatch = useAppDispatch();
	const t = useAppTranslation();
	const cartStorage = useMemo(() => {
		return localStorage.reducerCart ? JSON.parse(localStorage.reducerCart) : [];
	}, []);

	const seasonIcon = season === '1' ? 'sun' : season === '2' ? 'snow' : season === '3' ? 'all-season' : undefined;
	const vehicle_type_number = vehicle_type as unknown as keyof typeof icons;
	const countryCode = countryCodeTransform(best_offer.country);
	const Icon = icons[vehicle_type_number] || null;

	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if(!cartStorage?.find((item: { id: number, quantity: number }) => item.id === best_offer.id)) {
			const cart = [ ...cartStorage, { id: best_offer.id, quantity: 1 }];
			dispatch(addCart({ id: best_offer.id, quantity: 1 }));
			localStorage.setItem('reducerCart', JSON.stringify(cart));
		}
		navigate( lang === Language.UA ?'/cart' : '/ru/cart');
	}

	return (
		<Link to={`/${page_url}`} className={classNames(style['product-card'], 'group')}>
			<div className='relative min-h-72 sm:min-h-52'>
				<div className='absolute'>
					{ seasonIcon && <img src={`/images/${seasonIcon}-icon.svg`} alt=""/> }
					{ Icon && <Icon className={classNames('fill-[#575C66]', {'stroke-[#575C66]': vehicle_type === '2'}) }/> }
				</div>
				<div className='absolute right-0 invisible group-hover:visible flex flex-col'>
					<button onClick={event => addToDefense(event, group)}>
						<HeartIcon
							className={classNames('stroke-[#8D8E90] hover:stroke-blue-500', {'stroke-blue-500 fill-blue-500': isBookmarks})}/>
					</button>
					<button onClick={event => addToComparison(event, group)}>
						<LibraIcon
							className={classNames('mt-5 fill-[#8D8E90] hover:fill-blue-500', {'fill-blue-500': isComparison})}/>
					</button>
				</div>
				<img src={ default_photo || noPhoto } alt={full_name}/>
			</div>
			<p className='font-bold my-2.5 min-h-12'>{full_name}</p>
			<div className='text-sm text-gray-500 my-2.5'>
				<span>Артикул: </span><span>{ group }</span>
			</div>
			<div className='my-3.5'>
				<CountryInfo
					country={ lang === Language.UA ? best_offer.country : best_offer.country_ru }
					countryCode={ countryCode }
					year={ best_offer.year }
				/>
			</div>
			<Rating commentsCount={ undefined } commentsAvgRate={ 0 }/>
			<div className='mt-6 flex justify-between'>
				<div>
					<div className='flex items-end mb-0.5'>
						<div className='text-sm font-medium mb-0.5 mr-1'>{t('from')}</div>
						<div className='text-2xl font-bold'>{ min_price } ₴</div>
					</div>
					<div className='flex text-sm text-gray-500'>
						<div>{ t('from') }</div>
						<div className='font-bold mx-1'>{ min_price * 4 } ₴</div>
						<div>за 4 шт.</div>
					</div>
				</div>
				<button onClick={ (event) => handleClick(event) } className='btn primary small'>
					<CartIcon className='stroke-white'/>
				</button>
			</div>
		</Link>
	)
};
