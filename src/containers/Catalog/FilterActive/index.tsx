import { FC } from 'react';

import { baseDataAPI } from '../../../services/baseDataService';
import { useAppDispatch, useAppSearchParams } from '../../../hooks';
import { removeParam } from '../../../store/reducers/filterSlice';
import { FilterActiveComponent } from '../../../components/Catalog/FilterActive';

interface FilterActiveProps {
	className: string
}

export const FilterActive: FC<FilterActiveProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const searchParams = useAppSearchParams();
	const { data } = baseDataAPI.useFetchBaseDataQuery('');

	const clearParam = (name: string) => {
		dispatch(removeParam({[name]: null}))
	}

	return <FilterActiveComponent
		data={ data }
		className={ className }
		searchParams={ searchParams }
		clearParam={ clearParam }
	/>
}