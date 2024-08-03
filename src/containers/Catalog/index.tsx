import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '../../hooks';
import { setParams } from '../../store/reducers/filterSlice';

import { parseUrl } from './seo';
import { FilterAlt } from './FilterAlt';
import { CatalogContent } from './CatalogContent/CatalogContent';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { TextSeo } from '../../components/Home';

export const Catalog = () => {
	const [ isOpenFilter, setOpenFilter ] = useState(false);
	const dispatch = useAppDispatch();

	const params = useParams();

	useEffect(() => {
		const url = parseUrl(params['*']);
		dispatch(setParams(url));
	}, [dispatch, params]);

	const closeFilter = () => {
		setOpenFilter(false);
	}

	const openFilter = () => {
		setOpenFilter(true);
	}

	return <LayoutWrapper>
		<Breadcrumbs />
		<div className='py-5 lg:flex'>
			<FilterAlt isOpenFilter={ isOpenFilter } closeFilter={ closeFilter } />
			<CatalogContent openFilter={ openFilter } />
		</div>
		<TextSeo />
	</LayoutWrapper>
}
