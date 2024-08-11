import React from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppTranslation } from '../../hooks';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Title } from '../../components/Lib';
import { CartComponent } from '../../components/Cart';
import { itemProps } from '../../models/productCard';

const data: itemProps[] = []

interface CartProps {

}

export const Cart: React.FC<CartProps> = () => {
	const t = useAppTranslation();
	const path = [
		{
			id: 1,
			title: t('cart', true),
			url: '/'
		}
	];

	return <LayoutWrapper>
		<Helmet>
			<title>{ t('cart', true) } | luxshina.ua</title>
		</Helmet>
		<Breadcrumbs path={ path } />
		<Title title='cart' />
		<CartComponent data={ data } />
	</LayoutWrapper>
}
