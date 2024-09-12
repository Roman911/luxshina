import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { baseDataAPI } from '../../services/baseDataService';
import { useAppDispatch } from '../../hooks';
import { setSettings } from '../../store/reducers/settingsSlice';
import { Header } from './Header';
import { Footer } from '../../components/Layout/Footer';

export const Layout = () => {
	const navigate = useNavigate();
	const user = localStorage.getItem('user');
	const dispatch = useAppDispatch();
	const { data: settings } = baseDataAPI.useFetchSettingsQuery('');

	useEffect(() => {
		//if(!user) return navigate('/auth');
		if(settings) {
			dispatch(setSettings(settings));
		}
	}, [navigate, user, settings, dispatch])

	return <>
		<Header />
		<Outlet />
		<Footer />
	</>
}
