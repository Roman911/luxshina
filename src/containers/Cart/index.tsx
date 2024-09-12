import React from 'react';
import { Helmet } from 'react-helmet-async';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppSelector, useAppTranslation } from '../../hooks';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Title } from '../../components/Lib';
import { CartComponent } from '../../components/Cart';

export const Cart: React.FC = () => {
	const t = useAppTranslation();
	const { cartItems } = useAppSelector(state => state.cartReducer);
	const { data } = baseDataAPI.useFetchProductsQuery(`?model_id=${cartItems.join(',')}`);
	const path = [{ id: 1, title: t('cart', true), url: '/' }];

	console.log(data)

	return <LayoutWrapper>
		<Helmet>
			<title>{ t('cart', true) } | luxshina.ua</title>
		</Helmet>
		<Breadcrumbs path={ path } />
		<Title title='cart' />
		<CartComponent data={ data } />
	</LayoutWrapper>
}
