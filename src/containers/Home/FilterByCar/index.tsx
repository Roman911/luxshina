import { baseDataAPI } from '../../../services/baseDataService';
import { useAppDispatch, useAppSelector, useAppTranslation } from '../../../hooks';
import { setCarFilter } from '../../../store/reducers/filterCarSlice';
import { FilterByCarComponents } from '../../../components/Home/Filter/FilterByCar';

export const FilterByCar = () => {
	const t = useAppTranslation();
	const { filter } = useAppSelector((state) => state.filterCarReducer);
	const dispatch = useAppDispatch();
	const { data } = baseDataAPI.useFetchBaseDataQuery('');
	const { data: model, refetch: modelRefetch } = baseDataAPI.useFetchAutoModelQuery(`${filter.brand}`);
	const { data: modelYear } = baseDataAPI.useFetchAutoYearQuery(`${filter.model}`);
	const { data: modelKit, refetch: modelKitRefetch } = baseDataAPI.useFetchAutoModelKitQuery(`${filter.model}/${filter.year}`);

	const filterConfigs = [
		{
			label: t('car brand', true),
			name: 'brand',
			options: data?.auto?.map(item => ({ value: item.value, label: item.label }))
		},
		{
			label: t('model', true),
			name: 'model',
			options: model?.map(item => ({ value: item.value, label: item.label })),
			isDisabled: model?.length === 0,
		},
		{
			label: t('graduation year', true),
			name: 'year',
			options: modelYear?.map(item => ({ value: item, label: item })),
			isDisabled: modelYear?.length === 0,
		},
		{
			label: t('modification', true),
			name: 'modification',
			options: modelKit?.map(item => ({ value: item.value, label: item.label })),
			isDisabled: modelKit?.length === 0,
		}
	];

	const onChange = (name: string, value: number | string | undefined) => {
		dispatch(setCarFilter({ ...filter, [name]: value }));
		if(name === 'model') {
			modelRefetch();
		} else if(name === 'modification' || name === 'year') {
			modelKitRefetch();
		}
	}

	return <FilterByCarComponents filters={ filterConfigs } onChange={ onChange } />
}
