import { FC } from 'react';

import { baseDataAPI } from '../../../services/baseDataService';
import { useAppDispatch, useAppSearchParams, useAppSubmit } from '../../../hooks';
import { removeParam, reset } from '../../../store/reducers/filterSlice';
import { FilterActiveComponent } from '../../../components/Catalog/FilterActive';

interface FilterActiveProps {
	className: string
}

export const FilterActive: FC<FilterActiveProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const searchParams = useAppSearchParams();
	const { handleClearAll, handleClear } = useAppSubmit();
	const { data } = baseDataAPI.useFetchBaseDataQuery('');

	const clearParam = (name: string) => {
		dispatch(removeParam({[name]: null}));
		handleClear(name);
	}

	const clearAllParams = () => {
		dispatch(reset());
		handleClearAll();
	}

	return <FilterActiveComponent
		data={ data }
		className={ className }
		searchParams={ searchParams }
		clearParam={ clearParam }
		clearAllParams={ clearAllParams }
	/>
};
