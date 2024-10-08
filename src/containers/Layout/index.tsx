import { useEffect, useMemo, ReactNode } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { baseDataAPI } from '../../services/baseDataService';
import { getFromStorage } from '../../lib';
import { useAppDispatch } from '../../hooks';
import { setSettings } from '../../store/reducers/settingsSlice';
import { addBookmarksFromStorage } from '../../store/reducers/bookmarksSlice';
import { addComparisonFromStorage } from '../../store/reducers/comparisonSlice';
import { addCartFromStorage } from '../../store/reducers/cartSlice';
import { Header } from './Header';
import { Footer } from '../../components/Layout/Footer';

export const Layout = ({ children }: { children?: ReactNode }) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const { data: settings } = baseDataAPI.useFetchSettingsQuery('');
	const bookmarksStorage = useMemo(() => getFromStorage('reducerBookmarks'), []);
	const comparisonStorage = useMemo(() => getFromStorage('reducerComparison'), []);
	const cartStorage = useMemo(() => getFromStorage('reducerCart'), []);

	useEffect(() => {
		if(settings) dispatch(setSettings(settings));
	}, [navigate, settings, dispatch]);

	useEffect(() => {
		if(bookmarksStorage.length !== 0) dispatch(addBookmarksFromStorage(bookmarksStorage));
		if(comparisonStorage.length !== 0) dispatch(addComparisonFromStorage(comparisonStorage));
		if(cartStorage.length !== 0) dispatch(addCartFromStorage(cartStorage));
	}, [bookmarksStorage, cartStorage, comparisonStorage, dispatch]);

	useEffect(() => {
		if (settings?.[0].body_html) {
			const script = document.createElement('noscript');
			script.innerHTML = '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PDGTR8"\n' +
				'height="0" width="0" style="display:none;visibility:hidden"></iframe>';
			document.body.appendChild(script);
		}
	}, [settings]);

	return <>
		<Helmet>
			<script type="text/javascript">
				{ settings?.[0].head_html }
			</script>
		</Helmet>
		<Header />
		{ children || <Outlet /> }
		<Footer />
	</>
};
