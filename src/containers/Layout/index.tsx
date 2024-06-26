import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { langSlice } from '../../store/reducers/langSlice';
import { useAppDispatch } from '../../hooks/redux';
import { Header } from './Header';

export const Layout = () => {
	const { changedLang } = langSlice.actions;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const lang = localStorage.getItem('lang');
	const user = localStorage.getItem('user');

	React.useEffect(() => {
		if(!user) {
			return navigate('/auth')
		}
	}, [navigate, user])

	React.useEffect(() => {
		if(lang) {
			dispatch(changedLang(lang))
		}
	}, [changedLang, dispatch, lang])

	return <>
		<Header />
		<Outlet />
		<footer>
			footer
		</footer>
	</>
}

