import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '../../config';
import { baseDataAPI } from '../../services/baseDataService';
import { useAppSelector, useAppTranslation } from '../../hooks';
import { LayoutWrapper } from '../../components/Layout';
import { ProductList } from '../ProductList';
import { NoResult, Spinner } from '../../components/Lib';
import { Language } from '../../models/language';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Paginate } from '../../components/Catalog';

export const Services = () => {
	const [ paginateCount, setPaginateCount ] = useState(0);
	const [ itemsProduct, setItemsProduct ] = useState(config.catalog.itemsProduct);
	const { lang } = useAppSelector(state => state.langReducer);
	const { settings } = useAppSelector(state => state.settingsReducer);
	const { data, isLoading } = baseDataAPI.useFetchProductsQuery({
		id: '?typeproduct=5&categories=8',
		length: itemsProduct,
		start: paginateCount * config.catalog.itemsProduct
	});
	const t = useAppTranslation();
	const targetRef = useRef<HTMLDivElement>(null);

	const handlePageClick = (event: { selected: number; }) => {
		targetRef.current?.scrollIntoView({ behavior: 'smooth' });
		const container = document.querySelector('.paginate');
		const elements = container?.querySelectorAll('li') || [];
		for(let i = 0; i < elements.length; i++) {
			elements[i].classList.remove('selected');
		}
		setPaginateCount(event.selected);
		setItemsProduct(config.catalog.itemsProduct);
	};

	const path = [
		{
			id: 1,
			title: t('services', true),
			url: '/'
		}
	];

	return <LayoutWrapper>
		<Helmet>
			<title>{ `${ settings?.[lang].meta_title } | ${ settings?.[lang].config_name }` }</title>
			<meta name='description'
						content={ `${ settings?.[lang].meta_description } | ${ settings?.[lang].config_name }` }/>
		</Helmet>
		<Breadcrumbs path={ path }/>
		<div ref={ targetRef }></div>
		<Spinner height='h-60' show={ isLoading } size='large'>
			{ data?.result ? <ProductList
				classnames='grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-4'
				data={ data?.data }
			/> : <NoResult
				noResultText={ lang === Language.UA ?
					'На жаль, по заданих параметрах товарів не знайдено' :
					'К сожалению, по заданным параметрам товаров не найдено'
				}
			/> }
		</Spinner>
		{ data?.result && data.data.total_count > 12 &&
			<Paginate
				itemsPerPage={ config.catalog.itemsProduct }
				paginateCount={ paginateCount }
				total_count={ data?.data.total_count }
				handlePageClick={ handlePageClick }
			/> }
	</LayoutWrapper>
};
