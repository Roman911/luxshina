import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppSelector, useAppTranslation } from '../../hooks';

import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Title } from '../../components/Lib';
import { AboutUs, Contacts, GuaranteeAndRefund, Payment, PublicOffer, Shipment } from '../../components/StaticPages';

interface StaticPageProps {
	page: string
	title: string
}

export const StaticPage: FC<StaticPageProps> = ({ page, title }) => {
	const t = useAppTranslation();
	const { lang } = useAppSelector(state => state.langReducer);
	const path = [
		{
			id: 1,
			title: t(title, true),
			url: '/'
		}
	]

	const renderPage = (page: string, lang: string) => {
		const pageComponents: Record<string, FC<{ lang: string }>> = {
			shipment: Shipment,
			payment: Payment,
			contacts: Contacts,
			'guarantee-and-refund': GuaranteeAndRefund,
			'public-offer': PublicOffer,
			default: AboutUs,
		};

		const PageComponent = pageComponents[page] || pageComponents.default;
		return <PageComponent lang={lang} />;
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
