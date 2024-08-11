import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from '../../components/Layout/Footer';

export const Layout = () => {
	const navigate = useNavigate();
	const user = localStorage.getItem('user');

	useEffect(() => {
		if(!user) return navigate('/auth');
	}, [navigate, user])

	return <>
		<Header />
		<Outlet />
		<Footer />
	</>
}
