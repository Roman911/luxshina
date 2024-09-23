import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppDispatch, useAppSelector, useAppTranslation } from '../../hooks';
import { reset } from '../../store/reducers/cartSlice';
import { OrderComponent } from '../../components/Order';
import { Title } from '../../components/Lib';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';

const schema = yup.object().shape({
	firstname: yup.string().required('Це поле обовʼязкове.'),
	lastname: yup.string().required('Це поле обовʼязкове.'),
	surname: yup.string(),
	telephone: yup.string().min(13).max(13).required('Це поле обовʼязкове.'),
	email: yup.string().email(),
	address: yup.string(),
	comment: yup.string(),
});

interface FormProps {
	firstname: string
	lastname: string
	surname?: string
	telephone: string
	email?: string
	address?: string
	comment?: string
}

const defaultValues = {
	firstname: '',
	lastname: '',
	surname: '',
	telephone: '',
	email: '',
	address: '',
	comment: '',
}

export const Order = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [shippingMethod, setShippingMethod] = useState<number | string | undefined>(1);
	const [paymentMethod, setPaymentMethod] = useState<number | string | undefined>(1);
	const [city, setCity] = useState<number | string | undefined>('');
	const [ref, setRef] = useState<number | string | undefined>('');
	const [department, setDepartment] = useState<number | string | undefined>('');
	const { cartItems } = useAppSelector(state => state.cartReducer);
	const t = useAppTranslation();
	const id = cartItems.map(item => item.id).join(',');
	const { data, isLoading } = baseDataAPI.useFetchProductsQuery({id: `?Offer_id=${id}`});
	const { data: dataOrdersParam } = baseDataAPI.useFetchOrdersParamQuery('');
	const { data: dataNpCity } = baseDataAPI.useFetchNpSearchQuery(city);
	const { data: dataNpWarehouses } = baseDataAPI.useFetchNpWarehousesQuery(ref);
	const [createOrder] = baseDataAPI.useCreateOrderMutation();
	const cityOptions = dataNpCity?.[0].Addresses?.map((item: { MainDescription: string }) => {
		return { value: item.MainDescription, label: item.MainDescription }
	});
	const warehousesOptions = dataNpWarehouses?.map((item: { Description: string, DescriptionRu: string }) => {
		return { value: item.Description, label: item.Description }
	});

	const products = data?.data.products?.map((item) => {
		return {
			product_id: item.product_id,
			offer_id: item.best_offer.id,
			price: Number(item.best_offer.price),
			quantity: cartItems.find(i => i.id === item.best_offer.id)?.quantity,
		}
	});

	const items = data?.data.products.map(item => {
		const id = item.best_offer.id;
		const price = item.best_offer.price;
		const quantity = cartItems.find(i => i.id === id)?.quantity;

		return { id, price, quantity }
	});

	const total = items?.reduce((sum, item) => sum + (item.quantity ?? 0) * parseFloat(item.price), 0);

	const methods = useForm<FormProps>({
		mode: 'all',
		defaultValues,
		resolver: yupResolver(schema),
	})

	const path = [
		{
			id: 1,
			title: t('cart', true),
			url: '/cart'
		},
		{
			id: 2,
			title: t('placing an order', true),
			url: '/'
		},
	];

	const onSubmit: SubmitHandler<FormProps> = async (data) => {
		const { firstname, lastname, surname, email, telephone, comment, address } = data;

		await createOrder({
			fast: 0,
			firstname,
			lastname,
			surname,
			email,
			telephone,
			total,
			comment,
			payment_method: paymentMethod,
			shipping_method: shippingMethod,
			payment_address_1: department,
			payment_address_2: address,
			payment_city: city,
			ref_wirehouse: '',
			ref_city: '',
			products,
		}).then((response: { data?: { result: boolean }; error?: FetchBaseQueryError | SerializedError }) => {
			if (response?.data?.result) {
				methods.reset();
				dispatch(reset());
				navigate('/order/successful');
			} else if (response.error) {
				console.error('An error occurred:', response.error);
			}
		});
	}

	const onChange = (name: string, value: number | string | undefined) => {
		if(name === 'city') {
			setCity(value);
			setRef(dataNpCity?.[0].Addresses?.find((item: { MainDescription: string, Ref: string }) => item.MainDescription).Ref);
		} else if(name === 'shipping_method'){
			setShippingMethod(value);
		} else if(name === 'payment_method'){
			setPaymentMethod(value);
		} else if(name === 'department') {
			setDepartment(value);
		}
	}

	return <LayoutWrapper>
		<Helmet>
			<title>{ t('placing an order', true) } | luxshina.ua</title>
		</Helmet>
		<div className='max-w-5xl mx-auto'>
			<Breadcrumbs path={ path }/>
			<Title title='placing an order'/>
			<FormProvider { ...methods }>
				<form onSubmit={ methods.handleSubmit(onSubmit) }>
					<OrderComponent
						data={ data }
						isLoading={ isLoading }
						cartItems={ cartItems }
						setCity={ setCity }
						cityOptions={ cityOptions }
						warehousesOptions={ warehousesOptions }
						onChange={ onChange }
						shippingMethod={ shippingMethod }
						dataOrdersParam={ dataOrdersParam }
					/>
				</form>
			</FormProvider>
		</div>
	</LayoutWrapper>
};
