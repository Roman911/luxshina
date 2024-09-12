import { Helmet } from 'react-helmet-async';

import { useAppTranslation } from '../../hooks';
import { OrderComponent } from '../../components/Order';
import { Title } from '../../components/Lib';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const Order = () => {
	const t = useAppTranslation();

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
	]

	return <LayoutWrapper>
		<Helmet>
			<title>{ t('placing an order', true) } | luxshina.ua</title>
		</Helmet>
		<div className='max-w-5xl mx-auto'>
			<Breadcrumbs path={ path } />
			<Title title='placing an order'/>
			<OrderComponent/>
		</div>
	</LayoutWrapper>
}
