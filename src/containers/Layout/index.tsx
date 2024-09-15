import { useEffect, ReactNode } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppDispatch } from '../../hooks';
import { setSettings } from '../../store/reducers/settingsSlice';
import { Header } from './Header';
import { Footer } from '../../components/Layout/Footer';

export const Layout = ({ children }: { children?: ReactNode }) => {
	const navigate = useNavigate();
	const user = localStorage.getItem('user');
	const dispatch = useAppDispatch();
	const { data: settings } = baseDataAPI.useFetchSettingsQuery('');

	useEffect(() => {
		if(settings) {
			dispatch(setSettings(settings));
		}
	}, [navigate, user, settings, dispatch])

	return <>
		<Header />
		{ children || <Outlet /> }
		<Footer />
	</>
};
