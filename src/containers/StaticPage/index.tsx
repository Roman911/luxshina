import { FC, memo } from 'react';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet-async';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppSelector } from '../../hooks';

import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Spinner, Title } from '../../components/Lib';

interface StaticPageProps {
	id: number
	page: string
}

export const StaticPage: FC<StaticPageProps> = ({ id, page }) => {
	const { data, isLoading } = baseDataAPI.useFetchStatiAliasQuery(`${ id }`);
	const { lang } = useAppSelector(state => state.langReducer);
	const { settings } = useAppSelector(state => state.settingsReducer);
	const title = data ? data?.[page].description[lang].title : '';

	const path = [
		{
			id: 1,
			title: data?.[page].description[lang].meta_title,
			url: '/'
		}
	];

	const HtmlContent = memo(({ htmlString }: { htmlString: string }) => {
		const sanitizedHtml = DOMPurify.sanitize(htmlString);
		return (
			<div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
		);
	});

	return <LayoutWrapper>
		<Helmet>
			<title>{ title } | { settings.ua.config_email }</title>
		</Helmet>
		<Breadcrumbs path={ path }/>
		<Spinner height='h-60' show={ isLoading }>
			<Title title={ data?.[page].description[lang].meta_h1 } />
			<HtmlContent htmlString={ data?.[page].description[lang].content } />
		</Spinner>
	</LayoutWrapper>
};
