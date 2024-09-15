import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { BaseDataProps, CarModelProps, KitTyreSize, KitDiskSize, ManufModels } from '../models/baseData';
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
		fetchKitTyreSize: build.query<KitTyreSize[], string>({
			query: (id) => ({
				url: `/baseData/getKitTyreSize/${id}`,
			}),
		}),
		fetchKitDiskSize: build.query<KitDiskSize[], string>({
			query: (id) => ({
				url: `/baseData/getKitDiskSize/${id}`,
			}),
		}),
		fetchManufModels: build.query<ManufModels[], string>({
			query: (id) => ({
				url: `/api/getManufModels/${id}`,
			}),
		}),
		fetchStatiAlias: build.query({
			query: (id) => ({
				url: `/baseData/StatiAlias/${id}`,
			}),
		}),
		fetchProducts: build.query<ProductsProps | undefined, {id: string, start?: number, length?: number}>({
			query: ({ id, start = 0, length = 10 }) => ({
				url: `/api/getProducts${id}`,
				method: 'POST',
				body: {
					start,
					length
				}
			}),
		}),
		fetchProduct: build.query<ProductProps, string>({
			query: (id) => ({
				url: `/api/getProduct/${id}`,
			}),
		}),
	})
});
