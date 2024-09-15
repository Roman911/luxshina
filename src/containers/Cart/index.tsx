import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet-async';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppDispatch, useAppSelector, useAppTranslation } from '../../hooks';
import { addStorageCart } from '../../store/reducers/cartSlice';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import {NoResult, Spinner, Title} from '../../components/Lib';
import { CartComponent } from '../../components/Cart';
import {Language} from "../../models/language.ts";

export const Cart: React.FC = () => {
	const [quantity, setQuantity] = useState(1);
	const t = useAppTranslation();
	const dispatch = useAppDispatch();
	const { lang } = useAppSelector(state => state.langReducer);
	//const { cartItems } = useAppSelector(state => state.cartReducer);
	const cartStorage = localStorage.reducerCart ? JSON.parse( localStorage.reducerCart ) : [];
	//const id = cartItems.map(item => item.id).join(',');
	const { data, isLoading } = baseDataAPI.useFetchProductsQuery({id: `?Offer_id=2022,2025`});
	const path = [{ id: 1, title: t('cart', true), url: '/' }];

	useEffect(() => {
		if(cartStorage !== 0) {
			for(let i = 0; i < cartStorage.length; i++) {
				dispatch(addStorageCart(cartStorage[i]));
			}
		}
	}, [cartStorage, dispatch]);

	const onChange = (e: { target: HTMLInputElement }) => {
		const value = e.target.value;
		const onlyNumbers = value.replace(/\D/g, '');
		const numericValue = Number(onlyNumbers);

		setQuantity(numericValue < 10 ? numericValue : 10);
	}

	return <LayoutWrapper>
		<Helmet>
			<title>{ t('cart', true) } | luxshina.ua</title>
		</Helmet>
		<Breadcrumbs path={ path } />
		<Title title='cart' />
		<Spinner height='h-40' show={ isLoading }>
			{ data?.result ? <CartComponent
					data={ data }
					quantity={ quantity }
					onChange={ onChange }
					setQuantity={ setQuantity }
				/> :
				<NoResult
					noResultText={ lang === Language.UA ? 'Ви ще не додали до кошику жодного товару' : 'Вы еще не добавили в корзину ни одного товара' }
				/> }
		</Spinner>
	</LayoutWrapper>
};
