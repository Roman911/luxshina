import { Helmet } from 'react-helmet-async';

import { useAppSelector, useAppTranslation } from '../../hooks';
import { ProductList } from '../ProductList';
import { LayoutWrapper } from '../../components/Layout';
import { Title } from '../../components/Lib';
import { Language } from '../../models/language';
import { Breadcrumbs } from '../../components/Breadcrumbs';

const data = {
	"count": 0,
	"is_had_items": true,
	"data": []
}

export const Bookmarks = () => {
	const { lang } = useAppSelector(state => state.langReducer);
	const t = useAppTranslation();
	const noDataText = lang === Language.UA ? 'Ви ще не додали в обране жодного товару' : 'Вы еще не добавили в избранное ни одного товара';
	const path = [
		{
			id: 1,
			title: t('favorites', true),
			url: '/'
		}
	]

	return <LayoutWrapper>
		<Helmet>
			<title>{ t('favorites', true) } | luxshina.ua</title>
		</Helmet>
		<Breadcrumbs path={ path }/>
		<Title title='favorites' />
		<ProductList classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4' data={ data } noDataText={ noDataText } />
	</LayoutWrapper>
}
