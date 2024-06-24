import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tyreBrandsAPI = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://opt.tyreclub.com.ua/api/'
	}),
	tagTypes: ['tyreBrandsAPI'],
	endpoints: (build) => ({
		fetchTyreBrands: build.mutation({
			query: (data) => ({
				url: '/TyreCatalog/Search',
				method: 'POST',
				data
			})
		})
	})
})
