import { useAppTranslation } from '../../../hooks';
import { FilterByCarComponents } from '../../../components/Home/Filter/FilterByCar';

export const FilterByCar = () => {
	const t = useAppTranslation();
	const filterConfigs = [
		{
			label: t('car brand', true),
			name: 'brand',
			options: []
		},
		{
			label: t('model', true),
			name: 'model',
			options: []
		},
		{
			label: t('graduation year', true),
			name: 'year',
			options: []
		},
		{
			label: t('modification', true),
			name: 'modification',
			options: []
		}
	];

	return <FilterByCarComponents filters={ filterConfigs } />
}
