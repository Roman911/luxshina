import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { BaseDataProps } from '../models/baseData';

export const baseDataAPI = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/'
	}),
	tagTypes: ['baseDataAPI'],
	endpoints: (build) => ({
		fetchBaseData: build.query<BaseDataProps, string>({
			query: () => ({
				url: '/baseData',
			})
		})
	})
})
