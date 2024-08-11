import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from "./etc/const";
import { Layout } from './containers/Layout';

import { Home } from './containers/Home';
import { Catalog } from './containers/Catalog';
import { Product } from './containers/Product';
import { Auth } from './containers/Auth';
import { Bookmarks } from './containers/Bookmarks';
import { Comparison } from './containers/Comparison';
import { Cart } from './containers/Cart';
import { Order } from './containers/Order';
import { CalculatorForTires } from './containers/CalculatorForTiresPage';

import { StaticPage } from './containers/StaticPage';

import { ErrorPage } from './containers/Error/404';

const router = createBrowserRouter([
	{
		path: ROUTES.home,
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: ROUTES.catalog,
				element: <Catalog />
			},
			{
				path: ROUTES.product,
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
			{
				path: ROUTES.aboutUs,
				element: <StaticPage page='about-us' title='about us' />
			},
			{
				path: ROUTES.shipment,
				element: <StaticPage page='shipment' title='delivery' />
			},
			{
				path: ROUTES.payment,
				element: <StaticPage page='payment' title='payment' />
			},
			{
				path: ROUTES.contacts,
				element: <StaticPage page='contacts' title='contacts' />
			},
			{
				path: ROUTES.guaranteeAndRefund,
				element: <StaticPage page='guarantee-and-refund' title='guarantee and refund' />
			},
			{
				path: ROUTES.publicOffer,
				element: <StaticPage page='public-offer' title='public offer agreement' />
			},
		]
	},
	{
		path: '/auth',
		element: <Auth />
	}
]);

export const App = () => <RouterProvider router={ router } />
