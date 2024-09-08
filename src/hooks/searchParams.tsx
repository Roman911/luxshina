import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAppDispatch } from './redux';
import { setParams } from '../store/reducers/filterSlice';

interface FilterParams {
	width?: string | null;
	height?: string | null;
	radius?: string | null;
	country?: string | null;
	krepeg?: string | null;
}

export const useAppSearchParams = () => {
	const [searchParams] = useSearchParams();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (searchParams.size > 0) {
			const newFilter: FilterParams = {};

			if (searchParams.get('width')) {
				newFilter.width = searchParams.get('width');
			}

			if (searchParams.get('height')) {
				newFilter.height = searchParams.get('height');
			}

			if (searchParams.get('radius')) {
				newFilter.radius = searchParams.get('radius');
			}

			if (searchParams.get('country')) {
				newFilter.country = searchParams.get('country');
			}

			if (searchParams.get('krepeg')) {
				newFilter.krepeg = searchParams.get('krepeg');
			}

			dispatch(setParams(newFilter));
		}
	}, [dispatch, searchParams]);
};
