import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { config } from '../../../config';
import { baseDataAPI } from '../../../services/baseDataService';
import { useAppDispatch, useAppSelector, useAppSearchParams } from '../../../hooks';
import { setParams } from '../../../store/reducers/filterSlice';
import { ProductList } from '../../ProductList';
import { FilterByCar } from '../../../components/Catalog/FilterByCar';
import { FilterActive } from '../FilterActive';
import { SelectionByCar } from '../../../components/Catalog/SelectionByCar';
import { Paginate } from '../../../components/Catalog/Paginate';
import { Language } from '../../../models/language';
import { NoResult, Spinner } from '../../../components/Lib';

interface CatalogContentProps {
	openFilter: () => void
	onSubmit: () => void
}

export const CatalogContent: FC<CatalogContentProps> = ({ openFilter, onSubmit }) => {
	const [ paginateCount, setPaginateCount ] = useState(0);
	const location = useLocation();
	const dispatch = useAppDispatch();
	const { lang } = useAppSelector(state => state.langReducer);
	const { data, isLoading } = baseDataAPI.useFetchProductsQuery({ id: location?.search, length: config.catalog.itemsProduct, start: paginateCount * config.catalog.itemsProduct });
	const searchParams = useAppSearchParams();

	useEffect(() => {
		dispatch(setParams(searchParams));
	}, [dispatch, searchParams]);

	return (
		<div className='flex-1'>
			<FilterByCar openFilter={openFilter} onSubmit={onSubmit}/>
			<SelectionByCar />
			<FilterActive className='hidden lg:flex'/>
			<Spinner height='h-60' show={isLoading} size='large'>
				{data?.result ? <ProductList
					classnames='grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
					data={data?.data}
				/> : <NoResult
					noResultText={lang === Language.UA ?
						'На жаль, по заданих параметрах товарів не знайдено' :
						'К сожалению, по заданным параметрам товаров не найдено'
				}
				/>}
			</Spinner>
			{data?.result && data.data.total_count > 12 &&
				<Paginate
					itemsPerPage={ config.catalog.itemsProduct }
					paginateCount={ paginateCount }
					total_count={ data?.data.total_count }
					setPaginateCount={ setPaginateCount }
				/>
			}
		</div>
	)
};
