import { baseDataAPI } from '../services/baseDataService';

export const useAppGatDataStaticPage = () => {
	console.log('2132132')

	const { data } = baseDataAPI.useFetchStatiAliasQuery(`${ 1 }`);

	return data
};
