import { baseDataAPI } from '../../../services/baseDataService';

import { useAppSelector, useAppTranslation } from '../../../hooks';
import { FilterComponent } from '../../../components/Home';

export const Filter = () => {
	const { data } = baseDataAPI.useFetchBaseDataQuery('');
	const { section } = useAppSelector(state => state.filterReducer);
	const t = useAppTranslation();

	const getFilters = () => {
		const filterConfigs = [];

		if(section === 'tyre') {
			filterConfigs.push({
				label: t('width', true),
				name: 'width',
				focusValue: 175,
				options: data?.tyre_width?.map(item => ({ value: item.value, label: item.value, p: item.p }))
			});

			filterConfigs.push({
				label: t('height', true),
				name: 'height',
				focusValue: 45,
				options: data?.tyre_height?.map(item => ({ value: item.value, label: item.value, p: item.p }))
			});

			filterConfigs.push({
				label: t('diameter', true),
				name: 'diameter',
				focusValue: `R${14}`,
				options: data?.tyre_diameter?.map(item => ({ value: item.value, label: `R${item.value}`, p: item.p }))
			});

			filterConfigs.push({
				label: t('brand', true),
				name: 'brand',
				options: []
			});

			filterConfigs.push({
				label: t('country', true),
				name: 'country',
				options: data?.manufacture_country?.map(item => ({ value: item.id, label: item.name_ua, p: item.p }))
			});

			filterConfigs.push({
				label: t('year', true),
				name: 'year',
				options: [{ label: 2024, value: 2024 }, { label: 2023, value: 2023 }, { label: 2022, value: 2022 }, { label: 2021, value: 2021 }]
			});
		} else if(section === 'disk') {
			filterConfigs.push({
				label: t('brand', true),
				name: 'brand',
				options: []
			});

			filterConfigs.push({
				label: t('diameter', true),
				name: 'diameter',
				focusValue: `R${14}`,
				options: data?.tyre_diameter?.map(item => ({ value: item.value, label: `R${item.value}`, p: item.p }))
			});

			filterConfigs.push({
				label: t('fasteners', true),
				name: 'bolt_count_pcd',
				options: []
			});

			filterConfigs.push({
				label: 'ET ' + t('from'), name: 'et_from',
				options: []
			});

			filterConfigs.push({
				label: 'ET ' + t('to'), name: 'et_to',
				options: []
			});
		}

		return filterConfigs.map(config => ({
			...config,
			wide: true
		}));
	};

	return <FilterComponent data={ getFilters() } section={ section } />
}
