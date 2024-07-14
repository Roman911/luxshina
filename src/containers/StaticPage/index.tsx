import React from 'react';
import { Helmet } from 'react-helmet';

import { useAppSelector, useAppTranslation } from '../../hooks';

import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Title } from '../../components/Lib';
import { AboutUs, Contacts, GuaranteeAndRefund, Payment, PublicOffer, Shipment } from '../../components/StaticPages';

interface StaticPageProps {
	page: string
	title: string
}

export const StaticPage: React.FC<StaticPageProps> = ({ page, title }) => {
	const t = useAppTranslation();
	const { lang } = useAppSelector(state => state.langReducer);

	const renderPage = (page: string, lang: string) => {
		switch(page) {
			case 'shipment':
				return <Shipment lang={ lang } />;
			case 'payment':
				return <Payment lang={ lang } />;
			case 'contacts':
				return <Contacts lang={ lang } />;
			case 'guarantee-and-refund':
				return <GuaranteeAndRefund lang={ lang } />;
			case 'public-offer':
				return <PublicOffer lang={ lang } />;
			default:
				return <AboutUs lang={ lang } />;
		}
	}

	return <LayoutWrapper>
		<Helmet>
			<title>{ t(title, true) } | luxshina.ua</title>
		</Helmet>
		<Breadcrumbs/>
		<Title title={ title } />
		{ renderPage(page, lang) }
	</LayoutWrapper>
}
