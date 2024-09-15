import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from './redux';

export const useAppSubmit = () => {
	const [ params, setParams ] = useState<string[]>([]);
	const [ searchParams, setSearchParams ] = useSearchParams();
	const { filter } = useAppSelector(state => state.filterReducer);

	// General function to update params list
	const updateParamsList = useCallback((key: string, value: string | null | undefined) => {
		setParams(prevParams => {
			const updatedParams = prevParams.filter(param => !param.startsWith(`${key}=`));
			if (value) updatedParams.push(`${key}=${value}`);
			return updatedParams;
		});
	}, []);

	// Update params when filter changes
	useEffect(() => {
		updateParamsList('width', filter.width ?? '');
		updateParamsList('height', filter.height ?? '');
		updateParamsList('brand', filter.brand ?? '');
		updateParamsList('radius', filter.radius ?? '');
		updateParamsList('sezon', filter.sezon ?? '');
		updateParamsList('only_studded', filter.only_studded ?? '');
		updateParamsList('krip', filter.krip ?? '');
		updateParamsList('typedisk', filter.typedisk ?? '');
		updateParamsList('brand_disc', filter.brand_disc ?? '');
	}, [filter.width, filter.height, filter.brand, updateParamsList, filter.radius, filter.sezon, filter.only_studded, filter.krip]);

	// Function to handle form submit (update URL)
	const handleSubmit = useCallback(() => {
		const joinedParams = params.join('&');
		if (searchParams.toString() !== joinedParams) {
			setSearchParams(joinedParams);
		}
	}, [params, searchParams, setSearchParams]);

	// Function to clear a specific param
	const handleClear = useCallback((name: string) => {
		const updatedParams = params.filter(param => !param.startsWith(`${name}=`));
		const joinedParams = updatedParams.join('&');
		if (searchParams.toString() !== joinedParams) {
			setSearchParams(joinedParams);
		}
		setParams(updatedParams); // Also update local state
	}, [params, searchParams, setSearchParams]);

	// Function to clear all params
	const handleClearAll = useCallback(() => {
		setParams([]);
		setSearchParams('');
	}, [setSearchParams]);

	return { params, handleSubmit, handleClear, handleClearAll };
};
