export interface itemProps {
	full_name: string
	default_photo: number
	model: number
	group: number
	comments_count: number
	comments_avg_rate: number
	min_price: number
	best_offer: {
		year: number | null
	}
}
