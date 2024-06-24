import React from 'react';
import { Outlet } from 'react-router-dom';

import { langSlice } from '../../store/reducers/langSlice';
import { useAppDispatch } from '../../hooks/redux';
import { Header } from './Header';

export const Layout = () => {
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
		<Outlet />
		<footer>
			footer
		</footer>
	</>
}

