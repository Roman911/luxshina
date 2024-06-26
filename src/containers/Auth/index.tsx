import React from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthComponent } from '../../components/Auth';

export const Auth = () => {
	const [ login, setLogin ] = React.useState('' );
	const [ password, setPassword ] = React.useState('' );
	const [ error, setError ] = React.useState(false );
	const navigate = useNavigate();

	const handleSubmit = (e: { preventDefault: () => void; }) => {
		e.preventDefault();
		if(login === '/admin' && password === 'admin') {
			localStorage.setItem("user", "true");
			return navigate('/');
		} else {
			setError(true)
		}
	}

	return <AuthComponent
		login={ login }
		password={ password }
		error={ error }
		handleSubmit={ handleSubmit }
		setLogin={ setLogin }
		setPassword={ setPassword }
	/>
}
