import { baseDataAPI } from '../../../services/baseDataService';

import { FilterAltComponent } from '../../../components/Catalog/FilterAlt';

export const FilterAlt = () => {
	const { data } = baseDataAPI.useFetchBaseDataQuery('');

	return <FilterAltComponent data={ data } />
}
