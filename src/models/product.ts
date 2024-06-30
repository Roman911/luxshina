export interface ProductProps {
	data: {
		id: number
		brand: {
			id: number
			name: string
		}
		comments: {
			rate: number
			count: number
		}
		full_name: string
		offers: {
			cdate: number
			country_id: number
			country_iso_a2: string
			country_name: string
			country_name_ua: string
			id: number
			in_stock: number
			price: number
			provider: {
				city: {
					id: number
					name: string
					name_ua: string
				}
				id: number
				import: boolean
			},
			year: number
		}[]
		min_price: number
		model: {
			id: number
		}
		size_format: number
	}
}