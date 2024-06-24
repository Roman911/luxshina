import { Breadcrumbs } from '../../components/Breadcrumbs';
import { FilterAlt } from './FilterAlt';
import { CatalogContent } from './CatalogContent/CatalogContent.tsx';

export const Catalog = () => {
	return <div>
		<Breadcrumbs />
		<div className='py-5 flex'>
			<FilterAlt />
			<CatalogContent />
		</div>
	</div>
}
