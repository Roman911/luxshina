import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { reset as resetFilter } from '../../store/reducers/filterSlice';
import { reset as resetFilterCar } from '../../store/reducers/filterCarSlice';
import { LayoutWrapper } from '../../components/Layout';
import { Filter } from './Filter';
import { ProductList } from '../ProductList';
import { Carousel } from './Carousel';
import { PopularBlock } from './PopularBlock';
import { OurAdvantages, ShowAll, TextSeo } from '../../components/Home';
import { NoResult, Spinner, Title } from '../../components/Lib';
import { Language } from '../../models/language';

export const Home = () => {
	const { lang } = useAppSelector(state => state.langReducer);
	const { settings } = useAppSelector(state => state.settingsReducer);
	const { data, isLoading } = baseDataAPI.useFetchProductsQuery({ id: '?vehicle_type=1&order[value]=popular&order[asc]=0' });
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(resetFilter());
		dispatch(resetFilterCar());
	}, [dispatch]);

	return <main>
		<Helmet>
			<title>{ settings[lang].meta_title }</title>
		</Helmet>
		<Filter />
		<LayoutWrapper homePage={ true }>
			<Title title={ settings[lang].h2_top } />
			<Spinner height='h-40' show={ isLoading } size='large'>
				{data?.result ? <ProductList
					classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5'
					data={ data?.data }
				/> : <NoResult
					noResultText={ lang === Language.UA ? 'На жаль, по заданих параметрах товарів не знайдено' : 'К сожалению, по заданным параметрам товаров не найдено' }
				/>}
			</Spinner>
			<ShowAll />
			<Carousel />
			<OurAdvantages />
			<PopularBlock />
			<TextSeo />
		</LayoutWrapper>
	</main>
};
