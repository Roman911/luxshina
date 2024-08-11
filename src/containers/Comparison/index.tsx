import { Helmet } from 'react-helmet-async';

import { useAppTranslation } from '../../hooks';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Title } from '../../components/Lib';
import { ComparisonComponent } from '../../components/Comparison';
import { itemProps } from '../../models/productCard';

const data: itemProps[] = []

export const Comparison = () => {
	const t = useAppTranslation();

	const path = [
		{
			id: 1,
			title: t('comparison', true),
			url: '/'
		}
	]

	return <LayoutWrapper >
		<Helmet>
			<title>{ t('comparison', true) } | luxshina.ua</title>
		</Helmet>
		<Breadcrumbs path={ path } />
		<Title title='comparison' />
		<ComparisonComponent data={ data } />
	</LayoutWrapper>
}
