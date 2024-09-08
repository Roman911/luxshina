import { FC, ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppSelector, useAppTranslation } from '../../hooks';

import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Title } from '../../components/Lib';
import { AboutUs, Contacts, GuaranteeAndRefund, Payment, PublicOffer, Shipment } from '../../components/StaticPages';

import { Language } from '../../models/language';

interface StaticPageProps {
	page: string
	title: string
}

export const StaticPage: FC<StaticPageProps> = ({ page, title }) => {
	const t = useAppTranslation();
	const { data } = baseDataAPI.useFetchStatiAliasQuery('1');
	const { lang } = useAppSelector(state => state.langReducer);
	const path = [
		{
			id: 1,
			title: t(title, true),
			url: '/'
		}
	];

	console.log(data)

	const renderPage = (page: string, lang: Language) => {
		const pageComponents: Record<string, ReactElement | null> = {
			shipment: <Shipment lang={ lang } />,
			payment: <Payment lang={ lang } />,
			contacts: <Contacts lang={ lang } />,
			'guarantee-and-refund': <GuaranteeAndRefund lang={ lang } />,
			'public-offer': <PublicOffer lang={ lang } />,
			default: <AboutUs lang={ lang } />,
		};

		return pageComponents[page] || pageComponents.default;
	};

	return <LayoutWrapper>
		<Helmet>
			<title>{ t(title, true) } | luxshina.ua</title>
		</Helmet>
		<Breadcrumbs path={ path }/>
		<Title title={ title } />
		{ renderPage(page, lang) }
	</LayoutWrapper>
}
