import React from 'react';

import { FilterAlt } from './FilterAlt';
import { CatalogContent } from './CatalogContent/CatalogContent';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { TextSeo } from '../../components/Home';

export const Catalog = () => {
	const [ isOpenFilter, setOpenFilter ] = React.useState(false);

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
