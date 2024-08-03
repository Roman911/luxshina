import { FC } from 'react';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { removeParam } from '../../../store/reducers/filterSlice';

import { FilterActiveComponent } from '../../../components/Catalog/FilterActive';

interface FilterActiveProps {
	className: string
}

export const FilterActive: FC<FilterActiveProps> = ({ className }) => {
	const { filter } = useAppSelector(state => state.filterReducer);
	const dispatch = useAppDispatch();

	const clearParam = (name: string) => {
		dispatch(removeParam({[name]: null}))
	}

	return <FilterActiveComponent className={ className } filter={ filter } clearParam={ clearParam } />
}