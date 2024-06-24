import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { langSlice } from '../../store/reducers/langSlice';
import { useAppDispatch } from '../../hooks/redux';
import { Header } from './Header';
import { LayoutWrapper } from '../../components/Layout';

export const Layout = () => {
	const location = useLocation();
	const { changedLang } = langSlice.actions;
	const dispatch = useAppDispatch();
	const lang = localStorage.getItem(JSON.stringify('lang'));

	React.useEffect(() => {
		if(lang) {
			dispatch(changedLang(lang))
		}
	}, [changedLang, dispatch, lang])

	return <>
		<Header />
		<LayoutWrapper homePage={ location.pathname === '/' }>
			<Outlet />
		</LayoutWrapper>
		<footer>
			footer
		</footer>
	</>
}

