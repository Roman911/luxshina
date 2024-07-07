import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from "./etc/const";
import { Layout } from './containers/Layout';

import { Home } from './containers/Home';
import { AboutUs } from './containers/AboutUs';
import { Catalog } from './containers/Catalog';
import { Product } from './containers/Product';
import { Auth } from './containers/Auth';
import { Bookmarks } from './containers/Bookmarks';
import { Comparison } from './containers/Comparison';
import { Cart } from './containers/Cart';
import { Order } from './containers/Order';
import { CalculatorForTires } from './containers/CalculatorForTires';

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
			{
				path: ROUTES.catalog + '/:productId',
				element: <Product />
			},
			{
				path: ROUTES.bookmarks,
				element: <Bookmarks />
			},
			{
				path: ROUTES.comparison,
				element: <Comparison />
			},
			{
				path: ROUTES.cart,
				element: <Cart />
			},
			{
				path: ROUTES.order,
				element: <Order />
			},
			{
				path: ROUTES.tyreDiskSizeCalc,
				element: <CalculatorForTires />
			},
		]
	},
	{
		path: '/auth',
		element: <Auth />
	}
]);

export const App = () => <RouterProvider router={ router } />
