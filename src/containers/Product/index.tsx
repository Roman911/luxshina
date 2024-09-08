import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppTranslation } from '../../hooks';

// import { ProductList } from '../ProductList';
import Modal from '../Modals';
import { QuickOrder } from '../Modals/QuickOrder';
import { OnlineInstallment } from '../../components/Modals';

import { LayoutWrapper } from '../../components/Layout';
import { ProductComponent } from '../../components/Product';
import { TextSeo } from '../../components/Home';
import { Title } from '../../components/Lib';
import { Breadcrumbs } from '../../components/Breadcrumbs';

export const Product = () => {
	const [isModalActive, setModalActive] = useState(false);
	const [modalType, setModalType] = useState('QuickOrder');
	const location = useLocation();
	const match = location.pathname.match(/\/v-(\d+)-/);
	const { data, isLoading } = baseDataAPI.useFetchProductQuery(match![1]);
	const t = useAppTranslation();

	const handleModalOpen = (type: 'QuickOrder' | 'OnlineInstallment') => {
		setModalActive(true);
		setModalType(type)
	};

	const handleModalClose = () => {
		setModalActive(false);
	};

	const path = [
		{
			id: 1,
			title: t('favorites', true),
			url: '/'
		}
	]

	return <div>
		<LayoutWrapper>
			<Breadcrumbs path={ path } />
			<ProductComponent data={ data } handleModalOpen={ handleModalOpen } isLoading={ isLoading } />
		</LayoutWrapper>
		<div className='container mx-auto'>
			<Title title={ t('similar products', true) } />
			{/*<ProductList*/}
			{/*	classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-3 md:px-0'*/}
			{/*	data={ dataProducts }*/}
			{/*/>*/}
			{/*<Title title='recently viewed' />*/}
			{/*<ProductList*/}
			{/*	classnames='grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-3 md:px-0'*/}
			{/*	data={ dataProducts }*/}
			{/*/>*/}
		</div>
		<TextSeo />
		{isModalActive && (
			<Modal onClose={handleModalClose} size={modalType === 'QuickOrder' ? 'sm:max-w-lg' : 'max-w-6xl'}>
				{modalType === 'QuickOrder' ? <QuickOrder /> : <OnlineInstallment />}
			</Modal>
		)}
	</div>
}
