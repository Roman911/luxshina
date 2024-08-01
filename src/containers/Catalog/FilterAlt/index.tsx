import { FC } from 'react';

import { baseDataAPI } from '../../../services/baseDataService';

import { FilterAltComponent } from '../../../components/Catalog/FilterAlt';

interface FilterAltProps {
	isOpenFilter: boolean
	closeFilter: () => void
}

export const FilterAlt: FC<FilterAltProps> = ({ isOpenFilter, closeFilter }) => {
	const { data } = baseDataAPI.useFetchBaseDataQuery('');

	return <FilterAltComponent data={ data } isOpenFilter={ isOpenFilter } closeFilter={ closeFilter } />
}
