import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { langSlice } from '../../store/reducers/langSlice';
import { useAppDispatch } from '../../hooks';
import { Header } from './Header';
import { Footer } from '../../components/Layout/Footer';

export const Layout = () => {
	const { changedLang } = langSlice.actions;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const lang = localStorage.getItem('lang');
	const user = localStorage.getItem('user');

	useEffect(() => {
		if(!user) return navigate('/auth');
	}, [navigate, user])

	useEffect(() => {
		if(lang) dispatch(changedLang(lang));
	}, [changedLang, dispatch, lang])

	return <>
		<Header />
		<Outlet />
		<Footer />
	</>
}
