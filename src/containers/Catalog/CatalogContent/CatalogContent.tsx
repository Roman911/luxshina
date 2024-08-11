import { FC } from 'react';

import { useAppSelector } from '../../../hooks';
import { ProductList } from '../../ProductList';
import { FilterByCar } from '../../../components/Catalog/FilterByCar';
import { FilterActive } from '../FilterActive';
import { SelectionByCar } from '../../../components/Catalog/SelectionByCar';
import { Paginate } from '../../../components/Catalog/Paginate';
import { Language } from '../../../models/language';

const data = {
	"count": 0,
	"is_had_items": true,
	"data": [],
}

interface CatalogContentProps {
	openFilter: () => void
	onSubmit: () => void
}

export const CatalogContent: FC<CatalogContentProps> = ({ openFilter, onSubmit }) => {
	const { lang } = useAppSelector(state => state.langReducer);

	return <div className='flex-1'>
		<FilterByCar openFilter={ openFilter } onSubmit={onSubmit} />
		<SelectionByCar />
		<FilterActive className='hidden lg:flex' />
		<ProductList
			classnames='grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
			data={ data }
			noDataText={ lang === Language.UA ? 'На жаль, по заданих параметрах товарів не знайдено' : 'К сожалению, по заданным параметрам товаров не найдено' }
		/>
		<Paginate items={[]} />
	</div>
}
