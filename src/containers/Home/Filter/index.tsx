import { baseDataAPI } from '../../../services/baseDataService';

import { FilterComponent } from '../../../components/Home';

export const Filter = () => {
	const { data } = baseDataAPI.useFetchBaseDataQuery('');

	return <FilterComponent data={ data } />
}
