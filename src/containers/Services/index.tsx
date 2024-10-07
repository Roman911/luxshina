import { baseDataAPI } from '../../services/baseDataService';
import { useAppSelector } from '../../hooks';
import { LayoutWrapper } from '../../components/Layout';
import { ProductList } from '../ProductList';
import { NoResult, Spinner } from '../../components/Lib';
import { Language } from '../../models/language';

export const Services = () => {
	const { lang } = useAppSelector(state => state.langReducer);
	const { data, isLoading } = baseDataAPI.useFetchProductsQuery({ id: '?typeproduct=5&categories=8' });

	return <LayoutWrapper>
		<Spinner height='h-60' show={isLoading} size='large'>
			{data?.result ? <ProductList
				classnames='grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
				data={data?.data}
			/> : <NoResult
				noResultText={ lang === Language.UA ?
					'На жаль, по заданих параметрах товарів не знайдено' :
					'К сожалению, по заданным параметрам товаров не найдено'
				}
			/>}
		</Spinner>
	</LayoutWrapper>
};
