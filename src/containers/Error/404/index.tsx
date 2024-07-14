import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
	const error = useRouteError();

	console.log('error', error)

	return <div>
		<h2>Oops</h2>
		<p>error</p>
	</div>
}