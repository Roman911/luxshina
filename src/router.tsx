import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from "./etc/const";
import { Layout } from './containers/Layout';

import { Home } from './containers/Home';
import { AboutUs } from './containers/AboutUs';
import { Catalog } from './containers/Catalog';

const router = createBrowserRouter([
	{
		path: ROUTES.home,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: ROUTES.aboutUs,
				element: <AboutUs />
			},
			{
				path: ROUTES.catalog,
				element: <Catalog />
			},
		]
	}
]);

export const App = () => <RouterProvider router={ router } />
