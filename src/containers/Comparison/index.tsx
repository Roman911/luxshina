import { Helmet } from 'react-helmet-async';

import { useAppSelector, useAppTranslation } from '../../hooks';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { NoResult, Spinner, Title } from '../../components/Lib';
import { ComparisonComponent } from '../../components/Comparison';
import { Language } from "../../models/language.ts";
import { baseDataAPI } from "../../services/baseDataService.ts";

export const Comparison = () => {
	const { lang } = useAppSelector(state => state.langReducer);
	const { comparisonItems } = useAppSelector(state => state.comparisonReducer);
	const { data, isLoading } = baseDataAPI.useFetchProductsQuery({ id: `?product_ids=${comparisonItems.join(',')}` })
	const t = useAppTranslation();
	const noDataText = lang === Language.UA ? 'Ви ще не додали в обране жодного товару' : 'Вы еще не добавили в избранное ни одного товара';

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
		{comparisonItems.length > 0 ? <Spinner height='h-40' show={ isLoading } >
			<ComparisonComponent data={ data?.data } />
		</Spinner> : <NoResult noResultText={ noDataText } />}
	</LayoutWrapper>
};
