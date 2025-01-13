import { FC, useState } from 'react';

import { baseDataAPI } from '../../../services/baseDataService';
import { useAppDispatch } from '../../../hooks';
import { setCity } from '../../../store/reducers/orderSlice';
import { MySelect } from '../../../components/Order/Select';

interface NpCitySearchProps {
	title: string
}

export const NpCitySearch: FC<NpCitySearchProps> = ({ title }) => {
	const [city, setCityState] = useState<string | undefined>('');
	const dispatch = useAppDispatch();
	const { data } = baseDataAPI.useFetchNpSearchQuery(city);

	const cityOptionsDefault = !city || (city && city.length === 0 ) ? data?.map((item: [{ Description: string, Ref: string }]) => ({
		value: item[0].Ref,
		label: item[0].Description,
	})) : [];

	const cityOptions = city && city.length > 0 ? data?.[0].Addresses?.map((item: { MainDescription: string, Ref: string }) => ({
		value: item.Ref,
		label: item.MainDescription,
	})) : [];

	const onChange = (_: string, value?: number | string, label?: number | string) => {
		const normalizedValue = value?.toString() ?? '';
		const normalizedLabel = label?.toString() ?? '';
		setCityState(normalizedLabel);
		dispatch(setCity({ value: normalizedValue, label: normalizedLabel }));
	};

	return <MySelect
		name='city'
		label={ title }
		options={ city && city.length > 0 ? cityOptions : cityOptionsDefault }
		onChange={ onChange }
		setState={ setCityState }
	/>
};
