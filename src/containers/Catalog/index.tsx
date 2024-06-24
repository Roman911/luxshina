import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { FilterAlt } from './FilterAlt';
import { CatalogContent } from './CatalogContent/CatalogContent.tsx';

export const Catalog = () => {
	return <LayoutWrapper>
		<Breadcrumbs />
		<div className='py-5 flex'>
			<FilterAlt />
			<CatalogContent />
		</div>
	</LayoutWrapper>
}
