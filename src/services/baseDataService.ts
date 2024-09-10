import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { BaseDataProps, CarModelProps } from '../models/baseData';
import type { SettingsProps } from '../models/settings';
import type { ProductsProps } from '../models/products';
import type { ProductProps } from '../models/product';

export const baseDataAPI = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_APP_BASE_URL,
		headers: {
			'Access-Control-Allow-Credentials': 'true',
			'Access-Control-Allow-Origin': import.meta.env.VITE_APP_ACCESS_ORIGIN,
		},
	}),
	tagTypes: ['baseDataAPI'],

	endpoints: (build) => ({
		fetchSettings: build.query<SettingsProps, string>({
			query: () => ({
				url: `/baseData/settings`,
			}),
		}),
		fetchBaseData: build.query<BaseDataProps, string>({
			query: () => ({
				url: '/baseData',
			}),
		}),
		fetchAutoModel: build.query<CarModelProps[], string>({
			query: (id) => ({
				url: `/baseData/getAutoBrandModel/${id}`,
			}),
		}),
		fetchAutoYear: build.query<number[], string>({
			query: (id) => ({
				url: `/baseData/getAutoBrandModelYear/${id}`,
			}),
		}),
		fetchAutoModelKit: build.query<CarModelProps[], string>({
			query: (id) => ({
				url: `/baseData/getAutoBrandModelKit/${id}`,
			}),
		}),
		fetchStatiAlias: build.query({
			query: (id) => ({
				url: `/baseData/StatiAlias/${id}`,
				// headers: {
				// 	'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
				// 	'Cache-Control': 'max-age=0',
				// 	'Upgrade-Insecure-Requests': '1',
				// }
			}),
		}),
		fetchProducts: build.query<ProductsProps | undefined, string>({
			query: (id) => ({
				url: `/api/getProducts${id}`,
			}),
		}),
		fetchProduct: build.query<ProductProps, string>({
			query: (id) => ({
				url: `/api/getProduct/${id}`,
			}),
		}),
	})
});
