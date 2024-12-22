import { baseDataAPI } from '../../../services/baseDataService';
import { useAppSelector } from '../../../hooks';
import { Spinner, Title } from '../../../components/Lib';
import { PopularSizes, PopularBrands } from '../../../components/Home';

export const PopularBlock = () => {
	const { lang } = useAppSelector(state => state.langReducer);
	const { settings } = useAppSelector(state => state.settingsReducer);
	const { data, isLoading } = baseDataAPI.useFetchFeatureParamsQuery('');

	return <>
		<div className='mt-28'>
			<Title title={ settings[lang].h2_popular_tyre }/>
			<Spinner height='h-40' show={ isLoading }>
				<PopularSizes data={ data?.ProductTiporazmer } />
			</Spinner>
		</div>
		<div className='mt-24'>
			<Title title={ settings[lang].h2_popular_auto }/>
			<Spinner height='h-40' show={ isLoading }>
				<PopularBrands data={ data?.Car2Brand } />
			</Spinner>
		</div>
	</>
};
