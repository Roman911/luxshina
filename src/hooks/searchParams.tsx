import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

interface FilterParams {
	[key: string]: string;
}

const PARAM_KEYS = ['brand', 'width', 'height', 'radius', 'country', 'krepeg'] as const;

export const useAppSearchParams = () => {
	const [filter, setFilter] = useState<FilterParams>({});
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const newFilter: FilterParams = {};

		PARAM_KEYS.forEach(key => {
			const value = searchParams.get(key);
			if(value) newFilter[key] = value;
		});

		setFilter(newFilter);
	}, [searchParams]);

	return filter;
};
