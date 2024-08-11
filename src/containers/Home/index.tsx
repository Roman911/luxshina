import { Helmet } from 'react-helmet-async';

import { useAppSelector } from '../../hooks';
import { LayoutWrapper } from '../../components/Layout';
import { Filter } from './Filter';
import { ProductList } from '../ProductList';
import { CarouselSlider, OurAdvantages, PopularBrands, PopularSizes, ShowAll, TextSeo } from '../../components/Home';
import { Title } from '../../components/Lib';
import { Language } from '../../models/language';

const data = {
	"count": 0,
	"is_had_items": true,
	"data": []
}

export const Home = () => {
	const { lang } = useAppSelector(state => state.langReducer);

	return <main>
		<Helmet>
			<title>{ lang === Language.UA ? 'Шини та диски' : 'Шины и диски' }</title>
		</Helmet>
		<Filter />
		<LayoutWrapper homePage={ true }>
			<Title title='ТОП 10 популярних літніх шин 2024 року' />
			<ProductList
				classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5'
				data={ data }
				noDataText={ lang === Language.UA ? 'На жаль, по заданих параметрах товарів не знайдено' : 'К сожалению, по заданным параметрам товаров не найдено' }
			/>
			<ShowAll />
			<CarouselSlider />
			<OurAdvantages />
			<PopularSizes />
			<PopularBrands />
			<TextSeo />
		</LayoutWrapper>
	</main>
}
