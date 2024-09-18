import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppDispatch, useAppSelector, useAppTranslation } from '../../hooks';
import { OrderComponent } from '../../components/Order';
import { Title } from '../../components/Lib';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { addStorageCart } from '../../store/reducers/cartSlice';

export const Order = () => {
	const cartStorage = localStorage.reducerCart ? JSON.parse( localStorage.reducerCart ) : [];
	const { cartItems } = useAppSelector(state => state.cartReducer);
	const id = cartItems.map(item => item.id).join(',');
	const { data, isLoading } = baseDataAPI.useFetchProductsQuery({id: `?Offer_id=${id}`});
	const t = useAppTranslation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if(cartStorage !== 0) {
			for(let i = 0; i < cartStorage.length; i++) {
				dispatch(addStorageCart(cartStorage[i]));
			}
		}
	}, [cartStorage, dispatch]);

	const path = [
		{
			id: 1,
			title: t('cart', true),
			url: '/cart'
		},
		{
			id: 2,
			title: t('placing an order', true),
			url: '/'
		},
	];

	return <LayoutWrapper>
		<Helmet>
			<title>{ t('placing an order', true) } | luxshina.ua</title>
		</Helmet>
		<div className='max-w-5xl mx-auto'>
			<Breadcrumbs path={ path } />
			<Title title='placing an order'/>
			<OrderComponent data={ data } isLoading={ isLoading } cartItems={ cartItems } />
		</div>
	</LayoutWrapper>
}
