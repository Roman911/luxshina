import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppDispatch, useAppSelector, useAppTranslation } from '../../hooks';
import { addStorageCart, removeCart, setQuantity } from '../../store/reducers/cartSlice';
import { LayoutWrapper } from '../../components/Layout';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { NoResult, Spinner, Title } from '../../components/Lib';
import { CartComponent } from '../../components/Cart';
import { Language } from '../../models/language';

export const Cart = () => {
	const t = useAppTranslation();
	const dispatch = useAppDispatch();
	const { lang } = useAppSelector(state => state.langReducer);
	const { cartItems } = useAppSelector(state => state.cartReducer);
	const cartStorage = localStorage.reducerCart ? JSON.parse( localStorage.reducerCart ) : [];
	const id = cartItems.map(item => item.id).join(',');
	const { data, isLoading } = baseDataAPI.useFetchProductsQuery({id: `?Offer_id=${id}`});
	const path = [{ id: 1, title: t('cart', true), url: '/' }];

	useEffect(() => {
		if(cartStorage !== 0) {
			for(let i = 0; i < cartStorage.length; i++) {
				dispatch(addStorageCart(cartStorage[i]));
			}
		}
	}, [cartStorage, dispatch]);

	const removeProduct = (id: number) => {
		const storage = localStorage.reducerCart ? JSON.parse(localStorage.reducerCart) : [];
		localStorage.setItem('reducerCart', JSON.stringify(storage.filter((i: { id: number }) => i.id !== id)));
		dispatch(removeCart(id));
	};

	const onSetQuantity = (id: number, quantity: number) => {
		const storage = localStorage.reducerCart ? JSON.parse(localStorage.reducerCart) : [];
		localStorage.setItem('reducerCart', JSON.stringify([...storage.filter((i: { id: number }) => i.id !== id), {id, quantity}]));
		dispatch(setQuantity({ id, quantity }));
	}

	return <LayoutWrapper>
		<Helmet>
			<title>{ t('cart', true) } | luxshina.ua</title>
		</Helmet>
		<Breadcrumbs path={ path } />
		<Title title='cart' />
		<Spinner height='h-40' show={ isLoading }>
			{ cartStorage.length > 0 && data?.result ? <CartComponent
					data={ data }
					cartItems={ cartItems }
					removeProduct={ removeProduct }
					setQuantity={ onSetQuantity }
				/> :
				<NoResult
					noResultText={ lang === Language.UA ? 'Ви ще не додали до кошику жодного товару' : 'Вы еще не добавили в корзину ни одного товара' }
				/> }
		</Spinner>
	</LayoutWrapper>
};
